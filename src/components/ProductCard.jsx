import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({image, title, price, rating, id}) => {
  return (
    <Link to={`/product/${id}`} className='group flex flex-col w-full'>
      <div className='aspect-square overflow-hidden bg-[#F0EEED] rounded-[20px]'>
        <img 
          className='w-full h-full object-contain mix-blend-multiply p-12 group-hover:scale-110 transition-transform duration-300' 
          src={image} 
          alt={title} 
        />
      </div>
      <div className='flex mt-4 flex-col gap-1'>
        <h3 className='text-[16px] lg:text-[18px] font-bold truncate'>{title}</h3>
        <div className='flex items-center gap-2'>
          <span className='text-yellow-400'>★ {rating?.rate}</span>
          <span className='text-black/40 text-sm'>/5</span>
        </div>
        <p className='text-[20px] lg:text-[24px] font-bold'>${price}</p>
      </div>
    </Link>
  )
}

export default ProductCard
