import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6"
import { motion } from 'framer-motion'
import posts from '../../Mock/posts'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6
    }
  })
}

const Author = () => {
  return (
    <div className='max-w-[1200px] mx-auto mt-20 px-4'>
      <motion.div
        className='flex flex-col md:flex-row justify-between items-start md:items-end gap-4'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className='text-3xl md:text-5xl font-bold text-[#d37643] md:w-3/6'>
          Explore our latest book related blog posts.
        </h3>
        <Link
          to="/authors"
          className='flex border-[#d37643] bg-[#d37643] w-[140px] h-[40px] justify-center items-center text-white hover:border hover:border-[#d37643] hover:bg-[#fcf2dc] hover:text-[#d37643] duration-300 text-sm mt-4 md:mt-0'
        >
          See all authors
        </Link>
      </motion.div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {posts.map((post, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className='mt-8 w-full'
          >
            <img src={post.img} alt={post.title} className='w-full h-auto' />
            <h3 className='text-2xl font-medium text-[#008186] ml-3 mt-5 mb-12 break-words'>
              {post.title}
            </h3>
            <div className='flex justify-between items-center px-3'>
              <div>
                <h4 className='text-[#d37643]'>{post.author}</h4>
                <h5 className='text-[#999189]'>{post.date}</h5>
              </div>
              <Link className='flex items-center gap-2 text-[#008186] group cursor-pointer'>
                Read More
                <FaArrowRight className='transform transition-transform duration-300 group-hover:translate-x-2' />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Author
