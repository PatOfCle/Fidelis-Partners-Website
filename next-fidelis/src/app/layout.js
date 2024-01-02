// "use client"

import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import HubspotTracker from '@/components/HubspotStuff/HubspotTracker'

import { useTrackingCode } from 'react-hubspot-tracking-code-hook'

// import Hubspot from './Hubspot'

const inter = Inter({ subsets: ['latin'] })

import Script from 'next/script'
import Head from 'next/head'


export const metadata = {
  // title: 'Fidelis Partners ERP',
  title: 'Fidelis Partners',
  description: "Your ERP system should fit your processes. Not vice versa. Take control of your manufacturing today with the premier unified, flexible, comprehensive ERP system.",
}

export default function RootLayout({ children }) {

  // const { setPathPageView, setIdentity, setTrackPageView } = useTrackingCode();

  // setIdentity("patofcle@gmail.com");

  // setPathPageView("/current-route");
  // setTrackPageView();


  // var _hsq = (window._hsq = window._hsq || []);
  // _hsq.push(["setPath", "/home"]);

  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />

      {/* <Head>
        <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/40200420.js" />
      </Head> */}
      {/* DOES NOT WORK PUTTING SCRIPT IN HEAD TAG */}

      <body className={inter.className}>
        <Header />
        <div className='app-container'>
          {children}
        </div>
        <Footer />


        {/* <script type="text/javascript"> */}
        {/* <script>
          var _hsq = (window._hsq = window._hsq || []);
          _hsq.push(["setPath", "/home"]);
        </script> */}
        {/* <Hubspot /> */}
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/40200420.js"></script>
        
        {/* Script needs to be loaded here, right before the HubspotTracker component */}
        <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/40200420.js" strategy="beforeInteractive" />
        
        <HubspotTracker />
        
      </body>
    </html>
  )
}
