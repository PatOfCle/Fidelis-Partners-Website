import React from 'react'
import './Footer.css'
import linkedinLogo from '../../assets/linkedin-logo.png'
import xLogo from '../../assets/x-logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        
        <div className='bottom-navigation'>
            <div className='bottom-navigation-section'>
                <h3>
                    About
                </h3>
                <div>
                    <Link to="/about/values" className='footer-link'><li>Our Values</li></Link>
                    <Link to="/about/history" className='footer-link'><li>History</li></Link>
                    <Link to="/about/team" className='footer-link'><li>The Team</li></Link>
                </div>
            </div>
            <div className='bottom-navigation-section'>
                <h3>
                    Solutions
                </h3>
                <div>
                    <a href="" class="footer-link"><li>Steel Viking ERP</li></a>
                    <a href="" class="footer-link"><li>Additional Services</li></a>
                </div>
            </div>
            <div className='bottom-navigation-section'>
                <h3>
                    Resources
                </h3>
                <div>
                    <a href="" class="footer-link"><li>Sample Client Previews</li></a>
                    <a href="" class="footer-link"><li>Interactive Needs Assessment</li></a>
                    <a href="" class="footer-link"><li>Monthly Report</li></a>
                    <a href="" class="footer-link"><li>Feature Documents</li></a>
                </div>
            </div>
            <div className='bottom-navigation-section'>
                <h3>
                    Careers
                </h3>
                <div>
                    <a href="" class="footer-link"><li>Open Roles</li></a>
                    <a href="" class="footer-link"><li>Life at Fidelis</li></a>
                </div>
            </div>

        </div>

        <hr></hr>

        <div className='footer-bottom-container'>
            <div className='socials'>
                <a href='https://www.linkedin.com/company/fidelis-partners-erp' target="_blank"><img className='social-icon' src={linkedinLogo}/></a>
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