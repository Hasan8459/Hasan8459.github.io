import React from 'react'
import ProjectFirst from "../Media/ProjectFirst.png"

export const Project = () => {

  const OpenWebsite =()=>{
    window.open(`https://wondrous-zuccutto-e1b542.netlify.app/`)
  }

  const OpenGithub = ()=>{
    window.open(`https://github.com/masai-course/hasan_mainodeen_patel_cap05_170/tree/master/Projects/ASOS/ASOS`)
  }
  return (
    <div id="project">
        <h1>Projects</h1>
      <div id='ProjectCont'>

        <div>
        <img src={ProjectFirst} alt="projectFirstImage" id="ProjectFirstImage" />
        </div>

        <div id="ProjectInfo">
          <h2>ASOS</h2>
          <ul>
            <li>E-Commerse Website of Clothes</li>
            <li>Women & Men are two section</li>
            <li>Login and Signup Functionality</li>
            <li>Add Favourite & Cart</li>
          </ul>
          <p>Tech Stack- React | Javascript | Node.js | Chakra Ul | Git</p>
          <button onClick={()=>OpenWebsite()} >Website</button>
          <button onClick={()=>OpenGithub()} >Github</button>
        </div>

      </div>








    </div>
  )
}
