import React from 'react'
import {Fade, Reveal} from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

import Header from '../../Components/Header/Header';
import LandingFillinVideo from '../../Components/LandingFillinVideo/LandingFillinVideo';
import ProblemSectionHomepage from '../../Components/ProblemSectionHomepage/ProblemSectionHomepage';
import AboutSectionHomepage from '../../Components/AboutSectionHomepage/AboutSectionHomepage';
import StatisticsSectionHomepage from '../../Components/StatisticsSectionHomepage/StatisticsSectionHomepage';
import CompanySnapshotHomepage from '../../Components/CompanySnapshotHomepage/CompanySnapshotHomepage';
import Footer from '../../Components/FooterSection/Footer';

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
        <LandingFillinVideo />
        <Fade>
            <ProblemSectionHomepage />
        </Fade>
        <AboutSectionHomepage />

        <Fade delay={500} triggerOnce>
            <StatisticsSectionHomepage />
        </Fade>

        <Fade delay={300} triggerOnce>
            <CompanySnapshotHomepage />
        </Fade>
    </div>
  )
}

export default Home