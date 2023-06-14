import React from 'react'
import Hero from './components/hero'
import Nav from './components/nav'
import SelectedProjects from './components/selectedProjects'
import Services from './components/services'
import Skills from './components/skills'



const bgColor = ['white', 'black', 'orange-600']
const App = () => {
  return (
    <div className={`bg-${bgColor[1]} `}>
      <Nav />
      <Hero />
      <SelectedProjects />
      <Services/>
      <Skills />
    </div>
  )
}

export default App
