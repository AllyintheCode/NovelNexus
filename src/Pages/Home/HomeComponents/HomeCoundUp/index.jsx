import React from 'react'
import CountUp from 'react-countup';
import { IoLibrarySharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { LiaBookSolid } from "react-icons/lia";
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion';
const HomeCoundUp = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })
  return (
    <div className='bg-[#008186] '>
      <div className='flex-col h-75 gap-2 lg:max-w-[1200px] mx-auto flex md:gap-3 md:flex-row items-center md:justify-center text-4xl md:h-34 lg:justify-between text-[#fcf2dc]'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 * 0.2 }}
          viewport={{ once: true }}>
          <div ref={ref} className='flex items-center gap-2'>
            <HiMiniBuildingLibrary />
            {inView && < CountUp end={10000} suffix='+' />}
            {!inView && 0}
          </div>
          <p className='text-xl ml-8'>Books in Library
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 * 0.2 }}
          viewport={{ once: true }}
        >
          <div className='flex items-center gap-2 '>
            <FaUser />
            {inView && < CountUp end={10000} suffix='+' />}
            {!inView && 0}
          </div>
          <p className='text-xl ml-8'>
            Active Users
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3 * 0.2 }}
          viewport={{ once: true }}
        >
          <div className='flex items-center gap-2 '>
            < IoLibrarySharp />
            {inView && < CountUp end={25} suffix='+' delay={0.7} />}
            {!inView && 0}

          </div>
          <p className='text-xl ml-8'>
            Genres
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6, delay: 4 * 0.2
          }}
          viewport={{ once: true }}
        >
          <div className='flex items-center gap-2 '>
            <  LiaBookSolid />
            {inView && < CountUp end={500000} suffix='+' />}
            {!inView && 0}
          </div>
          <p className='text-xl ml-8'>
            Books Available
          </p>
        </motion.div>
      </div>
    </div >
  )
}

export default HomeCoundUp