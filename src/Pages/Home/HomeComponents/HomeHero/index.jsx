import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

const HomeHero = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-16 py-10'>
      <div className='w-full lg:w-1/2'>
        <div className='flex items-center gap-3'>
          <div className='h-[1px] w-5 bg-[#008186]' />
          <div className='text-[#008186] text-xs'>
            Welcome to NolNexus
          </div>
        </div>

        <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold mt-6 text-[#d37643]'>
          Books That Shape Your Future
        </h1>

        <p className='text-[#917a69] mt-4 text-sm sm:text-base'>
          Rhoncus in ornare eu fusce morbi amet ut est in. A urna dui urna et orci urna eu nam bibendum. Amet at ac blandit interdum maecenas praesent posuere.
        </p>

        <div className='flex gap-5 mt-6 items-center'>
          <Link className='flex border border-[#d37643] bg-[#d37643] w-[100px] h-[36px] justify-center items-center text-white hover:border hover:border-[#d37643] hover:bg-[#fcf2dc] hover:text-[#d37643] duration-300 text-sm' to={"/shop"}>
            Buy Now
          </Link>

          <Link className='flex items-center gap-2 text-[#008186] group cursor-pointer'>
            Read More
            <FaArrowRight className='transform transition-transform duration-300 group-hover:translate-x-2' />
          </Link>
        </div>
      </div>


      <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
        <img src="/66d990c22be5e82ba89936d9_iMAGE-p-1080.webp" alt="Hero" className='w-full h-auto' />
      </div>
    </div>
  )
}

export default HomeHero
