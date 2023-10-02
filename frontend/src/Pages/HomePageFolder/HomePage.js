import React from 'react'
import {Fade, Reveal} from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

import Header from '../../Components/Header/Header';
import LandingFillinVideo from '../../Components/LandingFillinVideo/LandingFillinVideo';
import ProblemSectionHomepage from '../../Components/ProblemSectionHomepage/ProblemSectionHomepage';
import AboutSectionHomepage from '../../Components/AboutSectionHomepage/AboutSectionHomepage';
import StatisticsSectionHomepage from '../../Components/StatisticsSectionHomepage/StatisticsSectionHomepage';
import CompanySnapshotHomepage from '../../Components/CompanySnapshotHomepage/CompanySnapshotHomepage';
import BookDemoBlock from '../../Components/BookDemoBlock/BookDemoBlock';
import Footer from '../../Components/FooterSection/Footer';


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

        <Fade delay={500} triggerOnce>
            <BookDemoBlock />
        </Fade>

        <Fade delay={300} triggerOnce>
            <CompanySnapshotHomepage />
        </Fade>
    </div>
  )
}

export default Home