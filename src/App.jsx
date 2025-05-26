import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import "./index.css"
import Shop from './Pages/Shop'
import About from './Pages/About'
import Blog from './Pages/Blog'
import NotFound from './Pages/NotFound'
const App = () => {
  return (
    <div className='font-[Jakarta]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App