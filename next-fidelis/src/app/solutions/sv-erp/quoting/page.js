import React from 'react'

import ERPModuleContent from '../ERPModuleContent'

const bullets = [
  "Integration and connection with online quoting and Customer Relationship Management (CRM) applications",
  "Support for customer specific pricing and costing models",
  "Managed quoting workflows, including communication with suppliers",
  "Departmental quote approvals with inbox processing and email alerts",
  "Support for customer-specific RFQ templates",
  "Managed document sharing and handholding through the quoting process",
  "Autdesk-CAD integration with options for configurable quote adds",
  "What-if margin analysis",
  "Repricing on customer, categorical, or aggregate scales, based on system captured actual costs",
  "Configurable pricing formulas based on nature, dimension, and process of product or item quoted",
  "Electronic customer touch points, including formal quote, follow up, and no quot",
  "Carry forward to item setup and engineering on awarded quotes",
  "Reminders and alerts upon outdated quoted pricing windows",
  "Managed quote follow ups and success metrics",
  "Quote vs. actual cost comparisons for material, labor, outside processing, and burden"
]

function quotingPage() {
  return (
    <div className=''>
      <ERPModuleContent bullets={bullets} />
    </div>
  )
}

export default quotingPage
