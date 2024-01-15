import { svModules } from './ERPModulesData'
import React from 'react'
import Link from 'next/link'

import './ERPModuleDetail.css'
// import { svModules } from '../../ERPModulesData'

function ERPModuleDetail(props) {

  // console.log('sup')
  // console.log(props.moduleIndex)
  // const svModLength= svModules.length
  // console.log(svModLength)


  return (
    <div className='ERPModuleDetail-container'>

      <Link href="/solutions/sv-erp" className='router-link erp-module-sv-logo-container' >
        <img src='/assets/sv-logo.png' className='erp-module-sv-logo'/>
      </Link>

      <h1 className='module-page-header'>{props.moduleData.moduleName}</h1>
      <div className='module-page-preview'>
        <em>
          <div className='module-page-preview-text'>
            {props.moduleData.modulePreview}
          </div>
        </em>
      </div>

      <div className='module-columns'>

        <div className='initiate-col'>
          <h2 className='module-col-header'>
            Initiate
          </h2>
          {props.moduleData.moduleStageDescriptions.initiateDescription ?
            <div className='stage-header-description'><em>{props.moduleData.moduleStageDescriptions.initiateDescription}</em></div> :
            <div></div>
          }
          <ul>
            {props.moduleData.moduleStageDescriptions.initiate.map((bullet, index) => (
              <li key={index}>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div className='progress-col'>
          <h2 className='module-col-header'>
            Progress
          </h2>
          {props.moduleData.moduleStageDescriptions.progressDescription ?
            <div className='stage-header-description'><em>{props.moduleData.moduleStageDescriptions.progressDescription}</em></div> :
            <div></div>
          }
          <ul>
            {props.moduleData.moduleStageDescriptions.progress.map((bullet, index) => (
              // <li>
              //   {bullet}
              // </li>
              <li dangerouslySetInnerHTML={{ __html: bullet }} key={index}>
                {/* {bullet} */}
              </li>
            ))}
          </ul>
        </div>
        <div className='deliver-col'>
          <h2 className='module-col-header'>
            Deliver
          </h2>
          {props.moduleData.moduleStageDescriptions.deliverDescription ?
            <div className='stage-header-description'><em>{props.moduleData.moduleStageDescriptions.deliverDescription}</em></div> :
            <div></div>
          }
          <ul>
            {props.moduleData.moduleStageDescriptions.deliver.map((bullet, index) => (
              <li key={index}>
                {bullet}
              </li>
            ))}
          </ul>
        </div>

      </div>

      <Link href="/solutions/sv-erp" className='router-link erp-module-sv-logo-container hover-color-1' >
        <img src='/assets/sv-logo.png' className='erp-module-sv-logo'/>

        <div style={{marginTop: '20px'}}>
          &larr; Return to SV Home
        </div>
      </Link>

      
      <br></br>
      <br></br>
      <br></br>

        

      <div className='sv-module-prev-next-container'>
        {(svModules[props.moduleIndex-1]) ? 

        <h3>
        <Link href={`/solutions/sv-erp/${svModules[props.moduleIndex-1].moduleSlug}`} className='router-link erp-module-sv-logo-container hover-color-1' >
          &larr; Previous Module: {svModules[props.moduleIndex-1].moduleName}
        </Link>
        </h3>

        : <div></div>
        
        }

        {(svModules[props.moduleIndex+1]) ? 

        <h3>
        <Link href={`/solutions/sv-erp/${svModules[props.moduleIndex+1].moduleSlug}`} className='router-link erp-module-sv-logo-container hover-color-1' >
          Next Module: {svModules[props.moduleIndex+1].moduleName} &rarr;
        </Link>
        </h3>

        : <div></div>

        }
      </div>


    </div>
  )
}

export default ERPModuleDetail