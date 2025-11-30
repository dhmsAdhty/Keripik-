import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">Varian Rasa Favorit</h2>
            <p className="text-gray-600">Pilih rasa yang paling pas buat nemenin harimu</p>
          </div>
          <a href="#" className="hidden md:block text-brand-brown font-semibold hover:underline">
            Lihat Semua Menu &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <a href="#" className="text-brand-brown font-semibold hover:underline">
            Lihat Semua Menu &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;