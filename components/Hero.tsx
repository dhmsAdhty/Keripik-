import React from 'react';
import { WA_NUMBER } from '../constants';

const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=Halo%20kak,%20saya%20mau%20pesan%20keripik%20pisangnya%20dong!`;

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-yellow-100 text-brand-brown text-sm font-semibold mb-6">
              ✨ Asli Pisang Kepok Pilihan
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Renyah, Manis, <br />
              <span className="text-brand-yellow drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-600">
                Bikin Nagih!
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Cemilan asik buat nemenin hari-harimu. Dibuat dari pisang kepok segar dengan bumbu rahasia yang melimpah. Sekali coba, pasti mau lagi!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 rounded-full bg-brand-brown text-white font-semibold shadow-lg hover:bg-amber-900 transition transform hover:-translate-y-1"
              >
                Pesan Sekarang
              </a>
              <a
                href="#products"
                className="px-8 py-3.5 rounded-full bg-white text-brand-brown border-2 border-brand-brown/20 font-semibold hover:bg-yellow-50 transition"
              >
                Lihat Varian
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-full">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-brand-brown rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition duration-500">
               <img 
                 src="https://picsum.photos/600/400?random=10" 
                 alt="Keripik Pisang Delicious" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                 <p className="text-white font-bold text-lg">Fresh from the Oven!</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;