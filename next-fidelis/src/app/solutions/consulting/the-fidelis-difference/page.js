import React from 'react'

import Link from 'next/link'

import './the-fidelis-difference.css'

function TheFidelisDifferencePage() {
  return (
    <div className='TheFidelisDifferencePage-container'>

        <div className='consulting-read-more-section' style={{width: "100%", display: "flex", justifyContent: "flex-end"}}>
            <div style={{textAlign: "left"}}>
                <h2>
                    Read More:
                </h2>
                <Link href='/about/team' className=' show-pointer'>
                    <div className='consulting-detail-link hover-grow'>
                        Team &rarr;
                    </div>
                </Link>
                <Link href='/solutions/consulting/consulting-offerings-matrix' className=' show-pointer'>
                    <div className='consulting-detail-link hover-grow'>
                        Service Matrix &rarr;
                    </div>
                </Link>
                <Link href='/solutions/consulting' className=' show-pointer'>
                    <div className='consulting-detail-link hover-grow'>
                        Consulting Home &rarr;
                    </div>
                </Link>

            </div>
        
        </div>


        <h1 style={{textAlign: "center", width: "100%"}}>
            {/* Consulting: Our Differentiators */}
            The Fidelis Difference
        </h1>

        <em>
            <div style={{fontFamily: 'Metropolis Regular'}}>
                Fidelis is different.  We bring capable, experienced, yet grounded consultants to organizations to partner on, own, and solve challenges together.
            </div>
        </em>


        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
            <h2 style={{textAlign: "center"}}>
                The Firm
            </h2>

            <img 
                className='TheFidelisDifferencePage-Firm-img'
                src='/assets/consulting-images/Fidelis-Consulting-Firm-Differentiators.png'
            />
        </div>

        <br></br>
        <br></br>

        <div>
            <h2 style={{textAlign: "center"}}>
                The People
            </h2>

            <img 
                className='TheFidelisDifferencePage-Team-img'
                src='/assets/consulting-images/Fidelis-Consulting-People-Differentiators.png'
            />
        </div>
    </div>
  )
}

export default TheFidelisDifferencePage