import React, {useState} from 'react'
import './TeamMemberComponent.css'

function TeamMemberComponent(props) {

  return (
    <div className='TeamMemberComponent-container' >
        {/* TeamMemberComponent */}
        {/* <br></br> */}
        {/* {props.firstName} */}
        <img 
            className='teammate-image'
            src={props.teamMemberData.image}
        />
        {/* {props.image}
        {props.bio} */}
        <div className="name-and-title-container">
            <h4>
                {props.teamMemberData.firstName} {props.teamMemberData.lastName}
            </h4>
            <h5>
                {props.teamMemberData.title}
            </h5>
        </div>
    </div>
  )
}

export default TeamMemberComponent