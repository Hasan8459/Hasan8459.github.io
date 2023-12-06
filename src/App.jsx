import { useState } from 'react'
import './App.css'
import React from 'react'
import {Navbar} from "./components/Navbar"
import { AllSections } from './components/AllSections'

function App() {
  

  return (
    <>
    <Navbar/>
    <AllSections />
    


    {/* <div className='cont' >
      <div id='something' ></div>
      <div id='home' >Home</div>
      <div id='about' >About</div>
      <div id='skill' >Skill</div>
      <div id='project' >Project</div>
      <div id='contact' >Contact</div>
    </div> */}
      
    </>
  )
}

export default App
