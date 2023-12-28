"use client"

import React, { useState } from 'react'
import './TeamPage.css'
import TeamMemberComponent from './TeamMemberComponentFolder/TeamMemberComponent'
import {Fade, Reveal} from 'react-awesome-reveal';
import {GrClose} from 'react-icons/gr'

const pathToHeadshots = '../../assets/team-headshots/'

const defaultProfileIcon = 'https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png'

const teamMembersData = [
    {
        firstName: 'Mike',
        lastName: 'Sweet',
        title: 'Founder',
        image: 'https://fidelis-website-storage.s3.us-east-2.amazonaws.com/team-content/headshots/Mike_Sweet_Headshot.png',
        bio: "Mike founded Fidelis in 2002 and has devoted the last 20 years to building and delivering solutions to clients in ERP, plant floor automation, and business intelligence. \n\nBefore starting Fidelis, Mike worked as a Data Architect and Software Consultant for Accenture and other boutique firms.  He wishes he had started Fidelis earlier than he did. \n\nMike graduated from Case Western Reserve University with BS in Industrial Engineering, Magna Cum Laude, with special awards for the top graduate in Industrial Engineering and French.  Mike also earned a Master's of Business Administration from Case. \n\nOutside of work, Mike spends time with his family, plays piano, and is involved with charitable organizations within the Catholic Church.  His most recent involvements are related to homelessness and the Pro Life cause.",
        linkedIn: 'https://www.linkedin.com/in/mike-sweet-071871/',
    },
    {
        firstName: 'Joe',
        lastName: 'Goletz',
        title: 'Director of Delivery',
        image: 'https://fidelis-website-storage.s3.us-east-2.amazonaws.com/team-content/headshots/Joe_Goletz_Headshot.png',
        bio: 'Joe is a results-oriented professional with an established record in project management, data analysis, software implementation, data quality/data governance as well as operational and financial management. \n\nIn his free time, Joe enjoys vegetable gardening, hiking, kayaking, baseball, basketball, football, and golf.',
        linkedIn: '',
    },
    {
        firstName: 'Matt',
        lastName: 'Sweet',
        title: 'Director of Consulting',
        image: 'https://fidelis-website-storage.s3.us-east-2.amazonaws.com/team-content/headshots/Matt_Sweet_Headshot.png',
        bio: 'Matt joined Fidelis Partners in 2013.\n\nHe is a graduate of the Ohio State University with undergraduate work completed in accounting and masters work in public policy and natural resources.  Matt brings 25+ years of financial services, data architecture, business analysis and risk experience to the team and our clients.   He has supported a breadth of our clients within industries ranging from manufacturing to parts and services distribution to financial services.\n\nOutside of the office, Matt enjoys hiking, backpacking, fishing and kayaking as well as woodworking, cooking and spending time with his family.',
        linkedIn: 'https://www.linkedin.com/in/matt-sweet-6592189/',
    },
    {
        firstName: 'Paul',
        lastName: 'Malhotra',
        title: 'Data Architecture',
        image: 'https://fidelis-website-storage.s3.us-east-2.amazonaws.com/team-content/headshots/Paul_Malhotra_Headshot.png',
        bio: "Paul is an engineering graduate from Case Western Reserve University with 30+ years of industry experience. He has provided data driven solutions for BP Oil, Lubrizol, State Industrial Products, Hodell-Natco Industries, and Garland Industries. Paul is currently engaged in the design and development of a Data Warehouse that provides Business Intelligence solutions for the enterprise encompassing several divisions with varying business models and ERP's. In addition, he continues to remain engaged in providing data analysis and system integration solutions. \n\nIn his free time, Paul enjoys gardening, playing the piano, woodworking, and enjoying our local sites.",
        linkedIn: 'https://www.linkedin.com/in/pkmalhotra/',
    },
    {
        firstName: 'Adam',
        lastName: 'Giese',
        title: 'ERP Systems Engineering',
        image: 'https://fidelis-website-storage.s3.us-east-2.amazonaws.com/team-content/headshots/Adam_Giese_Headshot.png',
        bio: "Adam has been a versatile resource handling roles of project management, data warehousing, data analysis, web and api development, and custom software solutions for small businesses. Adam spends his free time hiking, biking, and catching the occasional baseball game.",
        linkedIn: '',
    },
    {
        firstName: 'Jamie',
        lastName: 'Knue',
        title: 'Software Engineering, Business Intelligence',
        image: 'https://fidelis-website-storage.s3.us-east-2.amazonaws.com/team-content/headshots/Jamie_Knue_Headshot.png',
        bio: "Jamie is an MBA graduate of Case Western Reserve University's Weatherhead School of Management. He has over 25 years of experience as an ETL architect, data architect, software architect, and project lead, and has led projects in the Financial, Manufacturing, and Higher Education sectors. \n\nJamie has been with Fidelis for over 10 years. In his leisure time Jamie enjoys film, tabletop gaming with his children, and writing compilers for obscure programming languages.",
        linkedIn: 'https://www.linkedin.com/in/jamie-knue-397b082/',
    },
    {
        firstName: 'Tyler',
        lastName: 'Deming',
        title: 'Business Intelligence',
        image: 'https://fidelis-website-storage.s3.us-east-2.amazonaws.com/team-content/headshots/Tyler_Deming_Headshot.png',
        bio: "Since joining the team in early 2021, Tyler has supported the expansion of Fidelis' client reporting systems and the improvement of delivered BI. This includes working across multiple client platforms and performing thorough consultation and database maintenance. \n\nLocated in Lakewood, Ohio, Tyler enjoys time with his family, catching up with friends and chasing the perfect golf swing.",
        linkedIn: 'https://www.linkedin.com/in/tylerdeming/',
    },
    {
        firstName: 'Patrick',
        lastName: 'Sweet',
        title: 'ERP Systems Engineering',
        // image: defaultProfileIcon,
        image: 'https://fidelis-website-storage.s3.us-east-2.amazonaws.com/team-content/headshots/Patrick_Sweet_Headshot.png',
        bio: "Patrick serves as an ERP System Engineer, committed to enabling new and existing manufacturing clients to integrate and operate on Steel Viking ERP. \n\nPrior to joining Fidelis, Patrick graduated with a B.E. in Computer Science from the University of Notre Dame, with Business and RE minors. Patrick experience in software solutions includes a full stack application used in a dozen locales at Amazon, among others. In college, Patrick started, managed, and scaled a service business, followed by a successful exit.\n\nIn his free time, Patrick enjoys reading, coaching basketball at his local grade school, and building solutions for his most recent enterprising endeavor. ",
        linkedIn: 'https://www.linkedin.com/in/patricksweet3/',
    },
    
]

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
                <h2>
                    Learn more about the Fidelis Team
                </h2>
                <div>
                    {/* The Fidelis Team's expertise varies widely across Engineering, Product Management, and Consulting. 
                    Read more about the exceptional talent we've brought onto our team.  */}
                    The Fidelis Team is defined by versatility, experience, integrity, capability, and commitment.
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
            // <div className="team-member-popup-overlay">
            <div className={`team-member-popup-overlay ${selectedImage ? 'show-member' : ''}`} onClick={ closeImageDescription }>
                <div className="team-member-popup" onClick={(event) => {event.stopPropagation()}}>
                    <div className='team-member-popup-column'>
                    {/* <div style={{border: 'solid', display: 'flex', alignItems: 'center'}}> */}

                        <img src={selectedImage.image} alt='team member photo' className='popup-team-member-image'/>
                        <h3 style={{lineHeight: '0', paddingTop: '10px'}}>{selectedImage.firstName} {selectedImage.lastName}</h3>
                        <h4 style={{lineHeight: '0'}}>{selectedImage.title}</h4>

                    </div>
                    {/* <hr style={{color: 'lightgray'}}></hr> */}

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