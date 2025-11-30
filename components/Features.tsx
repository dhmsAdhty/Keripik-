import React from 'react';
import { Leaf, Award, Heart } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Kenapa Harus Nyamleng?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami tidak sembarangan bikin keripik. Setiap keping dibuat dengan penuh cinta dan standar kualitas tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-yellow-50 hover:bg-yellow-100 transition duration-300">
            <div className="w-14 h-14 bg-brand-yellow rounded-xl flex items-center justify-center mx-auto mb-6 text-brand-brown">
              <Leaf className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Bahan Premium</h3>
            <p className="text-gray-600">
              Menggunakan Pisang Kepok pilihan langsung dari petani lokal. Tanpa pengawet berbahaya.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-yellow-50 hover:bg-yellow-100 transition duration-300">
            <div className="w-14 h-14 bg-brand-yellow rounded-xl flex items-center justify-center mx-auto mb-6 text-brand-brown">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Renyah Maksimal</h3>
            <p className="text-gray-600">
              Teknik penggorengan suhu tepat membuat keripik renyah tahan lama tanpa banyak minyak.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-yellow-50 hover:bg-yellow-100 transition duration-300">
            <div className="w-14 h-14 bg-brand-yellow rounded-xl flex items-center justify-center mx-auto mb-6 text-brand-brown">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Bumbu Melimpah</h3>
            <p className="text-gray-600">
              Nggak pelit bumbu! Setiap gigitan pasti berasa banget rasanya sampai ke hati.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;