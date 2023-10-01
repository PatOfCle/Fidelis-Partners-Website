import React, {useEffect} from "react";

const HubspotContactForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    // region: "na1",
                    portalId: '40200420',
                    formId: '81b88149-0b4c-4c36-aa08-483953dbbce7',
                    target: '#hubspotForm'
                })
            }
        });
    }, []);


//     <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
// <script>
//   hbspt.forms.create({
//     region: "na1",
//     portalId: "40200420",
//     formId: "81b88149-0b4c-4c36-aa08-483953dbbce7"
//   });
// </script>
    return (
        <div>
            <div id="hubspotForm"></div>
        </div>
    );

}

export default HubspotContactForm;