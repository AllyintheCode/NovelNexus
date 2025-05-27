import React from 'react'
import Navbar from '../../Components/Navbar'
import HomeHero from './HomeComponents/HomeHero'
import HomeCoundUp from './HomeComponents/HomeCoundUp'
import HomeMostPopular from './HomeComponents/HomeMostPopular'
import HomeMainAbout from './HomeComponents/HomeMainAbout'
import HomeDiscount from './HomeComponents/HomeDiscount'
import HomeFavoriteBook from './HomeComponents/HomeFavoriteBook'

const Home = () => {
  return (
    <div className='bg-[#fcf2dc]'>
      <Navbar />
      <HomeHero />
      <HomeCoundUp />
      <HomeMostPopular />
      <HomeMainAbout />
      <HomeDiscount />
      <HomeFavoriteBook />
    </div>


  )
}

export default Home