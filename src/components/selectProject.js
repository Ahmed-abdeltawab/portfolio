import React from 'react'
import { Link } from 'react-router-dom'
import gradientArrow from '../assets/images/gradientArrow.png'
const SelectProject = ({ item, index }) => {
  return (
    <Link
      to={`projectDetails/${index}`}
      key={index}
      className='bg-white block px-6 py-8 lg:p-10 hover:translate-y-[-20px] duration-500'
    >
      <img className='h-[350px] w-full' src={item.img} alt={item.title} />
      <div className='flex items-center gap-2 my-6'>
        {item.tools.map((tool, index) => (
          <div
            key={index}
            className='bg-gray-100 text-black px-3 py-2 text-sm rounded-full'
          >
            {tool}
          </div>
        ))}
      </div>
      <h1 className='text-3xl font-semibold my-5'>{item.title}</h1>
      <div className='cursor-pointer flex items-center gap-3 '>
        <p className='navLink after:bg-black text-md font-[600] uppercase tracking-widest'>
          View Project
        </p>
        <img src={gradientArrow} className='w-8' alt='view project' />
      </div>
    </Link>
  )
}

export default SelectProject
