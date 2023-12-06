import { useState } from "react"
import {Link} from "react-scroll"
import { CloseIcon, HamburgerIcon,Icon } from '@chakra-ui/icons'
import Resume from "../components/Resume"
import React from "react"
import Hasan from "../Media/Hasan.pdf"

const Navbar = ()=>{

    const [state,setsState]=useState(false)
  
    const HandleToggle = ()=>{setsState(!state)}

    const CloseMenu = ()=> setsState(false)

    const OpenResume = () => {
        window.open(`https://drive.google.com/file/d/10I4JYIBlEEnQJk2GhVSgnTtJdkluXDWb/view?usp=sharing`)
      }

    return(
    <>
   
   <div className="header">
    <nav className="navbar">
        <h4>Portfolio</h4>
        <div  className="hamber" onClick={HandleToggle} >
       {state ?  
       <Icon as={CloseIcon}  />
       :
       <Icon as={HamburgerIcon} />
        }
        </div>
        <ul className={state ? "nav-menu-active":"nav-menu"}>

            <li className="nav-item">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={CloseMenu} >Home</Link>
            </li>

            <li className="nav-item">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={CloseMenu} >About</Link>
            </li>

            <li className="nav-item">
                <Link to="skill" spy={true} smooth={true} offset={-100} duration={500} onClick={CloseMenu} >Skill</Link>
            </li>

            <li className="nav-item">
                <Link to="project" spy={true} smooth={true} offset={-100} duration={500} onClick={CloseMenu} >Project</Link>
            </li>

            <li className="nav-item" >
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={CloseMenu} >Contact</Link>
            </li>

            <li className="nav-item" >

            <a 
            href={Hasan} download="Hasan-Resume"
           onClick={CloseMenu} >
            <button
              variant="outlined"
              download={Hasan}
               id="resume-in-navbar"
              
              
              onClick={()=>OpenResume()}
            >
              Resume
            </button>
          </a>

            </li>

        </ul>
    </nav>
   </div>
    </>
    )
}
export {Navbar}

/* 
 <Routes>
        <Route path="/home"   />
        <Route path="/about"   />
        <Route path="/skill"   />
        <Route path="/project"   />
        <Route path="contact"   />
       </Routes>


           <nav>
    <div>
       
        <Link smooth to="#home" >Home</Link>
        <Link smooth to="#about" >About</Link>
        <Link smooth to="#skill" >Skill</Link>
        <Link smooth to="#project" >Project</Link>
        <Link smooth to="#contact" >Contact</Link>

       
    </div>
    </nav>
*/



/*
 <nav>
        <div className="navbar" >
            <div className="nav-header" >
                <Link smooth to="#home" >
                Portfolio
                </Link>
                <button
                type="button"
                className="nav-btn"
                onClick={handleToggle}>
                    toggle
                </button>
            </div>
            <ul className={state && "nav-link"} >
                <li>
                    <Link smooth to="#home" >Home</Link>
                </li>
                <li>
                    <Link smooth to="#about" >About</Link>
                </li>
                <li>
                    <Link smooth to="#skill" >Skill</Link>
                </li>
                <li>
                    <Link smooth to="#project">Project</Link>
                </li>
                <li>
                    <Link smooth to="#contact" >Contact</Link>
                </li>
            </ul>
        </div>
    </nav>






      <div className="hamburger" onClick={HandleToggle} >
            changeling
        </div> 
*/


