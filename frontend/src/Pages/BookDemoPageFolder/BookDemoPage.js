import React from 'react'
import './BookDemoPage.css'
import HubspotContactForm from '../../Components/HubspotStuff/HubspotContactForm'

function BookDemoPage() {
  return (
    <div className='BookDemoPage-container'>

        <div className='BookDemoPage-text'>
            <h1>
                Connect with Us!
            </h1>

            <div>
                {/* Want to learn more? Fill out this form and leave us a few details at the bottom! */}
                Contact us to book an introduction and schedule an ERP and enterprise data consultation.
                <br></br>
                <br></br>
                Fidelis Partners offers concise demos as well as free ERP and enterprise data consultations.
                <br></br>
                
            </div>
        </div>

        <div className='contact-form-container'>
            <HubspotContactForm />
            {/* try to cover the hubspot logo with css styling */}
        </div>

    </div>
  )
}

export default BookDemoPage