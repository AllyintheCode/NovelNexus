import React from 'react'
import { Link } from 'react-router-dom'

const BlogHeroLink = () => {
  return (
    <div className='flex justify-center items-center gap-15 mt-10'>
<Link className='bg-[#008186] flex justify-center items-center py-2 px-4 text-white'>All Blog</Link>
<Link className='bg-[#008186] flex justify-center items-center py-2 px-4 text-white'>Trends</Link>
<Link className='bg-[#008186] flex justify-center items-center py-2 px-4 text-white'>Event</Link>
<Link className='bg-[#008186] flex justify-center items-center py-2 px-4 text-white'>Authors</Link>
    </div>
  )
}

export default BlogHeroLink