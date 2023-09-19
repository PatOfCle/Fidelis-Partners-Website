import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FiMenu} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr'
import logo from '../../assets/fidelis-logo.png'
import './Header.css'
import dropdownArrow from '../../assets/dropdown-arrow_thumbnail.png'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeOption, setActiveOption] = useState(null);

    const toggleSubmenu = (option) => {
        setActiveOption(option === activeOption ? null : option);
    };

  return (

    
    <div className='header-container'>
        <div className='image-container'>
            <a href='#'><img className='fidelis-logo' src={logo}/></a>
        </div>

        <nav className="menu">
            <ul>
                <li className="menu-item">
                About 
                <img src={dropdownArrow} className='dropdown-arrow'/>
                <div className="dropdown">
                    <ul>
                        <li>Our Values</li>
                        <li>History</li>
                        <li>The Team</li>
                    </ul>
                </div>
                </li>

                <li className="menu-item">
                Solutions
                <img src={dropdownArrow} className='dropdown-arrow'/>
                <div className="dropdown">
                    <ul>
                        <li>Steel Viking ERP</li>
                        <li>Additional Services</li>
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
                    <li>
                        <div className='overlay-menu-option' onClick={() => toggleSubmenu('about')}>
                            About
                        </div>
                        <div className={`submenu ${activeOption === 'about' ? 'open' : ''}`}>
                            <ul>
                                <li className='submenu-option'>Our Values</li>
                                <li className='submenu-option'>History</li>
                                <li className='submenu-option'>The Team</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className='overlay-menu-option' onClick={() => toggleSubmenu('solutions')}>
                            Solutions
                        </div>
                        <div className={`submenu ${activeOption === 'solutions' ? 'open' : ''}`}>
                            <ul>
                                <li className='submenu-option'>Steel Viking ERP</li>
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
  )
}

export default Header