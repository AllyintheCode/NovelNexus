import React from 'react'
import mainData from '../../../../Mock/mainData'
import { motion } from 'framer-motion'

const HomeMainAbout = () => {
  const imageItem = mainData.find(item => item.image)
  const leftItems = mainData.filter(item => !item.image).slice(0, 2)
  const rightItems = mainData.filter(item => !item.image).slice(2)

  return (
    <div className='max-w-[1200px] mx-auto px-4 mt-20 mb-20'>
      
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className='text-3xl sm:text-4xl md:text-5xl text-center mx-auto text-[#d37643] font-semibold mb-16 max-w-3xl'
      >
        Discover powerful features to elevate your reading.
      </motion.div>

     
      <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='flex flex-col items-center lg:items-start gap-10'
        >
          {leftItems.map(({ id, icon, title, text }) => (
            <div key={id} className='text-center lg:text-left max-w-[300px]'>
              <img src={icon} alt={title} className='mb-4 mx-auto lg:mx-0 w-14 h-14' />
              <h2 className='text-[#d37643] text-xl font-medium mb-2'>{title}</h2>
              <p className='text-[#907a68] text-base'>{text}</p>
            </div>
          ))}
        </motion.div>

       
        {imageItem && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={imageItem.image}
              alt="Feature Visual"
              className='max-w-[90%] sm:max-w-[400px] lg:max-w-[432px] max-h-[510px]'
            />
          </motion.div>
        )}

    
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='flex flex-col items-center lg:items-start gap-10'
        >
          {rightItems.map(({ id, icon, title, text }) => (
            <div key={id} className='text-center lg:text-left max-w-[300px]'>
              <img src={icon} alt={title} className='mb-4 mx-auto lg:mx-0 w-14 h-14' />
              <h2 className='text-[#d37643] text-xl font-medium mb-2'>{title}</h2>
              <p className='text-[#907a68] text-base'>{text}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}

export default HomeMainAbout
