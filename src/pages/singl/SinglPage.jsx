import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const SinglPage = () => {
  const { id } = useParams()
  // Data massiv emas, bitta obyekt bo'lib keladi
  const { data: product, isLoading, error } = useFetch({ url: `products/${id}`, key: ["product", id] })

  if (isLoading) return <div className="p-20 text-center text-xl font-semibold">Yuklanmoqda...</div>
  if (error) return <div className="p-20 text-center text-red-500">Xatolik yuz berdi!</div>

  return (
    <section className="py-10 px-4">
      <div className='container mx-auto max-w-6xl'>
        <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
          {/* Image Side */}
          <div className="w-full md:w-1/2 bg-[#F0EEED] rounded-[20px] p-6 md:p-12 flex items-center justify-center">
            <img 
              src={product?.image} 
              alt={product?.title} 
              className="max-h-75 md:max-h-125 object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Details Side */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className='text-[28px] lg:text-[48px] font-black uppercase leading-tight'>
              {product?.title}
            </h1>
            
            <div className='flex items-center gap-3 text-lg'>
              <span className='text-yellow-400 font-bold'>★ {product?.rating?.rate}</span> 
              <span className="text-black/40 text-sm">({product?.rating?.count} reviews)</span>
            </div>

            <div className="text-3xl font-bold">${product?.price}</div>
            
            <p className="text-black/60 leading-relaxed text-sm lg:text-base border-b pb-8">
              {product?.description}
            </p>

            <div className="flex flex-col gap-4">
              <span className="text-black/60">Tanlovlar</span>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-black cursor-pointer ring-2 ring-offset-2 ring-black"></div>
                <div className="w-10 h-10 rounded-full bg-blue-900 cursor-pointer"></div>
                <div className="w-10 h-10 rounded-full bg-green-900 cursor-pointer"></div>
              </div>
            </div>

            <button className="w-full md:max-w-xs bg-black text-white py-4 rounded-full font-bold hover:bg-neutral-800 transition active:scale-95 mt-4">
              Savatga qo'shish
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SinglPage;