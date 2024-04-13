
import React from 'react'
import ERPModuleDetail from '../ERPModuleDetail'
import { svModules } from '../ERPModulesData'


export async function generateMetadata({ params }) {
  const { slug } = params;
  const currentModuleIndex = svModules.findIndex(moduleItem => moduleItem["moduleSlug"] === slug);
  
  return {
    // title: product.title,
    title: svModules[currentModuleIndex].moduleName,
    description: svModules[currentModuleIndex].modulePreview,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}



function moduleDetailPage({ params }) {

  const { slug } = params;
  const currentModuleIndex = svModules.findIndex(moduleItem => moduleItem["moduleSlug"] === slug);

  return (
    <div className='moduleDetailPage-container'>
        <ERPModuleDetail moduleData={svModules[currentModuleIndex]} moduleIndex={currentModuleIndex} />
    </div>
  )
}

export default moduleDetailPage