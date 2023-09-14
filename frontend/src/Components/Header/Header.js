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
                {/* ☰ */}
                {/* <AiOutlineMenu style={{borderStyle: 'dashed'}}/> */}
                
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
                            <div className='overlay-menu-option' onClick={() => toggleSubmenu('option1')}>
                                Option 1
                            </div>
                            <div className={`submenu ${activeOption === 'option1' ? 'open' : ''}`}>
                                <ul>
                                    <li className='submenu-option'>Suboption 1.1</li>
                                    <li className='submenu-option'>Suboption 1.2</li>
                                    {/* Add more submenu items */}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='overlay-menu-option' onClick={() => toggleSubmenu('option2')}>
                                Option 2
                            </div>
                            <div className={`submenu ${activeOption === 'option2' ? 'open' : ''}`}>
                                <ul>
                                    <li className='submenu-option'>Suboption 2.1</li>
                                    <li className='submenu-option'>Suboption 2.2</li>
                                    {/* Add more submenu items */}
                                </ul>
                            </div>
                        </li>
                        <li onClick={() => toggleSubmenu('option3')}>
                            <div className='overlay-menu-option' onClick={() => toggleSubmenu('option3')}>
                                Option 3
                            </div>
                        </li>
                        <li onClick={() => toggleSubmenu('option4')}>
                            <div className='overlay-menu-option' onClick={() => toggleSubmenu('option4')}>
                                Option 4
                            </div>
                        </li>
                        {/* Add more menu items */}
                    </ul>

                    
                {/* </div> */}
                
            </div>

            {/* <nav>
                <div className='wide-view-menu-container'>
                    <div className='wide-view-menu-container-option'>
                        <span className='dropdown-button'>
                            About <img src={dropdownArrow} className='dropdown-arrow'/>
                        </span>
                        <div className='dropdown-options'>
                            
                        </div>
                    </div>
                </div>
            </nav> */}
        </div>
  )
}

export default Header