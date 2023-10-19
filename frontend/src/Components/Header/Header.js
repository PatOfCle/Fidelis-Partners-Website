import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FiMenu} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'
import logo from '../../assets/fidelis-logo.png'
import './Header.css'
import dropdownArrow from '../../assets/dropdown-arrow_thumbnail.png'
import { Link } from 'react-router-dom'

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
            {/* <a href='#'><img className='fidelis-logo' src={logo}/></a> */}
            <Link to="/"><img className='fidelis-logo' src={logo}/></Link>
        </div>

        <nav className="menu">
            <ul>
                <li className="menu-item">
                    About 
                    <img src={dropdownArrow} className='dropdown-arrow'/>
                    <div className="dropdown">
                        <ul>
                            <Link to="/about/values" className='router-link'><li>Our Values</li></Link>
                            <Link to="/about/history" className='router-link'><li>History</li></Link>
                            <Link to="/about/team" className='router-link'><li>The Team</li></Link>
                        </ul>
                    </div>
                </li>

                <li className="menu-item">
                    Solutions
                    <img src={dropdownArrow} className='dropdown-arrow'/>
                    <div className="dropdown">
                        <ul>
                            <Link to="/solutions/steel-viking-erp" className='router-link'><li>Steel Viking ERP</li></Link>
                            <Link to="/solutions/additional-services" className='router-link'><li>Additional Services</li></Link>
                        </ul>
                    </div>
                </li>

                <li className="menu-item">
                    Resources
                    <img src={dropdownArrow} className='dropdown-arrow'/>
                    <div className="dropdown">
                        <ul>
                            <li>Sample Client Previews</li>
                            <li>Interactive Needs Assessment</li>
                            <li>Monthly Reports</li>
                            <li>Feature Documents</li>
                        </ul>
                    </div>
                </li>

                <li className="menu-item">
                    <a>Careers</a>
                </li>

                <li className="menu-item book-demo-menu-item-button">
                    <Link to="/contact/book-demo" className='router-link'><li>Book Free Demo</li></Link>

                </li>
            </ul>
        </nav>

        
        <div className="menu-icon" onClick={() => {setMenuOpen(!menuOpen)}}> 
            <FiMenu />
        </div>
        
        <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>

            {/* <div className="menu-overlay"> */}
                <div className='exit-overlay show-pointer' onClick={() => {setMenuOpen(!menuOpen)}}>
                    <GrClose size="20px"/>
                </div>
                
                {/* We can refactor the contents of this overlay menu so that 
                both this menu and the top wide screen menu (which have the same options)
                both pull from the same json file
                */}
                <ul className="overlay-menu show-pointer">

                    <li className="menu-item book-demo-menu-item-button" style={{marginBottom: 30}}>
                        <Link to="/contact/book-demo" className='router-link'><li onClick={() => {setMenuOpen(!menuOpen)}}> Book Free Demo <span className='double-arrow'>&#xbb;</span> </li></Link>

                    </li>

                    <li>
                        <div className='overlay-menu-option' onClick={() => toggleSubmenu('about')}>
                            About
                        </div>
                        <div className={`submenu ${activeOption === 'about' ? 'open' : ''}`}>
                            {/* <ul>
                                <li className='submenu-option'>Our Values</li>
                                <li className='submenu-option'>History</li>
                                <li className='submenu-option'>The Team</li>
                            </ul> */}

                            <ul>
                                <Link to="/about/values" className='router-link' onClick={() => {setMenuOpen(!menuOpen); toggleSubmenu('about')}}><li className='submenu-option'>Our Values</li></Link>
                                <Link to="/about/history" className='router-link' onClick={() => {setMenuOpen(!menuOpen); toggleSubmenu('about')}}><li className='submenu-option'>History</li></Link>
                                <Link to="/about/team" className='router-link' onClick={() => {setMenuOpen(!menuOpen); toggleSubmenu('about')}}><li className='submenu-option'>The Team</li></Link>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='overlay-menu-option' onClick={() => toggleSubmenu('solutions')}>
                            Solutions
                        </div>
                        <div className={`submenu ${activeOption === 'solutions' ? 'open' : ''}`}>
                            <ul>
                                <Link to="/solutions/steel-viking-erp" className='router-link' onClick={() => {setMenuOpen(!menuOpen); toggleSubmenu('solutions')}}><li className='submenu-option'>Steel Viking ERP</li></Link>
                                <li className='submenu-option'>Additional Services</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='overlay-menu-option' onClick={() => toggleSubmenu('resources')}>
                            Resources
                        </div>
                        <div className={`submenu ${activeOption === 'resources' ? 'open' : ''}`}>
                            <ul>
                                <li className='submenu-option'>Sample Client Previews</li>
                                <li className='submenu-option'>Interactive Needs Assessment</li>
                                <li className='submenu-option'>Monthly Reports</li>
                                <li className='submenu-option'>Feature Documents</li>
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

                
            {/* </div> */}
            
        </div>
    </div>

    </div>
  )
}

export default Header