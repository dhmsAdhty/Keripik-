import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import FlavorRecommender from './components/FlavorRecommender';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream font-sans text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FlavorRecommender />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;