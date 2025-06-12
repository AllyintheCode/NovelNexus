import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion'
import authors from '../../../../Mock/author'

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6
    }
  })
}

const HomeAuthor = () => {
  return (
    <div className='max-w-[1200px] mx-auto mt-20 px-4'>
      
      <motion.div
        className='flex flex-col md:flex-row justify-between items-start md:items-end gap-6'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className='text-3xl md:text-5xl font-bold text-[#d37643] md:w-[55%]'>
          Discover the talented Authors Behind the Stories
        </h2>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/authors"
            className='flex border-[#d37643] bg-[#d37643] w-[140px] h-[40px] justify-center items-center text-white hover:border hover:border-[#d37643] hover:bg-[#fcf2dc] hover:text-[#d37643] duration-300 text-sm mt-4 md:mt-0'
          >
            See all authors
          </Link>
        </motion.div>
      </motion.div>

      <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-[#fcf2dc]'>
        {authors.map((author, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <Link to="/author">
              <div className='bg-[#008186] w-full h-full p-8 rounded-xl hover:shadow-lg transition'>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={author.img}
                  alt={author.name}
                  className='w-[160px] h-[160px] rounded-full object-cover mx-auto'
                />
                <h3 className='text-center mt-5 text-lg font-semibold'>{author.name}</h3>
                <h4 className='text-center text-sm mt-1'>{author.title}</h4>
                <div className='flex justify-center items-center gap-4 mt-5 text-xl'>
                  <FaFacebookSquare />
                  <FaLinkedin />
                  <FaInstagramSquare />
                  <FaSquareXTwitter />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default HomeAuthor
