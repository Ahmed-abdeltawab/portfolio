import React from 'react'
import heroBg from '../assets/images/heroBg.png'
import personalImg from '../assets/images/me-gradient.png'
const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center py-8 lg:px-16 md:px-5'>
      <div>
        <div className='text-gray-400 text-xl flex items-center gap-3'>
          Hi there, I'm Ahmed AbdelTawab
          <img
            src='https://rubenkuipers.design/_nuxt/img/25d2d5f.png'
            className='w-6 h-6'
            alt='hi-emoji'
          />
        </div>
        <h1 className=' my-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 md:text-3xl lg:text-4xl xl:text-6xl font-bold '>
          Front End Developer &<br />
          React Js
        </h1>
        <p className='text-gray-400 text-lg xl:text-xl '>
          I help people and brands reach their goals by designing & building
          <br />
          user-centric digital products and interactive experiences
        </p>
        <div className='flex mt-5 gap-4'>
          <button className='relative before:absolute before:top-0 before:left-0 before:right-full before:content[""]  before:bg-green-400 before:rounded-full before:h-full hover:before:right-0 before:duration-500 bg-gradient-to-r from-pink-500 to-violet-500 text-white  px-10 py-3 rounded-full text-lg'>
            Download Cv
          </button>
          <button className='bg-gradient-to-r from-pink-500 to-violet-500 text-white px-10 py-3 rounded-full text-lg'>
            Hire Me
          </button>
        </div>
      </div>
      <div className='relative text-white lg:block md:flex md:flex-end'>
        <img
          className='lg:w-full md:w-[85%] lg:h-[600px] md:h-[500px] '
          src={heroBg}
          alt='heroBg'
        />
        <img
          className='absolute md:h-[410px] lg:h-[500px]  rounded-2xl md:left-[13%] lg:left-[55px] xl:left-[62px] top-[50px] lg:w-3/4 md:w-3/5 '
          src={personalImg}
          alt='heroBg'
        />
      </div>
    </div>
  )
  // <img className='block  w-full h-[600px] ' src={heroBg} alt='heroBg' />
  // <img className='absolute  h-[500px] rounded-2xl left-[60px] top-[50px] w-3/4 ' src={personalImg} alt='heroBg' />
}

export default Hero
