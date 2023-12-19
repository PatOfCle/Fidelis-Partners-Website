"use client"

import React, {useState, useEffect} from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import ERPModuleDetail from '../ERPModuleDetail'
import { svModules } from '../ERPModulesData'


function moduleDetailPage() {

    const { slug } = useParams()

    const currentModuleIndex = svModules.findIndex(moduleItem => moduleItem["moduleSlug"] === slug);


  return (
    <div className='moduleDetailPage-container'>
        <ERPModuleDetail moduleData={svModules[currentModuleIndex]} />
    </div>
  )
}

export default moduleDetailPage