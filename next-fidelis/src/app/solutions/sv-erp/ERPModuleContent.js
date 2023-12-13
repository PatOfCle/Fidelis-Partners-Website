import React from 'react'
import Link from 'next/link'

import './ERPModuleContent.css'

function ERPModuleContent(props) {
  return (
    <div className='ERPModuleContent-container'>
      <h1 className='module-page-header'>{props.moduleData.module}</h1>
      <div className='module-page-preview'><em>{props.moduleData.preview}</em></div>
      {/* <div className='module-moduleData'>
        <ul className="checklist">
        {props.moduleData.map((bullet) => (
            <li>
              {bullet}
            </li>
        ))}
        </ul>
      </div> */}

      <div className='module-columns'>

        <div className='initiate-col'>
          <h2 className='module-col-header'>
            Initiate
          </h2>
          <ul>
            {props.moduleData.initiate.map((bullet) => (
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
            {props.moduleData.progress.map((bullet) => (
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
            {props.moduleData.deliver.map((bullet) => (
              <li>
                {bullet}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* <Link href="/solutions/sv-erp" className='router-link'><li>SV ERP</li></Link> */}

      <Link href="/solutions/sv-erp" className='router-link erp-module-sv-logo-container' >
        <img src='/assets/sv-logo.png' className='erp-module-sv-logo'/>

        <div style={{marginTop: '20px'}}>
          &larr; Return to SV Home
        </div>
      </Link>

    </div>
  )
}

export default ERPModuleContent