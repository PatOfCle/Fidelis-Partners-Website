import React from 'react'

import './fidelis-consulting-offerings-matrix.css'

import Link from 'next/link'


export const metadata = {
    title: 'Consulting Offerings',
    description: 'No control of data = No control of business. We give your organization full visibility and control of your data at every operational stage.',
}


function ConsultingServicesMatrixPage() {
  return (
    <div className='ConsultingServicesMatrixPage-container'>
        <div className='consulting-intro-container'>
            <h1>
                Consulting
            </h1>
            <em>
                <div className='consulting-description'>
                    Look to Fidelis for any or all pieces of the full software implementation life cycle.
                </div>
            </em>
        </div>

        <div className='consulting-read-more-section'>
            <h2>
            Read More:
            </h2>
            <Link href='/about/team' className=' show-pointer'>
                <div className='consulting-detail-link hover-grow'>
                    Team &rarr;
                </div>
            </Link>
            <br></br>
            <Link href='/solutions/consulting' className=' show-pointer'>
                <div className='consulting-detail-link hover-grow'>
                    Consulting Home &rarr;
                </div>
            </Link>
            <br></br>
            <Link href='/solutions/consulting/the-fidelis-difference' className=' show-pointer'>
                <div className='consulting-detail-link hover-grow'>
                    The Fidelis Difference &rarr;
                </div>
            </Link>
            
            <br></br>
            <br></br>
        
        </div>

        
        <img 
            className='Fidelis-consulting-offerings-Matrix-img'
            src='/assets/consulting-images/Consulting-Services-Matrix.png'
        />

    </div>
  )
}

export default ConsultingServicesMatrixPage