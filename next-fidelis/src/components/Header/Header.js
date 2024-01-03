'use client'

import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FiMenu} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'
import './Header.css'
import dropdownArrow from '../../../public/assets/dropdown-arrow_thumbnail.png'
// import { Link } from 'react-router-dom'
import Link from 'next/link'

// import Image from 'next/image'


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeOption, setActiveOption] = useState(null);

    const toggleSubmenu = (option) => {
        setActiveOption(option === activeOption ? null : option);
    };

  return (

    
    <div className='header-outer-container'>

    <div className='header-container'>
        <div className='image-container'>
            {/* <Link href="/"><img className='fidelis-logo' src="../../../public/assets/fidelis-logo.png"/></Link> */}
            <Link href="/">
                <img className='fidelis-logo' src="/assets/fidelis-logo.png" />
            </Link>
        </div>

        <nav className="menu">
            <ul>
                <li className="menu-item">
                    About 
                    <img src={"/assets/dropdown-arrow_thumbnail.png"} className='dropdown-arrow'/>
                    <div className="dropdown">
                        <ul>
                            {/* <Link href="/about/values" className='router-link'><li>Values</li></Link> */}
                            <Link href="/about/principles" className='router-link'><li>Principles</li></Link>
                            <Link href="/about/history" className='router-link'><li>History</li></Link>
                            <Link href="/about/team" className='router-link'><li>Team</li></Link>
                        </ul>
                    </div>
                </li>

                <li className="menu-item">
                    Solutions
                    <img src={"/assets/dropdown-arrow_thumbnail.png"} className='dropdown-arrow'/>
                    <div className="dropdown">
                        <ul>
                            <Link href="/solutions/sv-erp" className='router-link'><li>SV ERP</li></Link>
                            <Link href="/solutions/consulting" className='router-link'><li>Consulting</li></Link>
                        </ul>
                    </div>
                </li>

                <li className="menu-item">
                    Resources
                    <img src={"/assets/dropdown-arrow_thumbnail.png"} className='dropdown-arrow'/>
                    <div className="dropdown">
                        <ul>
                        <Link href="/blog" className='router-link'><li>Knowledge Base</li></Link>
                        </ul>
                    </div>
                </li>

                <li className="menu-item">
                    <a>Careers</a>
                </li>

                <li className="menu-item book-demo-menu-item-button">
                    <Link href="/contact/book-introduction" className='router-link'>Book Introduction</Link>
                </li>
            </ul>
        </nav>

        
        <div className="menu-icon" onClick={() => {setMenuOpen(!menuOpen)}}> 
            <FiMenu />
        </div>
        
        <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>

                <div className='exit-overlay show-pointer' onClick={() => {setMenuOpen(!menuOpen)}}>
                    <GrClose size="20px"/>
                </div>

                <ul className="overlay-menu show-pointer">

                    {/* problem here */}
                    <li className="menu-item book-demo-menu-item-button" style={{marginBottom: 30}}>
                        <Link href="/contact/book-introduction" className='router-link' onClick={() => {setMenuOpen(!menuOpen)}}>Book Introduction <span className='double-arrow'>&#xbb;</span></Link>

                    </li>

                    <li>
                        <div className='overlay-menu-option' onClick={() => toggleSubmenu('about')}>
                            About
                        </div>
                        <div className={`submenu ${activeOption === 'about' ? 'open' : ''}`}>
                            
                            <ul>
                                {/* <Link href="/about/values" className='router-link' onClick={() => {setMenuOpen(!menuOpen); toggleSubmenu('about')}}><li className='submenu-option'>Values</li></Link> */}
                                <Link href="/about/principles" className='router-link' onClick={() => {setMenuOpen(!menuOpen); toggleSubmenu('about')}}><li className='submenu-option'>Principles</li></Link>
                                <Link href="/about/history" className='router-link' onClick={() => {setMenuOpen(!menuOpen); toggleSubmenu('about')}}><li className='submenu-option'>History</li></Link>
                                <Link href="/about/team" className='router-link' onClick={() => {setMenuOpen(!menuOpen); toggleSubmenu('about')}}><li className='submenu-option'>Team</li></Link>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='overlay-menu-option' onClick={() => toggleSubmenu('solutions')}>
                            Solutions
                        </div>
                        <div className={`submenu ${activeOption === 'solutions' ? 'open' : ''}`}>
                            <ul>
                                <Link href="/solutions/sv-erp" className='router-link' onClick={() => {setMenuOpen(!menuOpen); toggleSubmenu('solutions')}}><li className='submenu-option'>SV ERP</li></Link>
                                <Link href="/solutions/consulting" className='router-link' onClick={() => {setMenuOpen(!menuOpen); toggleSubmenu('solutions')}}><li className='submenu-option'>Consulting</li></Link>
                                {/* <li className='submenu-option'>Consulting Services</li> */}
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='overlay-menu-option' onClick={() => toggleSubmenu('resources')}>
                            Resources
                        </div>
                        <div className={`submenu ${activeOption === 'resources' ? 'open' : ''}`}>
                            <ul>
                                <Link href="/blog" className='router-link' onClick={() => {setMenuOpen(!menuOpen); toggleSubmenu('resources')}}><li className='submenu-option'>Knowledge Base</li></Link>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='overlay-menu-option' onClick={() => toggleSubmenu('careers')}>
                            Careers
                        </div>
                        <div className={`submenu ${activeOption === 'careers' ? 'open' : ''}`}>
                            <ul>
                                <li className='submenu-option'>Open Roles</li>
                                <li className='submenu-option'>Life at Fidelis</li>
                            </ul>
                        </div>
                    </li>
                </ul>

                
            
        </div>
    </div>

    </div>
  )
}

export default Header