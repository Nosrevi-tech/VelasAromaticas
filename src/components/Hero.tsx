import React from 'react';
import { Flame } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <Flame className="h-12 w-12 text-amber-500 mx-auto" />
          <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Velas Aromáticas Artesanais
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Transforme seu ambiente com fragrâncias naturais feitas à mão com ingredientes selecionados.
            Cada vela é única e criada com amor para trazer conforto e bem-estar ao seu lar.
          </p>
        </div>
      </div>
    </div>
  );
}