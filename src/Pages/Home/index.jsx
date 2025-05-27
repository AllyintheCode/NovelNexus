import React from 'react'
import Navbar from '../../Components/Navbar'
import HomeHero from './HomeComponents/HomeHero'
import HomeCoundUp from './HomeComponents/HomeCoundUp'

const Home = () => {
  return (
    <div>
      <div className='bg-[#fcf2dc]'>
        <div className='max-w-[1200px] mx-auto '>
          <Navbar />
          <HomeHero />
        </div>
        <HomeCoundUp />
      </div>

    </div>
  )
}

export default Home