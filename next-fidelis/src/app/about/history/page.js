"use client"

// import React from 'react'
import { useState, useEffect } from 'react';

import './HistoryPage.css'
import Timeline from './Timeline';
import {Fade, Reveal} from 'react-awesome-reveal';

// var topVar = '1234'

function History() {

  return (
    <div className='history-container'>

      <Fade delay={500} triggerOnce>
        <div className='history-intro-outer-container'>
            <div className='history-intro-container'>
                <h2>
                    Our History
                </h2>
                <div>
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

    </div>
  )
}

export default History