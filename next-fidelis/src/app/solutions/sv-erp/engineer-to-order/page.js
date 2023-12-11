import React from 'react'
import ERPModuleContent from '../ERPModuleContent'

const bullets = {
  module : 'Engineer to Order',
  initiate : [
    "Autdesk-CAD integration to load routings and bills of materials from drawings.",
    "Carry forward to item setup and engineering on awarded quotes.",
    "Support for multi Level bills of materials, including interactive drilling, full MRP, and summary and detail actual costing.",
    "Creation and management of alternate routings, maintaining rigor and discipline of routing steps by work order."
  ],
  progress : [
    "Departmental level workflow management to ensure correct item setups, including routings, packaging, outplant, quality, and costing,  with inbox processing and email alerts.",
    "Full management of engineering projects, including product launches, engineering change notices, and continuous improvements.  Includes task tracking, notifications, alerts, and past dues, to drive full accountability.",
    "Revision management at the part, sales order, and shop order level(s), depending upon approach and rigor required.",
    "Full reporting and metrics suite around engineering processes."
  ],
  deliver : [
    "Management, gated signoff, and documentation of the production part approval (PPAP) process.",
    "Coordination of the First Article process for newly onboarded parts requiring internal and customer signoffs.",
    "Implementation of the Management Review and Buyoff processes for newly onboarded products and items.  Depending upon level of control required, can disable downstream production and shipping activities until signoffs obtained.",
    "Controlled access to all baselined documents and folders by item across the company and to the plant floor, including prints, instructions, and certifications."
  ]
}

function engineerToOrderPage() {
  return (
    <div>
      <ERPModuleContent bullets={bullets} />
    </div>
  )
}

export default engineerToOrderPage