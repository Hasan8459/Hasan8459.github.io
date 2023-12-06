import React from 'react'
import Hasan from "../Media/Hasan.pdf"
import Resume from './Resume'

export const Home = () => {

    const OpenGithub =()=>{    
        window.open(`https://github.com/Hasan8459/`)
    }
    const OpenLinkedin =()=>{
      window.open(`https://www.linkedin.com/in/hasan-patel-117472297/`)
    }
    
  return (
    <div id="home" >
        <div id="homeFirst" >

        <div id="Intro" >

            <h1>Hi <img id='shakehand' src="https://raw.githubusercontent.com/ParliamoDiPC/wave-bot/main/assets/logo.png" alt="shakehand" />,
            <br /><br />
            I'am Hasan <br /><br />
            MERN Developer
            </h1>
            
           
            <Resume />
           
            <img className="LogoFir" src="https://th.bing.com/th/id/OIP.zPgWFtl6WplZDkiEGBigXAHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Linkedin"
            onClick={()=>OpenLinkedin()} />
            
            <img className="LogoSec" src="https://th.bing.com/th/id/OIP.5F69UljXc5LLeM63sxM-6wHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Github" 
            onClick={()=>OpenGithub()}/>
        </div>

        <div className='hasnaDiv' >
        <img id='Hasan' src="https://ca.slack-edge.com/T056QHT26Q0-U05CNKVGVC0-5f0a558a08cf-512" alt="Hasan" />
        </div >
           
        </div>
    </div>
  )
}
