import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsBasket2Fill } from "react-icons/bs";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex justify-between items-center pt-5 relative px-4 md:px-8 ">
      <NavLink to={"/"}>
        <img src="/logo.svg" alt="logo" />
      </NavLink>
      {showMenu && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/20 md:hidden"
          onClick={() => setShowMenu(false)}
        />
      )}

      <div className={`fixed md:relative top-0 right-0 h-screen md:h-auto w-2/3 sm:w-1/2 
        bg-[#fcf2dc] flex flex-col md:flex-row justify-center md:justify-start 
        items-center md:items-center gap-6 pt-20 md:pt-0 px-6 md:p-0 
        transition-transform duration-400 z-50
        ${showMenu ? 'translate-x-0' : 'translate-x-full'} 
        md:translate-x-0 md:flex`}>

        <button
          className="block md:hidden text-3xl absolute top-6 right-6"
          onClick={() => setShowMenu(false)}
        >
          <IoClose />
        </button>

        <NavLink to={"/"} className={({ isActive }) =>
          isActive ? "text-[#008186]" : "text-[#826a59]"}
          onClick={() => setShowMenu(false)}>
          Home
        </NavLink>
        <NavLink to={"/shop"} className={({ isActive }) =>
          isActive ? "text-[#008186]" : "text-[#826a59]"}
          onClick={() => setShowMenu(false)}>
          Shop
        </NavLink>
        <NavLink to={"/about"} className={({ isActive }) =>
          isActive ? "text-[#008186]" : "text-[#826a59]"}
          onClick={() => setShowMenu(false)}>
          About
        </NavLink>
        <NavLink to={"/blog"} className={({ isActive }) =>
          isActive ? "text-[#008186]" : "text-[#826a59]"}
          onClick={() => setShowMenu(false)}>
          Blog
        </NavLink>
      </div>

      <div className={`flex items-center gap-4 md:gap-6 ${showMenu ? 'hidden' : 'flex'}`}>
        <NavLink className="flex items-center gap-1.5">
          <BsBasket2Fill className='text-2xl text-[#d37643]' />
          <p className='rounded-full bg-[#008186] text-white w-5 h-5 text-xs flex items-center justify-center'>0</p>
        </NavLink>
        <NavLink
          className="flex border-[#d37643] bg-[#d37643] w-[100px] h-[36px] justify-center items-center text-white hover:border hover:border-[#d37643] hover:bg-[#fcf2dc] hover:text-[#d37643] duration-300 text-sm"
          to={"/shop"}
        >
          Buy Now
        </NavLink>

        <button
          className='block md:hidden text-3xl text-[#826a59]'
          onClick={() => setShowMenu(true)}
        >
          <IoMenu />
        </button>
      </div>
    </div>
  )
}

export default Navbar;
