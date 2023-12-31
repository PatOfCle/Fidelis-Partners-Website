"use client"

import React, {useRef, useEffect} from 'react'
// import vid from '/assets/IMG_4964.mov'
// import backdropVideo from '../../../../public/assets/Fidelis Website Backdrop Video.mp4'
import './LandingPageVideo.css'
import logo from '../../../../public/assets/fidelis-logo.png';
import WordGenerator from './WordGenerator/WordGenerator';

function LandingPageVideo() {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Adjust the playback rate as needed (0.5 for half speed)
      // videoRef.current.play(); // Start playing the video
    }
  }, []);

  return (
    <div className="LandingPageVideo-container">

      <div className="video-container">
        <video className='video-content' ref={videoRef} autoPlay playsInline loop muted >
          <source src="/assets/Fidelis Website Backdrop Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="text-container">
        <div className='static-text'>
          The scalable, comprehensive ERP provider for 
        </div>
        <div className='dynamic-text-container'>
          <WordGenerator />
        </div>
      </div>

    </div>

  )
}

export default LandingPageVideo