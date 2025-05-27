import React from 'react'
import favoritData from '../../../../Mock/favoritData'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const HomeFavoriteBook = () => {
  return (
    <div className='max-w-[1200px] mx-auto mt-30'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 * 0.2 }}
        viewport={{ once: true }}
        className='flex justify-between'>
        <div className='text-[#d37643] text-5xl font-[600] '>
          Our most popular books
        </div>
        <div>
          <Link to={"/shop"} className='flex border-[#d37643] bg-[#d37643] w-[150px] h-[36px] justify-center items-center text-white hover:border hover:border-[#d37643] hover:bg-[#fcf2dc] hover:text-[#d37643] duration-300 text-sm'>See all Book</Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 * 0.2 }}
        viewport={{ once: true }}
        className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center mt-12  gap-5'>
        {favoritData.map(({ id, image, title, author, price, oldPrice }) => (
          <div key={id}>
            <img
              src={image}
              className='w-[200px] h-[290px] ml-1 hover:scale-[1.1] transition duration-500'
            />
            <h2 className='text-[#008186] text-xl mt-3'>{title}</h2>
            <h3 className='text-[#9a8574] mt-3'>{author}</h3>
            <p className='text-[#d37643] text-2xl font-[600] my-3'>{price}</p>
            <p className='line-through text-[#a2a09d]'>{oldPrice}</p>
            <Link className='flex mt-3 border-[#d37643] bg-[#d37643] w-[220px] h-[36px] justify-center items-center text-white hover:border hover:border-[#d37643] hover:bg-[#fcf2dc] hover:text-[#d37643] duration-300 text-sm'>
              Add to Card
            </Link>
          </div>
        ))}
      </motion.div>

    </div>
  )
}

export default HomeFavoriteBook