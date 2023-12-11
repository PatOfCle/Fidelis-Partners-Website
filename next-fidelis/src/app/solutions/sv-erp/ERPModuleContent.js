import React from 'react'

import './ERPModuleContent.css'

function ERPModuleContent(props) {
  return (
    <div className='ERPModuleContent-container'>
      <h1 className='module-page-header'>{props.bullets.module}</h1>
      {/* <div className='module-bullets'>
        <ul className="checklist">
        {props.bullets.map((bullet) => (
            <li>
              {bullet}
            </li>
        ))}
        </ul>
      </div> */}

      <div className='module-bullets'>

        <div className='initiate-col'>
          <h2 className='module-col-header'>
            Initiate
          </h2>
          <ul>
            {props.bullets.initiate.map((bullet) => (
              <li>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div className='progress-col'>
          <h2 className='module-col-header'>
            Progress
          </h2>
          <ul>
            {props.bullets.initiate.map((bullet) => (
              <li>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div className='deliver-col'>
          <h2 className='module-col-header'>
            Deliver
          </h2>
          <ul>
            {props.bullets.initiate.map((bullet) => (
              <li>
                {bullet}
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  )
}

export default ERPModuleContent