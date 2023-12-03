"use client"

import React from 'react'
import './ClientSlider.css'
// import svLogo from '../../assets/sv-logo.png'
import fs from 'fs';
import path from 'path';

function ClientSlider() {

    const images = require.context('public/assets/client-logos-improved', true);
    const imageList = images.keys().map(image => images(image));
    
    return (
        <div className='ClientSlider-container'>
            <div className='customer-text'>
            <img src="/assets/sv-logo.png" className='company-list-sv-logo-instance'/> 
                <div style={{paddingTop: '10px'}}>Proudly Powering</div>
                
                {/* For over two decades, Fidelis Partners has been trusted to solve such problems and accelerate growth for dozens of clients, 
                <br></br>ranging from $10 Million to $30 Billion in size. */}
                {/* Powering */}
                
            </div>

            <div className="logos">
                <div className="logos-slide">
                    {imageList.map((image, index) => (
                        <img className='client-logo' src={image.default.src} alt={`image-${index}`} key={index} />
                    ))}
                </div>

                <div className="logos-slide">
                    {imageList.map((image, index) => (
                        <img className='client-logo' src={image.default.src} alt={`image-${index}`} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ClientSlider