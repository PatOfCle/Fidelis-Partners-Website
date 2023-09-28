import React from 'react'
import './AboutSectionHomepage.css'

function AboutSectionHomepage() {
    const images = require.context('../../assets/client-logos-improved', true);
    const imageList = images.keys().map(image => images(image));

    return (
        <div className='AboutSectionHomepage-container'>
            <div className='customer-text'>
                For over two decades, Fidelis Partners has been trusted to solve such problems and accelerate growth for dozens of clients, ranging from $10 Million to $30 Billion in size.
                
            </div>

            <div class="logos">
                <div class="logos-slide">
                    {imageList.map((image, index) => (
                        <img className='client-logo' src={image} alt={`image-${index}`} />
                    ))}
                </div>

                <div class="logos-slide">
                    {imageList.map((image, index) => (
                        <img className='client-logo' src={image} alt={`image-${index}`} />
                    ))}
                </div>
            </div>


            
        </div>
    )
}

export default AboutSectionHomepage