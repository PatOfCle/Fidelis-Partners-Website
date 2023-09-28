import React from 'react'
import './TeamPage.css'
import TeamMemberComponent from './TeamMemberComponentFolder/TeamMemberComponent'
import {Fade, Reveal} from 'react-awesome-reveal';

const pathToHeadshots = '../../assets/team-headshots/'

const defaultProfileIcon = 'https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png'

const teamMembersData = [
    {
        firstName: 'Mike',
        lastName: 'Sweet',
        title: 'Founder',
        image: defaultProfileIcon,
        bio: 'Bio...',
        linkedIn: 'https://www.linkedin.com/in/mike-sweet-071871/',
    },
    {
        firstName: 'Joe',
        lastName: 'Goletz',
        title: 'Director of Delivery',
        image: defaultProfileIcon,
        bio: 'Bio...',
        linkedIn: '',
    },
    {
        firstName: 'Matt',
        lastName: 'Sweet',
        title: 'Director of Consulting',
        image: defaultProfileIcon,
        bio: 'Bio...',
        linkedIn: 'https://www.linkedin.com/in/matt-sweet-6592189/',
    },
    {
        firstName: 'Paul',
        lastName: 'Malhotra',
        title: 'Data Architecture',
        image: defaultProfileIcon,
        bio: 'Bio...',
        linkedIn: 'https://www.linkedin.com/in/pkmalhotra/',
    },
    {
        firstName: 'Adam',
        lastName: 'Giese',
        title: 'ERP Systems Engineering',
        image: defaultProfileIcon,
        bio: 'Bio...',
        linkedIn: '',
    },
    {
        firstName: 'Jamie',
        lastName: 'Knue',
        title: 'Software Engineering, Business Intelligence',
        image: defaultProfileIcon,
        bio: 'Bio...',
        linkedIn: 'https://www.linkedin.com/in/jamie-knue-397b082/',
    },
    {
        firstName: 'Tyler',
        lastName: 'Deming',
        title: 'Business Intelligence',
        image: defaultProfileIcon,
        bio: 'Bio...',
        linkedIn: 'https://www.linkedin.com/in/tylerdeming/',
    },
    {
        firstName: 'Patrick',
        lastName: 'Sweet',
        title: 'ERP Systems Engineering',
        image: defaultProfileIcon,
        bio: 'Bio...',
        linkedIn: 'https://www.linkedin.com/in/patricksweet3/',
    },
    
]

function TeamPage() {
  return (
    <div className='TeamPage-container'>
        
        <Fade delay={500} triggerOnce>
        <div className='team-intro-outer-container'>
            <div className='team-intro-container'>
                <h2>
                    Learn more about the Fidelis Team
                </h2>
                <div>
                    The Fidelis Team's expertise varies widely across Engineering, Product Management, and Consulting. 
                    Read more about the exceptional talent we've brought onto our team. 
                </div>
            </div>
        </div>
        </Fade>
        
        <Fade delay={1500} triggerOnce>
            <div className='team-members-grid'>
                {teamMembersData.map((teamMember, index) => (
                <TeamMemberComponent
                    key={index}
                    teamMemberData={teamMember}
                />
                ))}
            </div>
        </Fade>
    </div>
  )
}

export default TeamPage