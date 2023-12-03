import React from 'react'
import './Footer.css'
// import linkedinLogo from '../../../../assets/linkedin-logo.png'
// import xLogo from '/assets/x-logo.png'
// import { Link } from 'react-router-dom'
import Link from 'next/link'

function Footer() {
  return (
    <div className='footer-container'>
        
        <div className='bottom-navigation'>
            <div className='bottom-navigation-section'>
                <h3>
                    About
                </h3>
                <div>
                    <Link href="/about/values" className='footer-link'><li>Values</li></Link>
                    <Link href="/about/history" className='footer-link'><li>History</li></Link>
                    <Link href="/about/team" className='footer-link'><li>Team</li></Link>
                </div>
            </div>
            <div className='bottom-navigation-section'>
                <h3>
                    Solutions
                </h3>
                <div>
                    <Link href="/solutions/sv-erp" className='footer-link'><li>SV ERP</li></Link>
                    <a href="" className="footer-link"><li>Consulting Services</li></a>
                </div>
            </div>
            <div className='bottom-navigation-section'>
                <h3>
                    Resources
                </h3>
                <div>
                <Link href="/blog" className='footer-link'><li>Knowledge Base</li></Link>
                {/* <Link href="/blog" className='footer-link'><li>Client Wins</li></Link> */}
                    {/* <a href="" class="footer-link"><li>Sample Client Previews</li></a> */}
                    {/* <a href="" class="footer-link"><li>Interactive Needs Assessment</li></a> */}
                    {/* <a href="" class="footer-link"><li>Monthly Report</li></a> */}
                    {/* <a href="" class="footer-link"><li>Feature Documents</li></a> */}
                </div>
            </div>
            <div className='bottom-navigation-section'>
                <h3>
                    Careers
                </h3>
                <div>
                    <a href="" className="footer-link"><li>Open Roles</li></a>
                    <a href="" className="footer-link"><li>Life at Fidelis</li></a>
                </div>
            </div>

        </div>

        <hr></hr>

        <div className='footer-bottom-container'>
            <div className='socials'>
                <a href='https://www.linkedin.com/company/fidelis-partners-erp' target="_blank"><img className='social-icon' src='/assets/linkedin-logo.png' /></a>
                {/* <a><img className='social-icon' src={xLogo}/></a> */}
            </div>
            
            <div className='copyright-section'>
                &#169; {new Date().getFullYear()} Fidelis Partners, Inc.
            </div>
        </div>
    </div>
  )
}

export default Footer