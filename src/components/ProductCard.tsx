import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-1">{product.description}</p>
        <div className="mt-2 text-sm text-gray-500">
          <p>Fragrância: {product.fragrance}</p>
          <p>Tempo de queima: {product.burnTime}</p>
          <p>Peso: {product.weight}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold">R$ {product.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}