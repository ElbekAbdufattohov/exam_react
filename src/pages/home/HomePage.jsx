import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import hero from "../../assets/hero.jpg";
import useFetch from '../../hooks/useFetch';
import img11 from "../../assets/11.png";
import img12 from "../../assets/12.png";
import img13 from "../../assets/13.png";
import img14 from "../../assets/14.png";

const HomePage = () => {
  const [openedCategory, setOpenedCategory] = useState(null);
  // data — bu endi mahsulotlar massivi
  const { data: products, isLoading } = useFetch({ url: "products", key: ["products"] });

  const allCategories = products ? [...new Set(products.map((el) => el.category))] : [];

  function viewMore(category) {
    setOpenedCategory(openedCategory === category ? null : category);
  }

  if (isLoading) return (
    <div className='w-full h-screen flex items-center justify-center text-2xl font-bold'>
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      <span className="ml-3">Yuklanmoqda...</span>
    </div>
  );

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-[#F2F0F1] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="pt-10 pb-10 lg:pt-24 lg:pb-24 lg:w-1/2 text-center lg:text-left">
              <h1 className="text-[36px] font-black uppercase leading-[1.1] tracking-tighter text-black sm:text-[56px] lg:text-[64px]">
                Find clothes <br className="hidden sm:block" /> that matches <br className="hidden sm:block" /> your style
              </h1>
              <p className="mt-5 mx-auto lg:mx-0 max-w-lg text-[14px] leading-relaxed text-black/60 sm:text-base">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality.
              </p>
              <button className="mt-8 w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-black px-12 text-base font-medium text-white transition hover:scale-105 active:scale-95">
                Shop Now
              </button>

              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-10">
                <Stat value="200+" label="Brands" />
                <Stat value="2,000+" label="Products" />
                <Stat value="30,000+" label="Customers" />
              </div>
            </div>

            <div className="relative w-full lg:w-1/2">
              <img src={hero} alt="Hero" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className='container mx-auto px-4 py-16 lg:px-10'>
        {allCategories.map((category) => (
          <div key={category} className='mb-20 border-b pb-12 last:border-none'>
            <h2 className='text-center uppercase text-[28px] md:text-[40px] font-black mb-10'>
              {category}
            </h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
              {products
                ?.filter(item => item.category === category)
                ?.slice(0, openedCategory === category ? 12 : 4)
                ?.map(el => (
                  <ProductCard key={el.id} {...el} />
                ))
              }
            </div>

            <div className='flex justify-center mt-12'>
              <button
                onClick={() => viewMore(category)}
                className='border-2 border-black/10 px-12 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-all'
              >
                {openedCategory === category ? "Yopish" : "Hammasini ko'rish"}
              </button>
            </div>
          </div>
        ))}

        <div>
          <div className="mx-auto max-w-7xl bg-[#F0F0F0] rounded-[40px] p-6 md:p-16">

            {/* Sarlavha */}
            <h2 className="mb-10 text-center text-[32px] md:text-[48px] font-black uppercase tracking-tight text-black">
              Browse by dress style
            </h2>

            {/* Grid sistemasi */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

              {/* 1. Casual - Kichikroq box */}
              <div className="relative h-[190px] md:h-[289px] overflow-hidden rounded-[20px] bg-white group cursor-pointer">
                <span className="absolute left-6 top-6 z-10 text-[24px] md:text-[36px] font-bold text-black">
                  Casual
                </span>
                <div className="w-full h-full absolute left-35 top-5 bg-gray-200">
                 <img src={img11} alt="" />
                </div>
              </div>

              {/* 2. Formal - Kattaroq box (2 qismni egallaydi) */}
              <div className="relative h-[190px] md:h-[289px] md:col-span-2 overflow-hidden rounded-[20px] bg-white group cursor-pointer">
                <span className="absolute left-6 top-6 z-10 text-[24px] md:text-[36px] font-bold text-black">
                  Formal
                </span>
                <div className="w-full h-full bg-gray-300">
                 <img src={img12} alt="" />
                </div>
              </div>

              {/* 3. Party - Kattaroq box (2 qismni egallaydi) */}
              <div className="relative h-[190px] md:h-[289px] md:col-span-2 overflow-hidden rounded-[20px] bg-white group cursor-pointer">
                <span className="absolute left-6 top-6 z-10 text-[24px] md:text-[36px] font-bold text-black">
                  Party
                </span>
                <div className="w-full h-full bg-gray-300">
                  <img src={img13} alt="" />
                </div>
              </div>

              {/* 4. Gym - Kichikroq box */}
              <div className="relative h-[190px] md:h-[289px] overflow-hidden rounded-[20px] bg-white group cursor-pointer">
                <span className="absolute left-6 top-6 z-10 text-[24px] md:text-[36px] font-bold text-black">
                  Gym
                </span>
                <div className="w-full h-full bg-gray-200">
                  <img src={img14} alt="" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const Stat = ({ value, label }) => (
  <div className="text-center lg:text-left border-r border-black/10 last:border-none pr-6">
    <span className="block text-2xl lg:text-3xl font-bold">{value}</span>
    <span className="text-xs lg:text-sm text-black/60">{label}</span>
  </div>
);

export default HomePage;