import React from 'react'
import './ProblemSectionHomepage.css'
import dottedWorldMap from '../../assets/dotted-world-map.jpeg'
import {Fade, Reveal} from 'react-awesome-reveal';

function ProblemSectionHomepage() {
  return (
    <div className='ProblemSectionHomepage-container'>

        <div className='map-image-container'>
            <img className='dotted-map-image' src={dottedWorldMap}/>
        </div>


        <div className='static-text-problem'>
            <Fade cascade delay={20} damping={2} triggerOnce>
                <h2 style={{textDecoration: '', fontSize: '4vw', textAlign: 'center'}}>
                    Over 70% of ERP implementations fail. 
                </h2>
                <h3 style={{textDecoration: '', fontSize: '3vw', textAlign: 'right'}}>
                    When implementing a new ERP system, <br></br><span style={{color: 'darkgreen'}}>the potential for growth is tremendous.</span> 
                </h3>
                <h3 style={{textDecoration: '', fontSize: '3vw', textAlign: 'left'}}>
                    <span style={{color: 'darkred'}}>But the risk of failure can be devastating.</span>
                </h3>

                <h3 style={{textDecoration: '', fontSize: '3vw', textAlign: 'center', marginTop: '70px'}}>
                    <span style={{color: ''}}>Pouring more capital into an out-of-the-box, inflexible system is not the solution.</span>
                </h3>
            </Fade>

        </div>
    </div>
  )
}

export default ProblemSectionHomepage