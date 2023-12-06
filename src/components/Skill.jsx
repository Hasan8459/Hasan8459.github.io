import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJs, faNode, faReact } from "@fortawesome/free-brands-svg-icons"
//import {React} from 'react'
import React from 'react'

export const Skill = () => {
  return (
    <div id="skill" >
      <h1 id='h1' >Skills</h1>
     <div id="contSkill">
      
     <div>
      <FontAwesomeIcon icon={faHtml5} style={{color: "#f2521c",}} className='icon'/>
      </div>
   
      {/* <div>
        <FontAwesomeIcon icon={faCss3} style={{background:"#0075BB",width:"5rem",height:"5.5rem",color:"aliceblue",borderRadius:"1rem"}} className='icon' />
      </div> */}

      <div><img className='icon' src="https://th.bing.com/th/id/OIP.fsUMeu3ObGHhO-KK5AwrCgAAAA?w=151&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" /></div>

      <div>
      <FontAwesomeIcon icon={faJs} style={{color:"#F5DD1B",}} className='icon' />
      </div>

      <div>
      <FontAwesomeIcon icon={faReact} style={{color:"#39C1D7",}} className='icon' />
      </div>

      <div>
      <FontAwesomeIcon icon={faNode} style={{color:"#6CA55B",}} className='icon' />
      </div>

      <div>
      <FontAwesomeIcon icon={faGithub} style={{color:"#241F21",}} className='icon' />
      </div>
        
      
      

     </div>

    </div>
  )
}

