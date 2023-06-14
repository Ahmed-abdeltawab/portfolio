import React, { useState } from 'react'

import { selectedProjects } from '../data/data'
import SelectProject from './selectProject'
import { TbArrowBigRightLines } from 'react-icons/tb'
const SelectedProjects = () => {
  const [data, setData] = useState(selectedProjects)

  return (
    <div className='grid md:grid-cols-[48%,48%] lg:grid-cols-[45%,45%] bg-[#f2f2f2] px-4 md:px-5 lg:px-16  py-32 justify-between'>
      <div className='left-side flex flex-col gap-14'>
        {/* start heading div*/}
        <div className='heading'>
          <h1 className='text-3xl  lg:text-4xl xl:text-6xl font-bold mb-5 '>
            Selected
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 '>
              Projects
            </span>
          </h1>
          <p className='text-sm md:text-lg leading-9 text-gray-600'>
            Over the years, I've partnered with startups of all sizes and
            various stages to create some truly unique products. Here are a few
            that I feel were the most challenging yet rewarding.
          </p>
        </div>
        {/* end heading div*/}
        {data.map(
          (item, index) =>
            index < 2 && <SelectProject item={item} index={index} />
        )}
      </div>
      <div className='right-side flex flex-col gap-14 pt-28'>
        {data.map(
          (item, index) =>
            index >= 2 && <SelectProject item={item} index={index} />
        )}
        <div className='flex items-center justify-between cursor-pointer w-3/4 md:w-1/2  mx-auto text-white px-4 py-3 rounded-full text-lg hover:to-pink-500 hover:from-violet-700 transition-all  bg-gradient-to-r from-pink-500 to-violet-500'>
          <p className='text-xl'> View All Projects</p>
          <div className='bg-white rounded-full p-4 '>
            <TbArrowBigRightLines size={25} className=' text-black ' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectedProjects
