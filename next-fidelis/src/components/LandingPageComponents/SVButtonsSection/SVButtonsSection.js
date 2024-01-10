import React from 'react'
import Link from 'next/link'

import './SVButtonsSection.css'

function SVButtonsSection() {
  return (
    <div className='SVButtonsSection-container'>
        

        {/* <div className='SVButtonsSection-inner-container'>

        </div> */}
        {/* <div>

        </div> */}
        {/* capabilities, sv difference, customer wins */}

        <div className="menu-item sv-buttons-section-button">
            <Link href="/solutions/sv-erp" className='router-link'>
              <li>
                SV ERP Capabilities <span className='double-arrow'>&#xbb;</span>
              </li>
            </Link>
        </div>

        <div className="menu-item sv-buttons-section-button">
            <Link href="/solutions/why-choose-sv-erp" className='router-link'>
              <li>
                Why Choose SV ERP <span className='double-arrow'>&#xbb;</span>
              </li>
            </Link>
        </div>

        <div className="menu-item sv-buttons-section-button">
            <Link href="/blog/?category=Customer Wins" className='router-link'>
              <li>
                SV Customer Wins <span className='double-arrow'>&#xbb;</span>
              </li>
            </Link>
        </div>

    </div>
  )
}

export default SVButtonsSection