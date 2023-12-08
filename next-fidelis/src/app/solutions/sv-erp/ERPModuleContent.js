import React from 'react'

import './ERPModuleContent.css'

function ERPModuleContent(props) {
  return (
    <div className='ERPModuleContent-container'>
      <h1 className='module-page-header'>Quoting</h1>
      <div className='module-bullets'>
        <ul className="checklist">
        {props.bullets.map((bullet) => (
            <li>
              {bullet}
            </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default ERPModuleContent