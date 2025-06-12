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
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='w-full lg:w-[49%] bg-[#008186] rounded-xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between relative shadow-lg'
        >
        
          <div className='w-[120px] sm:w-[150px] mb-6 sm:mb-0'>
            <img src="/sale.png" alt="Sale" className='w-full h-auto' />
          </div>

     
          <div className='text-center sm:text-left sm:ml-6 flex-1'>
            <h2 className='text-xl sm:text-2xl text-amber-50 font-semibold'>
              Special sale on Featured books!
            </h2>
            <Link
              to="/shop"
              className='inline-block mt-4 border-[#d37643] bg-[#d37643] py-3 px-6 text-white text-sm rounded hover:border hover:border-[#d37643] hover:bg-[#fcf2dc] hover:text-[#d37643] duration-300'
            >
              Shop Now
            </Link>
          </div>

         
          <img
            src="/discount.svg"
            alt="Discount"
            className='absolute top-[-20px] right-[-10px] w-[60px] sm:w-[90px]'
          />
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='w-full lg:w-[49%] bg-[#e7b490] rounded-xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between relative shadow-lg'
        >
          
          <div className='w-[120px] sm:w-[150px] mb-6 sm:mb-0'>
            <img src="/basket.png" alt="Basket" className='w-full h-auto' />
          </div>

        
          <div className='text-center sm:text-left sm:ml-6 flex-1'>
            <h2 className='text-xl sm:text-2xl text-[#008186] font-semibold'>
              Checkout for a discount up to 20%
            </h2>
            <Link
              to="/checkout"
              className='inline-block mt-4 border-[#008186] bg-[#d37643] py-3 px-6 text-white text-sm rounded hover:border hover:border-[#d37643] hover:bg-[#fcf2dc] hover:text-[#d37643] duration-300'
            >
              Checkout Now
            </Link>
          </div>

          
          <img
            src="/discount2.svg"
            alt="Discount2"
            className='absolute top-[-20px] right-[-10px] w-[60px] sm:w-[90px]'
          />
        </motion.div>
      </div>
    </div>
  )
}

export default HomeDiscount
