"use client"

import React, {useEffect} from "react";
import './HubspotBlogEmailSignupForm.css'

const HubspotBlogEmailSignupForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId: '40200420',
                    formId: '76d44092-aa0c-4726-83b1-0533f956e2de',
                    target: '#hubspotForm'
                })
            }
        });
    }, []);

    return (
        <div className="blogEmailSignupContainer">
            <h2>
                Stay in the Loop
                {/* &darr; */}
            </h2>
            {/* <em style={{textAlign: "center", fontFamily: "Metropolis Regular"}}>Drop your email for more!</em> */}
            <div id="hubspotForm"></div>
        </div>
    );

}

export default HubspotBlogEmailSignupForm;