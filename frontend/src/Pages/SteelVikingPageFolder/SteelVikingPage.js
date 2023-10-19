import React from 'react'
import './SteelVikingPage.css'

import { Link } from 'react-router-dom';
import {Fade, Reveal} from 'react-awesome-reveal';


function SteelVikingPage() {
  return (
    <div className='SteelVikingPage-container'>

        <div className='software-fit-processes'>
                <h2>
                <Fade direction='left' triggerOnce duration={1300}><span>Your ERP system should fit your processes. </span></Fade>
                <br></br>
                <Fade direction='right' triggerOnce duration={1300} delay={1900}><span>Not vice versa. </span></Fade>
                    {/* <span>not vice versa. </span> */}
                </h2>
        </div>

        {/* <nav>
            <ul>
                <li>
                <a href="#section1">Section 1</a>
                </li>
                <li>
                <a href="#section2">Section 2</a>
                </li>
            </ul>
        </nav> */}
        <nav>
      <ul>
        <li>
          <Link
            to="#section1"
            smooth={true}
            duration={500}
          >
            Section 1
          </Link>
        </li>
        <li>
          <Link
            to="#section2"
            smooth={true}
            duration={500}
          >
            Section 2
          </Link>
        </li>
      </ul>
    </nav>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div id="section1">
            {/* Content of section 1 */}
        </div>

        <div id="section2">
            {/* Content of section 2 */}
        </div>
    </div>
  )
}

export default SteelVikingPage