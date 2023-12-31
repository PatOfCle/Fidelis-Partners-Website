import React, {useRef, useEffect} from 'react'
import vid from '../../assets/IMG_4964.mov'
import backdropVideo from '../../assets/Fidelis Website Backdrop Video.mp4'
import './LandingFillinVideo.css'
import logo from '../../assets/fidelis-logo.png';
import WordGenerator from './WordGenerator/WordGenerator';

function LandingFillinVideo() {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Adjust the playback rate as needed (0.5 for half speed)
      // videoRef.current.play(); // Start playing the video
    }
  }, []);

  return (
    <div className="LandingFillinVideo-container">

      <div className="video-container">
        <video className='video-content' ref={videoRef} autoPlay playsInline loop muted >
          <source src={backdropVideo} type="video/mp4" />
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

export default LandingFillinVideo