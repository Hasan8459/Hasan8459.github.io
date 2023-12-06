import React from 'react'
import Hasan from "../Media/Hasan.pdf"

const Resume = () => {

    const OpenResume = () => {
        window.open(`https://drive.google.com/file/d/10I4JYIBlEEnQJk2GhVSgnTtJdkluXDWb/view?usp=sharing`)
      }

  return (
        <a 
            href={Hasan} download="Hasan-Resume">
            <button
              variant="outlined"
              download={Hasan}
              id="resume"
              sx={{
                border: "1px solid #008F11",
                color: "white",
                fontSize: "0.8rem",
                fontFamily: "Poppins",
              }}
              onClick={()=>OpenResume()}
            >
              Resume
            </button>
          </a>
  )
}

export default Resume


