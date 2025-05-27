import React from 'react'
import { Link } from 'react-router-dom'

const HomeDiscount = () => {
  return (
    <div className='max-w-[1200px] mx-auto mt-20'>
      <div className='flex justify-between'>
        <div className='max-w-[588px] max-h-[288px] bg-[#008186] flex p-[50px] justify-between items-center relative '>
          <div className='max-w-[172px] max-h-[118px]'>
            <img src="/sale.png" alt="" />
          </div>
          <div>
            <h2 className='max-w-[280px] text-3xl text-amber-50 font-[600]'>
              Special sale on Featured books !
            </h2>
            <Link className='flex border-[#d37643] bg-[#d37643] max-w-[125px] py-[14px] px-[24px] justify-center items-center text-white hover:border hover:border-[#d37643] hover:bg-[#fcf2dc] hover:text-[#d37643] duration-300 text-sm mt-5'>Shop Now</Link>
          </div>
          <img src="/discount.svg" alt="" className='absolute top-[-29px] right-[-27px]' />
        </div>
        <div className='max-w-[588px] max-h-[288px] bg-[#e7b490] flex p-[50px] justify-between items-center  relative'>
          <div className='max-w-[172px] max-h-[118px]'>
            <img src="/basket.png" alt="" />
          </div>
          <div>
            <h2 className='max-w-[280px] text-3xl text-[#008186] font-[600]'>
              Checkout for a discount up to 20%
            </h2>
            <Link className='flex border-[#008186] bg-[#d37643] max-w-[150px] py-[14px] px-[24px] justify-center items-center text-white hover:border hover:border-[#d37643] hover:bg-[#fcf2dc] hover:text-[#d37643] duration-300 text-sm mt-5'>Checkout Now</Link>
          </div>
          <img src="/discount2.svg" alt="" className='absolute top-[-29px] right-[-27px]' />
        </div>
      </div>
    </div>
  )
}

export default HomeDiscount