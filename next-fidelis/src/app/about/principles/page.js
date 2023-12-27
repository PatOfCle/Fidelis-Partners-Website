"use client"

// GET RID OF THE USE CLIENT HERE IF POSSIBLE!!!

import React from 'react'
import './PrinciplesPage.css'
import {Fade, Reveal} from 'react-awesome-reveal';
import { principles } from './PrinciplesData';

function PrinciplesPage() {
  return (
    <div className='PrinciplesPage-container'>
      <Fade delay={500} triggerOnce>
        <div className='principles-intro-outer-container'>
            <div className='principles-intro-container'>
                <h2>
                    Our Principles
                </h2>
                <em>
                  <div className='principles-description'>
                    Explore our principles, the foundation for the long-term business value Fidelis delivers for our clients. 
                    <br></br><br></br>
                    Our principles direct how we approach problem solving, serve our clients, hire new talent, and hold the course for our unconditional top priority—to provide the most capable, reliable ERP systems on the planet. 
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </em>
            </div>
        </div>
      </Fade>

      <Fade delay={1800} triggerOnce>

        <div className='principles-list-div'>

          <ul>
            {
              principles.map( item => (
                <li>
                  <h4>
                    {item.principle}
                  </h4>
                  <div className='principleDescription-div'>
                    {item.principleDescription}
                  </div>
                  <br></br>
                </li>
              ))
            }
          </ul>

        </div>
      </Fade>
    </div>
  )
}

export default PrinciplesPage