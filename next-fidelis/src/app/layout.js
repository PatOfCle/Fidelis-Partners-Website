// "use client"

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import HubspotTracker from '@/components/HubspotStuff/HubspotTracker'
import ScrollToTop from '@/components/Misc/ScrollToTop'
import Script from 'next/script'
import Head from 'next/head'
import { Suspense } from 'react'


import { useTrackingCode } from 'react-hubspot-tracking-code-hook'
import { Analytics } from '@vercel/analytics/react';


export const metadata = {
  // title: 'Fidelis Partners ERP',
  title: 'Fidelis Partners',
  description: "Your ERP system should fit your processes. Not vice versa. Take control of your manufacturing today with the premier unified, flexible, comprehensive ERP system.",
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <ScrollToTop />

      

      <body className={inter.className}>
        <Suspense>

          <Header />
          <div className='app-container'>
            {children}
            <Analytics />
          </div>
          <Footer />


          <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/40200420.js"></script>
          
          {/* Script needs to be loaded here, right before the HubspotTracker component */}
          <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/40200420.js" strategy="beforeInteractive" />
          
          {/* <Suspense> */}
          <HubspotTracker />
        </Suspense>
        
      </body>
    </html>
  )
}
