"use client"

import React from 'react'
import { Fade } from 'react-awesome-reveal'

function PageBlockContainer({delay, children}) {
  return (
    <Fade delay={delay} triggerOnce>
        {children}
    </Fade>
  )
}

export default PageBlockContainer