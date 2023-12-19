import React from 'react'
import Link from 'next/link'

import './ERPModuleDetail.css'

function ERPModuleDetail(props) {
  return (
    <div className='ERPModuleDetail-container'>
      <h1 className='module-page-header'>{props.moduleData.moduleName}</h1>
      <div className='module-page-preview'><em>{props.moduleData.modulePreview}</em></div>

      <div className='module-columns'>

        <div className='initiate-col'>
          <h2 className='module-col-header'>
            Initiate
          </h2>
          <ul>
            {props.moduleData.moduleStageDescriptions.initiate.map((bullet) => (
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
            {props.moduleData.moduleStageDescriptions.progress.map((bullet) => (
              // <li>
              //   {bullet}
              // </li>
              <li dangerouslySetInnerHTML={{ __html: bullet }}>
                {/* {bullet} */}
              </li>
            ))}
          </ul>
        </div>
        <div className='deliver-col'>
          <h2 className='module-col-header'>
            Deliver
          </h2>
          <ul>
            {props.moduleData.moduleStageDescriptions.deliver.map((bullet) => (
              <li>
                {bullet}
              </li>
            ))}
          </ul>
        </div>

      </div>

      <Link href="/solutions/sv-erp" className='router-link erp-module-sv-logo-container' >
        <img src='/assets/sv-logo.png' className='erp-module-sv-logo'/>

        <div style={{marginTop: '20px'}}>
          &larr; Return to SV Home
        </div>
      </Link>

    </div>
  )
}

export default ERPModuleDetail