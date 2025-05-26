import React from 'react'
import Navbar from '../../Components/Navbar'
import HomeHero from './HomeComponents/HomeHero'

const Home = () => {
  return (
    <div className='bg-[#fcf2dc]'>
      <div className='max-w-[1200px] mx-auto '>
        <Navbar />
        <HomeHero />
      </div>
    </div>
  )
}

export default Home