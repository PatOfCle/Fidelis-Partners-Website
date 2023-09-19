import React from 'react'
import {Fade, Reveal} from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

import Header from '../Components/Header/Header';
import LandingFillinVideo from '../Components/LandingFillinVideo/LandingFillinVideo';
import ProblemSectionHomepage from '../Components/ProblemSectionHomepage/ProblemSectionHomepage';
import AboutSectionHomepage from '../Components/AboutSectionHomepage/AboutSectionHomepage';


const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }`;
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`;

function Home() {
  return (
    <div className='Home-container'>
        <Header />
      {/* <Fade bottom> */}
      {/* <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce> */}

        <LandingFillinVideo />
      {/* </Reveal> */}

      {/* </Fade> */}

      {/* <Reveal className='onStep' keyframes={fadeInUp} delay={500} duration={600} triggerOnce> */}
        {/* <h1 className="">Find the hottest upcoming artists.</h1> */}
        
      <Fade>
        <ProblemSectionHomepage />
    </Fade>  
      
      {/* </Reveal> */}
      <AboutSectionHomepage />
    </div>
  )
}

export default Home