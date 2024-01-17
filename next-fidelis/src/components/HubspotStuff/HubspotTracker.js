"use client"

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
// import { useRouter } from 'next/router';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const HubspotTracker = () => {


    function getCookie(name) { 
        var re = new RegExp(name + "=([^;]+)"); 
        var value = re.exec(document.cookie); 
        return (value != null) ? decodeURI(value[1]) : null; 
    }

    // const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const searchParamsDict = Object.fromEntries(searchParams ? searchParams.entries() : [])

    const emailAddress = searchParamsDict.email ? searchParamsDict.email : 'holderemail123@gmail.com'

    var firstLoad = useRef(true);

    useEffect(() => {
        
        if (typeof window !== 'undefined') {
            var _hsq = window._hsq = window._hsq || [];
            
            console.log('---', getCookie('hubspotutk'))
            console.log(pathname)
            console.log(searchParamsDict)
            console.log(emailAddress)

            if (firstLoad.current === true) {
                // console.log('in first load')

                _hsq.push(['setPath', pathname]);
                _hsq.push(['trackPageView']);

                // _hsq.push(["identify",{
                //     email: 'Test5678@gmail.com'
                // }]);
                _hsq.push(["identify",{
                    email: emailAddress
                }]);

                _hsq.push(['setPath', pathname]);
                _hsq.push(['trackPageView']);

                firstLoad.current = false
            } else {

                _hsq.push(['setPath', pathname]);
                _hsq.push(['trackPageView']);

            }
        }
    }, [pathname, searchParamsDict])

    
    return null;
};

export default HubspotTracker;