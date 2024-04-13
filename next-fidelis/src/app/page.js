
import React from 'react'

import LandingPageVideo from '@/components/LandingPageComponents/LandingPageVideo/LandingPageVideo';
import ProblemSectionHomepage from '@/components/LandingPageComponents/ProblemSection/ProblemSectionHomepage';
import ClientSlider from '@/components/LandingPageComponents/ClientSlider/ClientSlider';
import StatisticsSection from '@/components/LandingPageComponents/StatisticsSection/StatisticsSection';
// import BookDemoBlock from '@/components/LandingPageComponents/BookDemoBlock/BookDemoBlock';
import CompanySnapshotHomepage from '@/components/LandingPageComponents/FidelisOverview/FidelisOverview';
import SVButtonsSection from '@/components/LandingPageComponents/SVButtonsSection/SVButtonsSection';
import PageBlockContainer from '@/components/LandingPageComponents/PageBlockContainer/PageBlockContainer';


export const metadata = {
  title: 'Fidelis Partners - Home',
  description: "The home of flexible, scalable ERP that drives your manufacturing operation at scale. Take control of your manufacturing today with the premier unified, flexible, comprehensive ERP system.",
}


export default function Home() {
  return (
    <div className='Home-container'>
      <LandingPageVideo />

      <PageBlockContainer delay={300}>
        <StatisticsSection />
      </PageBlockContainer>

      <PageBlockContainer delay={500}>
        <SVButtonsSection />
      </PageBlockContainer>

      <PageBlockContainer delay={500}>
        <ClientSlider />
      </PageBlockContainer>

      <PageBlockContainer delay={500}>
        <ProblemSectionHomepage />
      </PageBlockContainer>

      {/* <Fade delay={500} triggerOnce>
          <SVButtonsSection />
      </Fade> */}
      {/* <Fade delay={500} triggerOnce>
          <BookDemoBlock />
      </Fade> */}

      <PageBlockContainer delay={300}>
        <CompanySnapshotHomepage />
      </PageBlockContainer>

    </div>
  )
}
