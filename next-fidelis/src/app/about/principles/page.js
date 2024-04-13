
import React from 'react'
import './PrinciplesPage.css'
import { principles } from './PrinciplesData';

export const metadata = {
  title: 'Principles',
  description: 'When questions arise, we look to our foundational principles to guide us. Businesses are ultimately driven via the principles by which their efforts are directed.',
}

function PrinciplesPage() {
  return (
    <div className='PrinciplesPage-container'>
        <div className='principles-intro-outer-container'>
            <div className='principles-intro-container'>
                <h1>
                    Our Principles
                </h1>
                <em>
                  <div className='principles-description'>
                    Explore our principles, the foundation for the long-term business value Fidelis delivers for our clients. 
                    <br></br><br></br><br></br>
                    Our principles direct how we approach problem solving, serve our clients, hire new talent, and hold the course for our unconditional top priority—to provide the most capable, reliable ERP systems on the planet. 
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </em>
            </div>
        </div>

        <div className='principles-list-div'>
          <ul>
            {
              principles.map( (item, index) => (
                <li key={index}>
                  <h2>
                    {item.principle}
                  </h2>
                  <div className='principleDescription-div'>
                    {item.principleDescription}
                  </div>
                  <br></br>
                  <br></br>
                </li>
              ))
            }
          </ul>
        </div>
    </div>
  )
}

export default PrinciplesPage