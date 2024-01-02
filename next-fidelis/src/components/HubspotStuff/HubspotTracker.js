"use client"

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
// import { useRouter } from 'next/router';
import { useRouter, usePathname } from 'next/navigation';

const HubspotTracker = () => {

    // const router = useRouter();
    const pathname = usePathname()
    // var firstLoad = true;
    var firstLoad = useRef(true);
    // var num = 1;


    // var _hsq = window._hsq = window._hsq || [];
    // var _hsq = window;

    // console.log(window)

    useEffect(() => {
        // if (typeof window !== 'undefined') {

        //     console.log('-------')
        //     console.log('num', num)
        //     num = num + 1
        // }
        
        if (typeof window !== 'undefined') {
            console.log(window);
            var _hsq = window._hsq = window._hsq || [];
            console.log(_hsq)

            if (firstLoad.current === true) {
                console.log('in first load')

                _hsq.push(['setPath', pathname]);
                _hsq.push(['trackPageView']);

                _hsq.push(["identify",{
                    email: 'Test5678@gmail.com'
                }]);

                _hsq.push(['setPath', pathname]);
                _hsq.push(['trackPageView']);

                firstLoad.current = false
            } else {

                console.log('now past it')
                _hsq.push(['setPath', pathname]);
                _hsq.push(['trackPageView']);

            }
            // _hsq.push(['setPath', pathname]);
            // _hsq.push(['trackPageView']);
        }
    }, [pathname])

    
    

    // useEffect(() => {      
    //     console.log('---------------')
    //     console.log(window._hsq)

    //     _hsq.push(['setPath', pathname]);
    //     _hsq.push(['trackPageView']);

    //     // console.log('hereee')
    //     // console.log(window)
    //     // console.log(window._hsq)
    //     // console.log(window.location.search)

    //     // console.log('halloooo')


    //     console.log('whaddup')
    //     console.log(pathname)
    // // }, [])
    // // }, [window.location.pathname])
    // // }, [router.pathname])
    // }, [pathname])
  
    return null;
};

export default HubspotTracker;