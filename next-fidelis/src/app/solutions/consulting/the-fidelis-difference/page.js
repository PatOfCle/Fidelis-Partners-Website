import React from 'react'

import './the-fidelis-difference.css'

function TheFidelisDifferencePage() {
  return (
    <div className='TheFidelisDifferencePage-container'>

        <h1 style={{textAlign: "center"}}>
            Consulting: Our Differentiators
        </h1>

        <br></br>

        <h2 style={{textAlign: "center"}}>
            The Team
        </h2>

        <img 
            className='TheFidelisDifferencePage-Firm-img'
            src='/assets/consulting-images/Fidelis-Consulting-Firm.png'
        />

        <br></br>
        <br></br>

        <h2 style={{textAlign: "center"}}>
            The Firm
        </h2>

        <img 
            className='TheFidelisDifferencePage-Team-img'
            src='/assets/consulting-images/Fidelis-Consulting-Team.png'
        />
    </div>
  )
}

export default TheFidelisDifferencePage