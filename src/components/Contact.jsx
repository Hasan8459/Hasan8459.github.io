
import React from 'react'

export const Contact = () => {

  const OpenGithub =()=>{    
    window.open(`https://github.com/Hasan8459/`)
  }

  const OpenLinkedin =()=>{
    window.open(`https://www.linkedin.com/in/hasan-patel-117472297/`)
  }
  const OpenEmail =()=>{    
    window.open(`mailto:hasanpatel865@gmail.com` )
  }

  const OpenPhone =()=>{
    window.open(`tel:8459323514`)
  }


  return (
    <div id="contact" >
      <div className="contact">
        <h1 id='get' >Get in touch</h1>
        <h1 id='name' >Hasan Patel</h1>
        
        <div className="btnCont">
        <button className="btn" id='btnFir' onClick={()=>OpenLinkedin()} >Linkedin</button>
        <button className="btn" onClick={()=>OpenGithub()} >GitHub</button>
        <button className="btn" onClick={()=>OpenEmail()} >E-mail</button>
        <button className="btn" onClick={()=>OpenPhone()} >Phone</button>
        </div>

      </div>
    </div>
  )
}
