import React from 'react'
import CountUp from 'react-countup';
import { IoLibrarySharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { LiaBookSolid } from "react-icons/lia";

const HomeCoundUp = () => {
  return (
    <div className='bg-[#008186]'>
      <div className='flex-col h-75 gap-2 lg:max-w-[1200px] mx-auto flex lg:gap-0 lg:flex-row items-center text-4xl lg:h-34 justify-between text-[#fcf2dc]'>
        <div>
          <div className='flex items-center gap-2'>
            <HiMiniBuildingLibrary />
            <CountUp end={10000} />+
          </div>
          <p className='text-xl ml-8'>Books in Library
          </p>
        </div>
        <div >
          <div className='flex items-center gap-2 '>
            <FaUser />
            <CountUp end={10000} />+
          </div>
          <p className='text-xl ml-8'>
            Active Users
          </p>
        </div>
        <div >
          <div className='flex items-center gap-2 '>
            < IoLibrarySharp />
            <CountUp end={25} />+
          </div>
          <p className='text-xl ml-8'>
            Genres
          </p>
        </div>
        <div >
          <div className='flex items-center gap-2 '>
            <  LiaBookSolid />
            <CountUp end={500000} />+
          </div>
          <p className='text-xl ml-8'>
            Books Available
          </p>
        </div>
      </div>
    </div >
  )
}

export default HomeCoundUp