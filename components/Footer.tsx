import React from 'react';
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-brand-yellow mb-4">Pisang Nyamleng</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Usaha Mikro Kecil Menengah (UMKM) yang bergerak di bidang olahan pisang. Kami berkomitmen menghadirkan camilan sehat dan enak untuk keluarga Indonesia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigasi</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-brand-yellow transition">Beranda</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-brand-yellow transition">Tentang Kami</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-brand-yellow transition">Produk</a></li>
              <li><a href="#ai-recommend" className="text-gray-400 hover:text-brand-yellow transition">Rekomendasi AI</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h4 className="text-lg font-semibold mb-6">Hubungi Kami</h4>
             <ul className="space-y-4">
               <li className="flex items-start gap-3">
                 <MapPin className="text-brand-yellow mt-1 flex-shrink-0" size={20} />
                 <span className="text-gray-400">Jl. Pisang Raja No. 88, Yogyakarta, Indonesia 55281</span>
               </li>
               <li className="flex items-center gap-3">
                 <Phone className="text-brand-yellow flex-shrink-0" size={20} />
                 <span className="text-gray-400">+62 812 3456 7890</span>
               </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Keripik Pisang Nyamleng. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;