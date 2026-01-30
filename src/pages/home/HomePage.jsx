import React from 'react';
import femily from "../../assets/femily.jpg"
const HomePage = () => {
  return (
    <div className="bg-[#F2F0F1] min-h-screen font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 tracking-tighter">
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </h1>
            <p className="text-gray-600 text-sm md:text-base mb-8 max-w-md">
              Browse through our diverse range of meticulously crafted garments, 
              designed to bring out your individuality and cater to your sense of style.
            </p>
            
            <button className="bg-black text-white px-12 py-4 rounded-full cursor-pointer text-lg font-medium hover:bg-gray-800 transition-all w-full md:w-auto">
              Shop Now
            </button>

            <div className="flex flex-wrap gap-8 mt-12">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold">200+</h3>
                <p className="text-gray-500 text-sm">International Brands</p>
              </div>
              <div className="border-l border-gray-300 h-12 hidden md:block"></div>
              <div>
                <h3 className="text-2xl md:text-4xl font-bold">2,000+</h3>
                <p className="text-gray-500 text-sm">High-Quality Products</p>
              </div>
              <div className="border-l border-gray-300 h-12 hidden md:block"></div>
              <div>
                <h3 className="text-2xl md:text-4xl font-bold">30,000+</h3>
                <p className="text-gray-500 text-sm">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[600px] flex items-end">
            <div className="absolute top-10 right-0 animate-pulse">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L54.1 45.9L100 50L54.1 54.1L50 100L45.9 54.1L0 50L45.9 45.9L50 0Z" fill="black"/>
              </svg>
            </div>
            
            <div className="absolute top-1/2 left-0 animate-bounce">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L54.1 45.9L100 50L54.1 54.1L50 100L45.9 54.1L0 50L45.9 45.9L50 0Z" fill="black"/>
              </svg>
            </div>

            <img 
              src={femily} 
              alt="Fashion Models" 
              className="w-full h-full object-cover z-0"
            />
          </div>
        </div>
      </div>

      <div className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-6 opacity-90">
          <span className="text-white text-2xl md:text-3xl font-serif font-bold italic">VERSACE</span>
          <span className="text-white text-2xl md:text-3xl font-serif font-bold tracking-widest">ZARA</span>
          <span className="text-white text-2xl md:text-3xl font-sans font-bold uppercase tracking-tighter">GUCCI</span>
          <span className="text-white text-2xl md:text-3xl font-serif font-black uppercase">PRADA</span>
          <span className="text-white text-2xl md:text-3xl font-sans font-medium">Calvin Klein</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;