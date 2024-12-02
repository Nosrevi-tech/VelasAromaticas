// import React, { useState } from 'react';
// import { Plus, Pencil, Trash2, X } from 'lucide-react';
// import { useProducts } from '../contexts/ProductContext';
// import { Product } from '../types';
// import { ProductForm } from './ProductForm';
// import { formatCurrency } from '../utils/format';

// interface AdminPanelProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
//   const { products, deleteProduct } = useProducts();
//   const [editingProduct, setEditingProduct] = useState<Product | null>(null);
//   const [isAddingProduct, setIsAddingProduct] = useState(false);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//       <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
//         <div className="p-4 border-b flex justify-between items-center">
//           <h2 className="text-xl font-semibold">Painel Administrativo</h2>
//           <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
//             <X className="h-6 w-6" />
//           </button>
//         </div>

//         <div className="p-4">
//           <button
//             onClick={() => setIsAddingProduct(true)}
//             className="mb-4 flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors"
//           >
//             <Plus className="h-5 w-5" />
//             Adicionar Produto
//           </button>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {products.map(product => (
//               <div
//                 key={product.id}
//                 className="border rounded-lg p-4 flex gap-4"
//               >
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-32 h-32 object-cover rounded-md"
//                 />
//                 <div className="flex-1">
//                   <h3 className="font-semibold">{product.name}</h3>
//                   <p className="text-gray-600 text-sm">{product.description}</p>
//                   <p className="text-amber-600 font-medium mt-2">
//                     {formatCurrency(product.price)}
//                   </p>
//                   <div className="mt-4 flex gap-2">
//                     <button
//                       onClick={() => setEditingProduct(product)}
//                       className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
//                     >
//                       <Pencil className="h-4 w-4" />
//                       Editar
//                     </button>
//                     <button
//                       onClick={() => {
//                         if (confirm('Tem certeza que deseja excluir este produto?')) {
//                           deleteProduct(product.id);
//                         }
//                       }}
//                       className="flex items-center gap-1 text-red-600 hover:text-red-700"
//                     >
//                       <Trash2 className="h-4 w-4" />
//                       Excluir
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {(isAddingProduct || editingProduct) && (
//           <ProductForm
//             product={editingProduct}
//             onClose={() => {
//               setEditingProduct(null);
//               setIsAddingProduct(false);
//             }}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Plus, Pencil, Trash2, X, LogOut } from 'lucide-react';
import { useProducts } from '../contexts/ProductContext';
import { Product } from '../types';
import { ProductForm } from './ProductForm';
import { formatCurrency } from '../utils/format';
import { useAuth } from '../contexts/AuthContext';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const { products, deleteProduct } = useProducts();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  // Função para realizar logout
  const handleLogout = () => {
    // Remove dados de autenticação
    localStorage.removeItem('authToken');

    // Redireciona para a página de login
    window.location.href = '/login';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Painel Administrativo</h2>
          <div className="flex gap-2 items-center">
            <button
              onClick={handleLogout} // Chama a função handleLogout
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-4">
          <button
            onClick={() => setIsAddingProduct(true)}
            className="mb-4 flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors"
          >
            <Plus className="h-5 w-5" />
            Adicionar Produto
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 flex gap-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  <p className="text-amber-600 font-medium mt-2">
                    {formatCurrency(product.price)}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => setEditingProduct(product)}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
                    >
                      <Pencil className="h-4 w-4" />
                      Editar
                    </button>
                    <button
                      onClick={() => {
                        if (
                          confirm(
                            'Tem certeza que deseja excluir este produto?'
                          )
                        ) {
                          deleteProduct(product.id);
                        }
                      }}
                      className="flex items-center gap-1 text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {(isAddingProduct || editingProduct) && (
          <ProductForm
            product={editingProduct}
            onClose={() => {
              setEditingProduct(null);
              setIsAddingProduct(false);
            }}
          />
        )}
      </div>
    </div>
  );
}

// export function LogoutButton() {
//   const { logout } = useAuth();

//   const handleLogout = () => {
//     logout();
//     alert('Você foi desconectado!');
//   };

//   return (
//     <button
//       onClick={handleLogout}
//       className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
//     >
//       Sair
//     </button>
//   );
// }
