import React from 'react'
import Navebar from './components/Navebar'
import Home from './components/Home'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
const App = () => {
  return (
    <>
    <Navebar/>
    <div className="contaner">
      <Home/>
      {/* <Experience/> */}
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
    </>
  )
}

export default App