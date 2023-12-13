import React from 'react'
import ERPModuleContent from '../ERPModuleContent'

const moduleData = {
  module : 'MRP',
  preview: 'Take command of material planning and purchasing using interactive and intuitive tools.',
  initiate : [
    "One stop MRP window with full set of tools to drive planning and purchasing.",
    "Factor current inventory, future purchases, future production or sales demand.",
    "Base planning on either future or historic orders, both sales and production.",
    "Filter to show only items needed or entire look.",
    "Segment MRP look by planner, customer, vendor, part family, warehouse or facility.",
    "Identify future shortages at the line item and date levels.",
  ],
  progress : [
    "Factor for safety stock levels.",
    "Filter for outplant vendors and/or different production facilities.",
    "Factor preferred vendor data, including lead times",
    "Plan using partially processed material, assigning existing inventory to orders, with special emphasis on coil slitting.",
  ],
  deliver : [
    "Create and deliver purchase orders directly from the MRP tool.",
    "Add to blankets, based on needed material, dates, and minimum order quantities, if needed.",
    "Formulate complete material purchasing vendor release plans, and issue to suppliers.",
    "Schedule open PO and past due reports to be sent to vendors on timed bases.",
    "Several MRP options, outside of the interactive tool.",
  ]
}

function mrp() {
  return (
    <div>
      <ERPModuleContent moduleData={moduleData} />
    </div>
  )
}

export default mrp