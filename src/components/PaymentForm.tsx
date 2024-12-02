// import React, { useState } from 'react';
// import { PaymentMethod } from '../types';
// import { formatCurrency } from '../utils/format';

// interface PaymentFormProps {
//   total: number;
//   onClose: () => void;
// }

// export function PaymentForm({ total, onClose }: PaymentFormProps) {
//   const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     // Simulação de processamento de pagamento
//     await new Promise(resolve => setTimeout(resolve, 2000));

//     alert('Pagamento processado com sucesso!');
//     setLoading(false);
//     onClose();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <h3 className="font-semibold mb-2">Método de Pagamento</h3>
//         <div className="flex gap-4">
//           <label className="flex items-center">
//             <input
//               type="radio"
//               name="paymentMethod"
//               value="credit"
//               checked={paymentMethod === 'credit'}
//               onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
//               className="mr-2"
//             />
//             Cartão de Crédito
//           </label>
//           <label className="flex items-center">
//             <input
//               type="radio"
//               name="paymentMethod"
//               value="debit"
//               checked={paymentMethod === 'debit'}
//               onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
//               className="mr-2"
//             />
//             Cartão de Débito
//           </label>
//           <label className="flex items-center">
//             <input
//               type="radio"
//               name="paymentMethod"
//               value="pix"
//               checked={paymentMethod === 'pix'}
//               onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
//               className="mr-2"
//             />
//             PIX
//           </label>
//         </div>
//       </div>

//       {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Número do Cartão</label>
//             <input
//               type="text"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
//               placeholder="1234 5678 9012 3456"
//               maxLength={19}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Nome no Cartão</label>
//             <input
//               type="text"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
//               placeholder="Nome como está no cartão"
//             />
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Data de Validade</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
//                 placeholder="MM/AA"
//                 maxLength={5}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">CVV</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
//                 placeholder="123"
//                 maxLength={3}
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       {paymentMethod === 'pix' && (
//         <div className="text-center p-4 border rounded-lg">
//           <div className="mb-4">
//             <img
//               src="https://images.unsplash.com/photo-1612810806695-30f7a8258391?auto=format&fit=crop&q=80"
//               alt="QR Code PIX"
//               className="mx-auto w-48 h-48 object-cover"
//             />
//           </div>
//           <p className="text-sm text-gray-600">
//             Escaneie o QR Code acima com seu aplicativo bancário para pagar {formatCurrency(total)}
//           </p>
//         </div>
//       )}

//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 transition-colors disabled:opacity-50"
//       >
//         {loading ? 'Processando...' : `Pagar ${formatCurrency(total)}`}
//       </button>
//     </form>
//   );
// }

import React, { useState } from 'react';
import { PaymentMethod } from '../types';
import { formatCurrency } from '../utils/format';

interface PaymentFormProps {
  total: number;
  onClose: () => void;
  isUserRegistered: boolean; // Propriedade para verificar se o usuário está cadastrado
}

export function PaymentForm({
  total,
  onClose,
  isUserRegistered,
}: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isUserRegistered) {
      setError('Você precisa estar cadastrado para realizar o pagamento.');
      return;
    }

    setLoading(true);
    setError(null);

    // Simulação de processamento de pagamento
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert('Pagamento processado com sucesso!');
    setLoading(false);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h3 className="font-semibold mb-2">Método de Pagamento</h3>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="credit"
              checked={paymentMethod === 'credit'}
              onChange={(e) =>
                setPaymentMethod(e.target.value as PaymentMethod)
              }
              className="mr-2"
            />
            Cartão de Crédito
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="debit"
              checked={paymentMethod === 'debit'}
              onChange={(e) =>
                setPaymentMethod(e.target.value as PaymentMethod)
              }
              className="mr-2"
            />
            Cartão de Débito
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="pix"
              checked={paymentMethod === 'pix'}
              onChange={(e) =>
                setPaymentMethod(e.target.value as PaymentMethod)
              }
              className="mr-2"
            />
            PIX
          </label>
        </div>
      </div>

      {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Número do Cartão
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nome no Cartão
            </label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              placeholder="Nome como está no cartão"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Data de Validade
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                placeholder="MM/AA"
                maxLength={5}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                placeholder="123"
                maxLength={3}
              />
            </div>
          </div>
        </div>
      )}

      {paymentMethod === 'pix' && (
        <div className="text-center p-4 border rounded-lg">
          <div className="mb-4">
            <img
              src="https://images.unsplash.com/photo-1612810806695-30f7a8258391?auto=format&fit=crop&q=80"
              alt="QR Code PIX"
              className="mx-auto w-48 h-48 object-cover"
            />
          </div>
          <p className="text-sm text-gray-600">
            Escaneie o QR Code acima com seu aplicativo bancário para pagar{' '}
            {formatCurrency(total)}
          </p>
        </div>
      )}

      {error && <div className="text-red-600 text-sm font-medium">{error}</div>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 transition-colors disabled:opacity-50"
      >
        {loading ? 'Processando...' : `Pagar ${formatCurrency(total)}`}
      </button>
    </form>
  );
}
