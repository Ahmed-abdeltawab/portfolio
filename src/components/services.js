import React from 'react'
import { AiFillCodeSandboxSquare } from 'react-icons/ai'
import { SiSemanticuireact } from 'react-icons/si'
import { FaLaptopCode } from 'react-icons/fa'

const style = {
  gradient_border: `absolute top-0 left-0 right-0 h-[4px] bg-clip-padding  bg-gradient-to-r from-pink-600 to-violet-300`,
  serviceDiv: `bg-[#1f1f1f] py-7 px-4 w-1/4 relative transition-all duration-700 hover:translate-y-[-20px]`
}
const Services = () => {
  return (
    <div className='px-4 md:px-5 lg:px-16 py-20'>
      <h1 className='mb-3 text-center text-5xl font-bold  text-white'>
        Look At My{' '}
        <spa className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
          Services
        </spa>
      </h1>
      <p className='text-gray-500 text-center mb-10'>
        Here you find all services that i offer with a simple explanation
      </p>
      <div className='flex justify-between '>
        <div className={style.serviceDiv}>
          <AiFillCodeSandboxSquare
            color='violet'
            size={45}
            className='mx-auto mb-3'
          />
          <h2 className='text-white text-2xl text-center'>Clean Code</h2>
          <p className='text-gray-400 text-center my-3'>
            I Write Clean Code That's Good For SEO And For Future Updates
          </p>
          <div className={style.gradient_border}></div>
        </div>
        <div className={style.serviceDiv}>
          <SiSemanticuireact
            color='violet'
            size={45}
            className='mx-auto  mb-3'
          />
          <h2 className='text-white text-2xl text-center'>Single Page App</h2>
          <p className='text-gray-400 text-center my-3'>
            I Write Clean Code That's Good For SEO And For Future Updates
          </p>
          <div className={style.gradient_border}></div>
        </div>
        <div className={style.serviceDiv}>
          <FaLaptopCode color='violet' size={45} className='mx-auto mb-3' />
          <h2 className='text-white text-2xl text-center'>Responsive Design</h2>
          <p className='text-gray-400 text-center my-3'>
            I Write Clean Code That's Good For SEO And For Future Updates
          </p>
          <div className={style.gradient_border}></div>
        </div>
      </div>
    </div>
  )
}

export default Services
