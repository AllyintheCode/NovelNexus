import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const HomeDiscount = () => {
  return (
    <div className='max-w-[1200px] mx-auto mt-20 px-4'>
      <div className='flex flex-col gap-10 lg:flex-row lg:justify-between'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 * 0.2 }}
          viewport={{ once: true }}
          className='w-full lg:w-[49%] bg-[#008186] flex flex-col sm:flex-row p-[30px] sm:p-[50px] justify-between items-center relative'>
          <div className='max-w-[172px] max-h-[118px] mb-6 sm:mb-0'>
            <img src="/sale.png" alt="" />
          </div>
          <div className='text-center sm:text-left'>
            <h2 className='text-3xl text-amber-50 font-[600]'>
              Special sale on Featured books!
            </h2>
            <Link className='inline-block border-[#d37643] bg-[#d37643] py-[14px] px-[24px] text-white hover:border hover:border-[#d37643] hover:bg-[#fcf2dc] hover:text-[#d37643] duration-300 text-sm mt-5'>
              Shop Now
            </Link>
          </div>
          <img src="/discount.svg" alt="" className='absolute top-[-19px] right-[-15px]  w-[70px] sm:w-[100px] sm:top-[-29px] sm:right-[-27px]' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 * 0.2 }}
          viewport={{ once: true }}
          className='w-full lg:w-[49%] bg-[#e7b490] flex flex-col sm:flex-row p-[30px] sm:p-[50px] justify-between items-center relative'>
          <div className='max-w-[172px] max-h-[118px] mb-6 sm:mb-0'>
            <img src="/basket.png" alt="" />
          </div>
          <div className='text-center sm:text-left'>
            <h2 className='text-3xl text-[#008186] font-[600]'>
              Checkout for a discount up to 20%
            </h2>
            <Link className='inline-block border-[#008186] bg-[#d37643] py-[14px] px-[24px] text-white hover:border hover:border-[#d37643] hover:bg-[#fcf2dc] hover:text-[#d37643] duration-300 text-sm mt-5'>
              Checkout Now
            </Link>
          </div>
          <img src="/discount2.svg" alt="" className='absolute wtop-[-19px] right-[-15px] sm:top-[-29px] sm:right-[-27px] w-[70px] sm:w-[100px]' />
        </motion.div>
      </div>
    </div>
  )
}

export default HomeDiscount
