"use client"

import React from 'react'

import { Fade } from 'react-awesome-reveal'

import './WhyChooseSvErp.css'
import { whySVData, whyNotSVData } from './WhyChooseSVData'

function WhyChooseSvErpPage() {
  return (
    <div className='WhyChooseSvErpPage-container'>


{/* <Fade delay={400} triggerOnce> */}
      <Fade triggerOnce>
        <div className='WhyChooseSvErpPage-intro-outer-container'>
            <div className='WhyChooseSvErpPage-intro-container'>
                <h1>
                    Why Choose SV ERP
                </h1>
                
                  <div className='WhyChooseSvErpPage-description'>

                    {/* <em>
                      <div>
                        Your ERP system if the foundation of your business, and at the most fundamental level, your business does not exist without it.
                      </div>
                    </em> */}

                    <br></br>

                    ERP systems are complex.

                    <br></br><br></br>
                    
                    The list of reasons for SV being the premier system is long. 

                    <br></br><br></br>
                    
                    In short, simple terms, discover why SV ERP is <em>(or is not)</em> the best fit for your manufacturing organization. 
                  </div>
            </div>
        </div>
      </Fade>




      <div className='sv-fit-container'>
        
        <h1>
          Is SV ERP Right For My Business?
        </h1>
        <em>
          Fidelis only commits to a handful of new clients every year, 
          <br></br>
          and not all businesses should move forward on SV ERP. 
        </em>
        <br></br><br></br><br></br><br></br>
        

        <Fade direction='left' triggerOnce duration={1200} className='whySV-point-section'>

          <div >
            {/* className='whySV-point-section' */}

            <h2>
              Why <em>Not</em> SV ERP
              {/* No If... */}
            </h2>

            {/* <em>
              Fidelis only commits to a handful of new clients every year, 
              <br></br>
              and not all businesses should move forward on SV ERP. 
            </em> */}

            <ul className='whySV-point-list-section'>
                {/* {whySVData.map((point, index) => )} */}
                {whyNotSVData.map((point, index) => (
                  // <TimelineItem data={data} key={idx} />
                  <li key={index}>
                    <img src='/assets/why-choose-sv-images/why-not-sv-red-x.png' className='whySV-point-image'/>
                    
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



        <Fade direction='right' triggerOnce duration={1900} className='whySV-point-section'>

          <div >
            {/* className='whySV-point-section' */}

            <h2>
              Why Choose SV ERP
              {/* Yes If... */}
            </h2>

            

            <ul className='whySV-point-list-section'>
                {whySVData.map((point, index) => (
                  <li key={index}>
                    <img src='/assets/gc.png' className='whySV-point-image'/>
                    
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
      
      <br></br><br></br><br></br>


      There is a handful of reasons why SV ERP is <em>not</em> a good fit for your operation. 


    </div>
  )
}

export default WhyChooseSvErpPage