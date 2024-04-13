"use client"

import React, { useState } from 'react'
import './TeamPage.css'
import TeamMemberComponent from './TeamMemberComponentFolder/TeamMemberComponent'
import {Fade} from 'react-awesome-reveal';
import {GrClose} from 'react-icons/gr'


import { teamMembersData } from './TeamMembersData.js';

function TeamPage() {

    const [selectedImage, setSelectedImage] = useState(null);

    const openImageDescription = (image) => {
        setSelectedImage(image);
    };

    const closeImageDescription = () => {
        setSelectedImage(null);
    };

  return (
    <div className='TeamPage-container'>
        
        <Fade delay={500} triggerOnce>
        <div className='team-intro-outer-container'>
            <div className='team-intro-container'>
                <h1>
                    Our Team
                </h1>
                <div>
                    {/* The Fidelis Team's expertise varies widely across Engineering, Product Management, and Consulting. 
                    Read more about the exceptional talent we've brought onto our team.  */}
                    <em className='team-preview-description'>
                        With expertise in Engineering, Product Management, and Consulting, the Fidelis Team is defined by versatility, experience, integrity, capability, and commitment.
                        <br></br>
                        <br></br>
                        Read more about the exceptional talent brought onto the team.
                    </em>

                </div>
            </div>
        </div>
        </Fade>
        
        <Fade delay={1500} triggerOnce>
            <div className='team-members-grid'>
                {teamMembersData.map((teamMember, index) => (

                <div className='team-member-component-holder' onClick={ () => openImageDescription(teamMember) } key={index} >
                    
                    <TeamMemberComponent
                        teamMemberData={teamMember}
                    />

                </div>
                ))}
            </div>
        </Fade>

        {selectedImage && (
            <div className={`team-member-popup-overlay ${selectedImage ? 'show-member' : ''}`} onClick={ closeImageDescription }>
                <div className="team-member-popup" onClick={(event) => {event.stopPropagation()}}>
                    <div className='team-member-popup-column'>

                        <img src={selectedImage.image} alt='team member photo' className='popup-team-member-image'/>
                        <h3 style={{lineHeight: '0', paddingTop: '10px'}}>{selectedImage.firstName} {selectedImage.lastName}</h3>
                        <h4 style={{lineHeight: '0'}}>{selectedImage.title}</h4>

                    </div>

                    <div className='team-member-popup-column'>
                        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', maxWidth: '400px' }}>{selectedImage.bio}</pre>
                    </div>

                    <div className='exit-member-overlay show-pointer' onClick={ closeImageDescription }>
                        <GrClose size="20px"/>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default TeamPage