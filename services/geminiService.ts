import { GoogleGenAI, Type } from "@google/genai";
import { PRODUCTS } from '../constants';
import { RecommendationResponse } from '../types';

export const getFlavorRecommendation = async (userInput: string): Promise<RecommendationResponse> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });

  // Construct a clear list of products for the model context
  const productList = PRODUCTS.map(p => `- ID: ${p.id}, Name: ${p.name}, Desc: ${p.description}`).join('\n');

  const systemInstruction = `
    Anda adalah asisten cerdas untuk toko 'Keripik Pisang Nyamleng'.
    Tugas anda adalah merekomendasikan SATU varian rasa keripik pisang berdasarkan input suasana hati atau preferensi rasa pengguna.
    
    Daftar Produk Kami:
    ${productList}

    Analisis input pengguna. Jika mereka suka manis, sarankan Coklat atau Keju. Jika suka pedas, sarankan Pedas Balado. Jika suka yang klasik/gurih asli, sarankan Original.
    Berikan alasan singkat (maksimal 1 kalimat) yang menarik dalam Bahasa Indonesia yang santai dan gaul.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userInput,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedProductId: {
              type: Type.STRING,
              description: "The ID of the recommended product (original, coklat, pedas, or keju)",
              enum: PRODUCTS.map(p => p.id)
            },
            reasoning: {
              type: Type.STRING,
              description: "Short persuasive reason in Indonesian why this flavor fits the user."
            }
          },
          required: ["recommendedProductId", "reasoning"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    return JSON.parse(text) as RecommendationResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback in case of error
    return {
      recommendedProductId: 'original',
      reasoning: 'Wah, sepertinya koneksi lagi gangguan, tapi Original selalu jadi pilihan aman yang enak!'
    };
  }
};