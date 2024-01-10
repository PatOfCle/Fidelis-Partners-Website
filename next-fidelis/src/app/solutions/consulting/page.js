"use client"

import React from 'react'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'

import './consulting.css'

import { consultingServices } from './ConsultingServicesData'
import BookDemoBlock from '@/components/LandingPageComponents/BookDemoBlock/BookDemoBlock'

function ConsultingPage() {
  return (
    <div className='ConsultingPage-container'>

        <Fade delay={500} triggerOnce>
            <div className='consulting-intro-outer-container'>
                <div className='consulting-intro-container'>
                    <h1>
                        Consulting
                    </h1>
                    <em>
                        <div className='consulting-description'>
                            Fidelis offers the full range of consulting services to inform, plan, and execute strategic software and data initiatives.
                            <br></br>
                            <br></br>
                            Our team is distinguished by versatility, experience, integrity, capability, and commitment.                        <br></br><br></br>
                        </div>
                    </em>
                </div>

                <div className='consulting-read-more-section'>
                  <h2>
                    Read More:
                  </h2>
                  <Link href='/about/team' className=' show-pointer'>
                    <div className='consulting-detail-link'>
                      The Team &rarr;
                    </div>
                  </Link>
                  <br></br>
                  <Link href='/solutions/consulting/consulting-offerings-matrix' className=' show-pointer'>
                    <div className='consulting-detail-link'>
                      Consulting Offerings &rarr;
                    </div>
                  </Link>
                  <br></br>
                  <Link href='/solutions/consulting/the-fidelis-difference' className=' show-pointer'>
                    <div className='consulting-detail-link'>
                      The Fidelis Difference &rarr;
                    </div>
                  </Link>

                </div>
            </div>
      </Fade>

      <br></br>
      <br></br>

        <Fade delay={1000} triggerOnce>
          <h2 style={{textAlign: "center"}}>
              Offerings
          </h2>

          <br></br>

          <div className='service-previews-section'>

              {consultingServices.map((service, index) => (
                  // <Link href={`/solutions/sv-erp/${svModule.moduleSlug}`} className='router-link'  key={index} >
                  // <div className='service-preview-link show-pointer'>
                  <div className='service-preview-link'>
                    <h3 className='service-preview-title'>
                      {service.serviceName}
                    </h3>
                    <div className='service-preview-description'>
                      {service.serviceDescription}
                    </div>
                  </div>
                  //   </Link>
              ))}

          </div>

          
          {/* <div className='consulting-read-more-section'>
            <h2>
              Read More:
            </h2>
            <Link href='/solutions/consulting/consulting-offerings-matrix' className=' show-pointer'>
              <div className='consulting-detail-link'>
                Consulting Services &rarr;
              </div>
            </Link>
            <br></br>
            <Link href='/solutions/consulting/the-fidelis-difference' className=' show-pointer'>
              <div className='consulting-detail-link'>
                The Fidelis Difference &rarr;
              </div>
            </Link>

          </div> */}

          {/* <BookDemoBlock /> */}

        </Fade>
        
    </div>
  )
}

export default ConsultingPage