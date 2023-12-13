import React from 'react'
import ERPModuleContent from '../ERPModuleContent'

const moduleData = {
  module : 'Order Management',
  preview: 'Efficiently enter, commit to, manage, and deliver upon customer orders.',
  initiate : [
    "Software tools to drive efficient and accurate order entry, including cross reference data population, new copy features, and price list inheritance.",
    "Various quote to order options, depending on the nature of the business.",
    "Support for customer demand portal downloads, driving time savings and accuracy.",
    "Full integration with all forms of EDI – blankets (830s), daily demand (862s), and purchase orders (850s).",
    "Verification of appropriate pricing, including outdated quotes and variations from categorical or customer-specific price lists.",
    "Support for blanket orders and releases.",
    "Separation or inclusion of customer forecasts for planning purposes.",
  ],
  progress : [
    "Launching and management of workflows to gain commitments from materials, production, and logistics on ability to deliver.",
    "Application of credit checking at the level of discipline required, including holds, credit balance exceeded.",
    "Options for make to order, make to stock, or both.",
    "Distribution of orders across fulfillment warehouses or manufacturing locations.",
    "Pre-calculation and tracking of expected commissions.",
    "Quick launches into MRP, scheduling and production modules as required.",
    "Full capture of order change history to measure and alert to customer drop ins and schedule changes.",
  ],
  deliver : [
    "Generation and email of sales acknowledgements and firm confirmations at various levels.",
    "Automatic inclusion of surcharges, freight, and additional items based on items and quantities ordered.",
    "Ability to link and track company documents and folders to sales orders.",
    "Easy access to order statuses to respond to customer inquiries.",
    "Instruction to shipping and logistics through interactive pick list generation and prioritization.",
    "Additional tools to shepherd open orders through the manufacturing process.",
    "Advanced shipping notifications.",
    "Open and historical order reporting and metrics.",
  ]
}

function orderManagement() {
  return (
    <div>
      <ERPModuleContent moduleData={moduleData} />
    </div>
  )
}

export default orderManagement