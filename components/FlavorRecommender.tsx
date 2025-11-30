import React, { useState } from 'react';
import { getFlavorRecommendation } from '../services/geminiService';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { Sparkles, Loader2, Send } from 'lucide-react';

const FlavorRecommender: React.FC = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{ id: string; reason: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setRecommendation(null);

    try {
      const result = await getFlavorRecommendation(input);
      setRecommendation({
        id: result.recommendedProductId,
        reason: result.reasoning
      });
    } catch (error) {
      console.error(error);
      alert("Maaf, asisten AI sedang sibuk. Coba lagi nanti ya!");
    } finally {
      setIsLoading(false);
    }
  };

  const recommendedProduct = recommendation 
    ? PRODUCTS.find(p => p.id === recommendation.id) 
    : null;

  return (
    <section id="ai-recommend" className="py-20 bg-brand-brown text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-yellow rounded-full blur-3xl"></div>
         <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 mb-6">
           <Sparkles className="w-4 h-4 text-brand-yellow" />
           <span className="text-sm font-medium text-brand-yellow">Smart Flavor Assistant</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Bingung Pilih Rasa Apa?</h2>
        <p className="text-white/80 mb-8 max-w-lg mx-auto">
          Ceritakan suasana hatimu atau apa yang lagi kamu pengen (misal: "lagi galau butuh yang manis" atau "mau begadang nonton bola"), biar AI kami yang pilihin!
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-12">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Contoh: Aku lagi pengen yang pedes nendang buat melek..."
              className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:bg-white/20 backdrop-blur-sm transition pr-14"
            />
            <button
              type="submit"
              disabled={isLoading || !input}
              className="absolute right-2 p-2.5 bg-brand-yellow rounded-full text-brand-brown hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </div>
        </form>

        {recommendedProduct && recommendation && (
          <div className="animate-fade-in-up bg-white rounded-3xl p-6 md:p-8 shadow-2xl text-left max-w-3xl mx-auto">
             <div className="flex flex-col md:flex-row gap-8 items-center">
               <div className="flex-1 order-2 md:order-1">
                 <div className="mb-4">
                   <h3 className="text-brand-brown font-bold text-xl mb-1">Rekomendasi Buat Kamu:</h3>
                   <p className="text-gray-600 italic">"{recommendation.reason}"</p>
                 </div>
                 <div className="hidden md:block">
                   <ProductCard product={recommendedProduct} isRecommended />
                 </div>
               </div>
               
               {/* Mobile only view for the card essentially */}
               <div className="w-full md:hidden order-1">
                  <ProductCard product={recommendedProduct} isRecommended />
               </div>
             </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FlavorRecommender;