import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import logo from '../assets/images/logo-removebg-preview.png'

const Nav = () => {
  return (
    <div className='py-4 flex flex-col md:flex-row   bg-black md:items-center md:justify-between px-4 lg:px-16 md:px-5'>
      <div className='flex items-center justify-between '>
        <img className='w-16 h-16' src={logo} alt='logo' />
        <AiOutlineMenu color='white' size={25} className='md:hidden cursor-pointer' />
      </div>
      <div className='bg-[#101010] md:bg-transparent  flex w-3/5 justify-between items-center'>
        <ul className='flex flex-col md:flex-row md:items-center gap-8 mb-5 pt-3'>
          <li className='text-white'>
            <NavLink className='navLink' to='/'>
              Home
            </NavLink>
          </li>
          <li className='text-white '>
            <NavLink className='navLink' to='/about'>
              About
            </NavLink>
          </li>
          <li className='text-white '>
            <NavLink className='navLink' to='/projects'>
              Projects
            </NavLink>
          </li>
          <li className='text-white '>
            <NavLink className='navLink' to='/services'>
              Services
            </NavLink>
          </li>
        </ul>
        <button className='text-white px-10 py-3 bg-neutral-800 rounded-full'>
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default Nav
