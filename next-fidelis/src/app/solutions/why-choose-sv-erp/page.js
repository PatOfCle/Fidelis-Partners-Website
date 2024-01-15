"use client"

import React from 'react'
import Link from 'next/link'

import { Fade } from 'react-awesome-reveal'

import './WhyChooseSvErp.css'
import { whySVData, whyNotSVData } from './WhyChooseSVData'

function WhyChooseSvErpPage() {
  return (
    <div className='WhyChooseSvErpPage-container'>


    {/* <Fade delay={300} triggerOnce >
      <div className='software-fit-processes'>
        <div className='WhyChooseSvErpPage-intro-outer-container'>
            <div className='WhyChooseSvErpPage-intro-container'>
                <h1>
                    Why Choose SV ERP
                </h1>
                
                  <div className='WhyChooseSvErpPage-description'>

                    <br></br>

                    ERP systems are complex.

                    <br></br><br></br>
                    
                    Discover in short, simple terms why SV ERP is <em>(or is not)</em> the best fit for your manufacturing organization. 
                  </div>
            </div>
        </div>


        <div className='sv-logo-and-read-more'>
          <img src={'/assets/sv-logo.png'} className='sv-page-logo-instance'/> 
          <div className='consulting-read-more-section'>
            <h2>
              Read More:
            </h2>
            <Link href='/solutions/sv-erp' className='router-link hover-color-1'>
              <div className='consulting-detail-link'>
                SV ERP Capabilities &rarr;
              </div>
            </Link>
            <br></br>
            <Link href="/blog/?category=Customer Wins" className='router-link hover-color-1'>
              <div className='consulting-detail-link'>
                Customer Wins &rarr;
              </div>
            </Link>
            
          </div>
        </div>

        </div>
      </Fade> */}


      <Fade delay={300} triggerOnce >
        <div className='WhyChooseSvErpPage-top-section'>

          <div className='WhyChooseSvErpPage-intro-container'>
            <h1>
                Why Choose SV ERP
            </h1>
            
            <div className='WhyChooseSvErpPage-description'>

              <br></br>

              ERP systems are complex.

              <br></br><br></br>
              
              Discover in short, simple terms why SV ERP is <em>(or is not)</em> the best fit for your manufacturing organization. 
            </div>
          </div>


          <div className='sv-more-options-container'>

            <img src={'/assets/sv-logo.png'} className='WhyChooseSvErpPage-logo'/> 

            <div className='sv-read-more-container'>
              <h2>
                Read More:
              </h2>
              <Link href='/solutions/sv-erp' className='router-link hover-color-1'>
                <div className='consulting-detail-link hover-grow'>
                  SV ERP Capabilities &rarr;
                </div>
              </Link>
              {/* <br></br> */}
              <Link href="/blog/?category=Customer Wins" className='router-link hover-color-1'>
                <div className='consulting-detail-link hover-grow'>
                  Customer Wins &rarr;
                </div>
              </Link>
              
            </div>
          </div>

        </div>

      </Fade>



      <div className='sv-fit-parent-container'>
        
        <div className='sv-fit-title-container'>
          <h1>
            Is SV ERP Right For My Business?
          </h1>
          <em>
            Fidelis only commits to a handful of new clients every year, 
            <br></br>
            and not all businesses should move forward on SV ERP. 
          </em>
        </div>
        <br></br><br></br><br></br><br></br>
        
        <div className='sv-fit-container'>

        <Fade direction='left' triggerOnce delay={1000} className='whySV-point-section'>

          <div >
            {/* className='whySV-point-section' */}

            <h2>
              Why <em>Not</em> SV ERP
              {/* No If... */}
            </h2>

            <ul className='whySV-point-list-section'>
                {/* {whySVData.map((point, index) => )} */}
                {whyNotSVData.map((point, index) => (
                  // <TimelineItem data={data} key={idx} />
                  <li key={index}>
                    <img src='/assets/why-choose-sv-images/why-not-sv-red-x.png' className='whySV-point-image-against'/>
                    
                    <div className='whySV-point-detail-container'>
                      <h3 dangerouslySetInnerHTML={{ __html: point.point }}>
                        {/* {point.point} */}
                      </h3>
                      <div className='whySV-point-description' dangerouslySetInnerHTML={{ __html: point.pointDescription }}>
                        {/* {point.pointDescription} */}
                      </div>
                    </div>

                    <br></br>
                  </li>
                ))}
              </ul>

            <div >
              
            </div>

          </div>

        </Fade>



        <Fade direction='right' triggerOnce delay={2200} className='whySV-point-section'>

          <div >
            {/* className='whySV-point-section' */}

            <h2>
              Why Choose SV ERP
              {/* Yes If... */}
            </h2>

            

            <ul className='whySV-point-list-section'>
                {whySVData.map((point, index) => (
                  <li key={index}>
                    {/* <img src='/assets/gc.png' className='whySV-point-image'/> */}
                    <img src={point.imgLink} className='whySV-point-image'/>

                    
                    <div className='whySV-point-detail-container'>
                      <h3 dangerouslySetInnerHTML={{ __html: point.point }}>
                        {/* {point.point} */}
                      </h3>
                      <div className='whySV-point-description' dangerouslySetInnerHTML={{ __html: point.pointDescription }}>
                        {/* {point.pointDescription} */}
                      </div>
                    </div>

                    <br></br>
                  </li>
                ))}
              </ul>

          </div>

        </Fade>
        </div>

      </div>
      
      <br></br><br></br><br></br>


      {/* There is a handful of reasons why SV ERP is <em>not</em> a good fit for your operation.  */}


    </div>
  )
}

export default WhyChooseSvErpPage