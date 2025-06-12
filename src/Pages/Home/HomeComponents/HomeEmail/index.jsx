import React from 'react'
import { motion } from 'framer-motion'

const HomeEmail = () => {
  return (
    <div className='max-w-[1200px] mx-auto mt-20 px-4'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>

        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='w-full lg:w-1/2'
        >
          <h3 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d37643] leading-tight'>
            Become a Part of Our Book Enthusiasts Community!
          </h3>

          <p className='text-[#a28e7c] mt-4'>
            Sed ac sit accumsan sed. Mauris senectus eget in faucibus senectus integer tortor id a. Feugiat turpis aliquro tellus ut vitae aliquet facilisi.
          </p>

          <form className='my-6 flex flex-col sm:flex-row gap-3'>
            <input
              type="email"
              className='bg-white p-3 w-full sm:w-[250px] border border-gray-300 rounded-md'
              placeholder='Enter your Email...'
            />
            <button
              type="submit"
              className='bg-[#d37643] text-white px-6 py-3 rounded-md hover:bg-[#fcf2dc] hover:text-[#d37643] border border-transparent hover:border-[#d37643] transition duration-300 text-sm'
            >
              Submit
            </button>
          </form>

          <p className='text-[#a28e7c] max-w-[350px]'>
            Subscribe to our mail list & get informed about our latest updates!
          </p>
        </motion.div>

   
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='w-full lg:w-1/2 flex justify-center'
        >
          <img
            src="/manphoto.webp"
            alt="Man reading"
            className='w-[300px] sm:w-[400px] lg:w-[500px] object-contain'
          />
        </motion.div>

      </div>
    </div>
  )
}

export default HomeEmail
