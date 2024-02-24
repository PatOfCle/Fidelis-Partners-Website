"use client"

import React from 'react'
import {Fade, Reveal} from 'react-awesome-reveal';

import LandingPageVideo from '@/components/LandingPageComponents/LandingPageVideo/LandingPageVideo';
// import ProblemSectionHomepage from '../../Components/ProblemSectionHomepage/ProblemSectionHomepage';
import ProblemSectionHomepage from '@/components/LandingPageComponents/ProblemSection/ProblemSectionHomepage';
// import ClientSlider from '@/components/LandingPageComponents/ClientSlider/ClientSlider';
import StatisticsSection from '@/components/LandingPageComponents/StatisticsSection/StatisticsSection';
import BookDemoBlock from '@/components/LandingPageComponents/BookDemoBlock/BookDemoBlock';
import CompanySnapshotHomepage from '@/components/LandingPageComponents/FidelisOverview/FidelisOverview';
import SVButtonsSection from '@/components/LandingPageComponents/SVButtonsSection/SVButtonsSection';

export default function Home() {
  return (      
    <div className='Home-container'>
      <LandingPageVideo />

      {/* <Fade delay={500} triggerOnce>
        <ProblemSectionHomepage />
      </Fade> */}
      <Fade delay={300} triggerOnce>
          <StatisticsSection />
      </Fade>
      <Fade delay={500} triggerOnce>
          <SVButtonsSection />
      </Fade>

      {/* <Fade delay={500} triggerOnce>
        <ClientSlider />
      </Fade> */}

      {/* <Fade delay={500} triggerOnce>
          <StatisticsSection />
      </Fade> */}

      <Fade delay={500} triggerOnce>
        <ProblemSectionHomepage />
      </Fade>

      {/* <Fade delay={500} triggerOnce>
          <SVButtonsSection />
      </Fade> */}
      {/* <Fade delay={500} triggerOnce>
          <BookDemoBlock />
      </Fade> */}

      <Fade delay={300} triggerOnce>
          <CompanySnapshotHomepage />
      </Fade>
    </div>
  )
}
