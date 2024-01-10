import React from 'react'

import './fidelis-consulting-offerings-matrix.css'

import Link from 'next/link'

function ConsultingServicesMatrixPage() {
  return (
    <div className='ConsultingServicesMatrixPage-container'>
        <div className='consulting-intro-container'>
            <h1>
                Consulting
            </h1>
            <em>
                <div className='consulting-description'>
                    Fidelis offers the full range of consulting services to inform, plan, and execute strategic software and data initiatives.
                    <br></br>
                    <br></br>
                    Our team is distinguished by versatility, experience, integrity, capability, and commitment.                        <br></br><br></br>
                </div>
            </em>
        </div>

        <div className='consulting-read-more-section'>
            <h2>
            Read More:
            </h2>
            <Link href='/solutions/consulting' className=' show-pointer'>
                <div className='consulting-detail-link'>
                    Consulting Home &rarr;
                </div>
            </Link>
            <br></br>
            <Link href='/solutions/consulting/the-fidelis-difference' className=' show-pointer'>
                <div className='consulting-detail-link'>
                    The Fidelis Difference &rarr;
                </div>
            </Link>
            
            <br></br>
            <br></br>
        
        </div>

        
        <img 
            className='Fidelis-consulting-offerings-Matrix-img'
            src='/assets/consulting-images/Fidelis-consulting-offerings-Matrix.png'
        />

    </div>
  )
}

export default ConsultingServicesMatrixPage