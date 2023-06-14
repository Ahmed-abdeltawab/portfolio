import React from 'react'
import { skills } from '../data/data'

const Skills = () => {
  console.log(skills)
  return (
    <div className='bg-[#f2f2f2] px-4 md:px-5 lg:px-16 py-12'>
      {/* <img  src={skillsImg} className='rotation' alt='img' /> */}
      <h1 className='text-center text-3xl font-semibold mb-8'>Skills&Tools</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-12 justify-center'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='bg-white p-5 w-[80%] mx-auto rounded-md hover:scale-105 hover:shadow-lg transition-all'
          >
            <img
              className='w-[70px] h-[50px] mx-auto mb-3'
              src={skill.logo}
              alt={skill.title}
            />
            <p className='text-center font-semibold '>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
