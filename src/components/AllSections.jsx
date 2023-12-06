import React from 'react'
import { Home } from './Home'
import { About } from './About'
import { Skill } from './Skill'
import { Project } from './Project'
import { Contact } from './Contact'
import { Nothing } from './Nothing'


export const AllSections = () => {
  return (
    <div className="cont">
    <Nothing />
    <Home />
    <About />
    <Skill />
    <Project />
    <Contact />
  </div>
  )
}
