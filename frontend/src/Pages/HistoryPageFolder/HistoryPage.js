import React from 'react'
import './HistoryPage.css'
import Timeline from './Timeline';
import {Fade, Reveal} from 'react-awesome-reveal';

function History() {

  return (
    <div className='history-container'>

      <Fade delay={500} triggerOnce>
        <div className='team-intro-outer-container'>
            <div className='team-intro-container'>
                <h2>
                    Our History
                </h2>
                <div>
                    {/* The Fidelis Team's expertise varies widely across Engineering, Product Management, and Consulting. 
                    Read more about the exceptional talent we've brought onto our team.  */}
                    The Fidelis Team has a record rich with solving challenges for our clients. 
                    <br></br>
                    Take a glimpse at our story.
                </div>
            </div>
        </div>
        </Fade>

      <Fade delay={1500} triggerOnce>
        <Timeline />
      </Fade>

        {/* <div class="history-container-text">
          <h1>History</h1>
          
          Fidelis Partners, Inc. is a Cleveland, OH based provider of enterprise software and systems integration services with clients in the manufacturing, financial services and healthcare areas.
          <br></br>
          <br></br>
          Founded in 2002, Fidelis has a growing list of satisfied clients and serves as a single, dedicated source of IT expertise.
          Fidelis distinguishes itself by designing and implementing efficient software applications that fit a client's processes with an emphasis on business value.
          Our service offerings span all aspects of the systems development process including:
          
          <ul>
            <li>Manufacturing ERP</li>
            <li>IT Consulting</li>
            <li>Business Intelligence and Data Services</li>
            <li>Software Development</li>
          </ul>
          
          
          
          
          Beyond its broad range of IT service offerings, Fidelis' Steel Viking enterprise software product enables numerous small to mid-sized manufacturers to make major operational improvements and utilize information for competitive advantage.
          In 2015, Fidelis moved into its newly renovated office space in Euclid, Ohio, as business growth required a new office space for employee and client collaboration. Fidelis will operate all future software development out of this modern office.
          
        </div> */}
    </div>
  )
}

export default History