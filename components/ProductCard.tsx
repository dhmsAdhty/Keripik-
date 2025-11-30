import React from 'react';
import { Product } from '../types';
import { WA_NUMBER } from '../constants';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isRecommended?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isRecommended = false }) => {
  const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=Halo,%20saya%20mau%20pesan%20${encodeURIComponent(product.name)}`;

  return (
    <div className={`group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full ${isRecommended ? 'ring-4 ring-brand-yellow scale-105 z-10' : ''}`}>
      {isRecommended && (
        <div className="absolute top-0 left-0 w-full bg-brand-yellow text-brand-brown text-center py-1 text-xs font-bold uppercase tracking-wider z-20">
          Rekomendasi Buat Kamu
        </div>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.badge && !isRecommended && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {product.badge}
          </div>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 flex-1">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-brand-brown font-bold text-lg">
            Rp {product.price.toLocaleString('id-ID')}
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-yellow-100 text-amber-900 px-4 py-2 rounded-lg font-medium hover:bg-brand-yellow transition"
          >
            <ShoppingCart size={18} />
            Beli
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;