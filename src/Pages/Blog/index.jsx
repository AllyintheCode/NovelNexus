import React from 'react'
import Navbar from '../../Components/Navbar'
import BlogHero from './BlogComponents/BlogHero'
import BlogHeroLink from './BlogComponents/BlogHeroLink'
import Author from '../../Components/Author'
import Footer from '../../Components/Footer'

const Blog = () => {
  return (
    <div className='bg-[#fcf2dc]'>
     
        <Navbar />
        <BlogHero/>
        <BlogHeroLink/>
        <Author/>
        <Footer/>
     
    </div>
  )
}

export default Blog