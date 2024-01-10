export const allModuleCategories = [
    "Accounting",
    "Customer Service",
    "Engineering",
    "Human Resources",
    "Inventory Control",
    "Maintenance",
    "Manufacturing",
    "Materials Management",
    "Planning",
    "Quality",
    "Sales",
    "Scheduling",
    "Shipping",
    "Shipping and Logistics",
    "Supply Chain",
    "Tooling",
]


export const svModules = [
    {
        //moduleName is the title of the module how you want it displayed
        moduleName : "Quoting",
        // moduleName : "Quoting1",

        // whereas moduleSlug is the moduleName, but with the words all lowercase and spaces replaced with -'s
        // moduleSlug is used to drive the URL
        moduleSlug : "quoting",
        // moduleSlug : "quoting1",
        
        moduleCategories: [
            "Sales",
            "Accounting",
            "Engineering",
            "Purchasing",
        ],

        modulePreview : "Deliver and win professional, team approved, competitive quotes based on actual costs.",
        moduleStageDescriptions : {
            initiate : [
            "Integration and connection with online quoting and Customer Relationship Management (CRM) applications.",
            "Support for customer specific pricing and costing models.",
            "Support for customer-specific RFQ templates.",
            "Autdesk-CAD integration with options for configurable quote adds.",
            "Configurable pricing formulas based on nature, dimension, and process of product or item quoted.",
            ],
            progress : [
            "Managed quoting workflows, including communication with suppliers.",
            "Departmental quote approvals with inbox processing and email alerts.",
            "Managed document sharing and handholding through the quoting process.",
            "Reminders and alerts upon outdated quoted pricing windows.",
            "What-if margin analysis.",
            ],
            deliver : [
            "Electronic customer touch points, including formal quote, follow up, and no quote",
            "Carry forward to item setup and engineering on awarded quotes.",
            "Managed quote follow ups and success metrics.",
            "Repricing on customer, categorical, or aggregate scales, based on system captured actual costs.",
            "Quote vs. actual cost comparisons for material, labor, outside processing, and burden.",
            ]
      }
    },

    
    {
        moduleName : "Engineer to Order",
        moduleSlug : "engineer-to-order",
        moduleCategories: [
            "Engineering",
            "Sales",
            "Customer Service",
        ],
        modulePreview : "Plan and execute product onboarding and engineering processes with resource planning, workflows, documentation, and signoffs.",
        moduleStageDescriptions : {
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
    },

    {
        moduleName : "Order Management",
        moduleSlug : "order-management",
        moduleCategories: [
            "Customer Service",
            "Shipping",
            "Sales",
            "Planning",
            "Scheduling",
            "Shipping and Logistics",
            "Supply Chain",
        ],
        modulePreview : "Efficiently enter, commit to, manage, and deliver upon customer orders.",
        moduleStageDescriptions : {
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
    },


    {
        moduleName : "MRP",
        moduleSlug : "mrp",
        moduleCategories: [
            "Purchasing",
            "Planning",
            "Inventory Control",
            "Scheduling",
            "Materials Management",
            "Supply Chain",
        ],
        modulePreview : "Take command of material planning and purchasing using interactive and intuitive tools.",
        moduleStageDescriptions : {
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
    },


    {
        moduleName : "Purchasing",
        moduleSlug : "purchasing",
        moduleCategories: [
            "Purchasing",
            "Planning",
            "Inventory Control",
            "Scheduling",
            "Materials Management",
            "Supply Chain",
        ],
        modulePreview : "Plan, enter, manage, and receive supplier purchase orders with full control.",
        moduleStageDescriptions : {
            initiate : [
                "Software tools to drive efficient and accurate PO management, including cross reference data population, new copy features, and price list inheritance.",
                "RFQ to PO lifecycle management.",
                "Support for purchased inventory, outplant process, and miscellaneous purchases.",
                "Support for blanket POs with releases.",
            ],
            progress : [
                "Purchasing approval workflows by purchase type, departmental level, and spend.  Ability to block selected downstream steps (including PO issuance) until approved, if desired.",
                "Assignment of purchase order lines to production orders, material used, equipment, and tooling for tracking and costing purposes.",
                "Full integration with&nbsp;<a href='/solutions/sv-erp/mrp'>SV MRP</a>.",
                "Quick receive capability.",
                "Bar coded receiving for outside process and raw material.",
            ],
            deliver : [
                "Generation and email of PO and release documents.",
                "Lot level bar code labeling of received raw material and outside process value adds.",
                "Buyer notifications upon receipt of designated items.",
                "Documentation links to receipts (certifications, packing lists) and automatic forwarding and generation of those documents when required by customers.",
                "Forward link into Accounts Payable with price and quantity variance approvals.",
                "Open and historical purchase reporting and metrics.",
            ]
      }
    },


    {
        moduleName : "Scheduling",
        moduleSlug : "scheduling",
        moduleCategories: [
            "Purchasing",
            "Planning",
            "Inventory Control",
            "Scheduling",
            "Supply Chain",
        ],
        modulePreview : "Plan shop floor production proactively, with continual review and update based on changing realities.",
        moduleStageDescriptions : {
            initiate : [
                "Tailorable to the particulars of a company’s scheduling environment.",
                "Generation of automatic schedules by plant, customer, product family, or workcenter.",
                "Initial schedule outlay based on standard set up and piece rates, outplant lead times, and inter-operation buffer times.",
                "Ability to drive plant scheduling by prioritized criteria, including common setups, customer preferences, employee and workcenter capacity.",
                "Automated workflows with ability to establish production commitment dates based on lead times and capacity before confirming to customers.",
            ],
            progress : [
                "Interactive scheduling dashboard that generates planned orders, factoring current inventory, stocking requirements, delivery requirements, order policies, and production in flight.  Instant visualization to production needs by line item with proposed planned order insertion.",
                "Continued alerts to customer order changes (pull ins, quantity changes, drop ins, cancellations), with the ability to layer those into the schedule.",
                "Interactive shop floor release management from the scheduling window.",
                "Movement of production orders to available workcenters.",
                "Near term look at planned overproduction and shortages based on committed ship dates.",
                "Ongoing access to loads and past due by workcenter and department.",
            ],
            deliver : [
                "Production dashboard drag and drop by plant supervisors.",
                "Display of schedules on plant floor dashboards for clocking by employees.",
                "Integrated schedule deliveries via emails or software folders.",
                "Generation of Excel schedules, as an option, with upload back into the software based on scheduler changes.",
                "Full plant visual of planned production by department with visual drill into each workcenter.",
            ]
      }
    },


    {
        moduleName : "Production",
        moduleSlug : "production",
        moduleCategories: [
            "Manufacturing",
            "Inventory Control",
            "Planning",
            "Scheduling",
            "Supply Chain",
        ],
        modulePreview : "Drive employee production activity, with simplified real time data capture, inter-operational inventory controls, and full productivity and scrap reporting.",
        moduleStageDescriptions : {
            initiate : [
                "Delivery of paperwork to the plant floor: travelers, shop orders, inspection documents, quality alerts.",
                "Plant floor dashboards by workcenter or group with employee clocking by shop order.",
                "Several types of production capture, including setup, run, sort, rework, machine down, coil change.",
                "Plant employee access to document links, including prints and instructions.",
                "Paperless option with traveler labels printed per container at each operation.",
                "Full bar coding of all production transactions, including material usage, kitting, clock in, clock out, outplant shipping, and outplant receiving.",
            ],
            progress : [
                "Option for team clocking into operations.",
                "Auto consume or manual material issue options, with bar coding.",
                "Many supporting tools, including variance reporting, reasonable piece rate and inventory limits with management overrides.",
                "Real time processing of raw, work in process, and finished goods inventory at the shop order level throughout.",
                "Special high end coil slitting features.",
                "Capture of inspection results against plan, including alerts and management approvals of exceptions.",
                "Easy recording of material or work in process scrap.",
            ],
            deliver : [
                "Full productivity and scrap reporting.",
                "Plant dashboards by employee to motivate productivity, efficiency, and scrap rates.",
                "Shop order and lot traceability based on material and subs issued upstream in the process.",
                "Post run evaluation tablet processes, driving post production tooling repair schedule,",
                "Paid versus earned reporting.",
                "Visual trail of a part and shop order through the entire production process, including employees, dates, and pieces.",
            ]
      }
    },


    {
        moduleName : "Inventory",
        moduleSlug : "inventory",
        moduleCategories: [
            "Purchasing",
            "Planning",
            "Inventory Control",
            "Scheduling",
            "Manufacturing",
            "Supply Chain",
        ],
        modulePreview : "Take full command of raw material, work in process, and finished goods inventory by lot and location, driving next operations and vendor management.",
        moduleStageDescriptions : {
            initiate : [
                "Receive raw material at the lot and container levels with full labeling and traceability.",
                "Manage raw material inventory by location.",
                "Issue specific raw material lots to production activity using bar coding, tablet computers, or by office.",
                "As an option, auto deplete (backflush) material in FIFO order based on production reported and bill of materials.",
                "Segregate raw material into various buckets.",
                "Special coil slitting features to specify, slit, and track mother and child coils through the process.",
                "Drive MRP processes based on current raw material inventory.",
            ],
            initiateDescription: "Raw Material",
            progress : [
                "Track quantities real time by shop order, operation, and workcenter across internal processes based on plant floor production.",
                "Track quantities real time by shop order, operation, and vendor across outside processes based on outside process shipping and receiving.",
                "Manage WIP inventory by location, including driving plant floor scheduling and vendor management.",
                "Inform operators and materials handlers of next destination using ‘NEXT’ bar code labeling.",
            ],
            progressDescription: "WIP",
            deliver : [
                "Fully trace finished goods product by work order back to source work orders and raw material lots.",
                "Manage finished goods inventory by location.",
                "Use a variety of tools, including FIFO pick lists, safety stock reminders, excess inventory that customers are required to take.",
                "Label finished goods easily with integrated, serialized labels.  Includes standard and customer required formats.",
                "Supports a host of customer finished goods inventory consignment requirements.",
                "Report on raw material, WIP, and finished goods at many levels, measuring turns, valuation, obsolescence.",
            ],
            deliverDescription: "Finished Goods",
        }
    },


    {
        moduleName : "Shipping and Logistics",
        moduleSlug : "shipping-and-logistics",
        moduleCategories: [
            "Shipping and Logistics",
            "Customer Service",
        ],
        modulePreview : "Proactively push shipping instructions, drive pick lists, increase on time delivery, and generate precise customer labeling and paperwork.",
        moduleStageDescriptions : {
            initiate : [
                "Run shipping area using assigned queues, various pick lists and open order report options.",
                "Satisfy open sales orders and relieve appropriate shop order and location inventory with a few clicks.",
                "Launch shipping with a multitude of bar code options, including tablet-based pick lists, bar coding of finished goods serialized stock, and advanced shipment building from staged pallet scans.",
                "Support advanced shipping scenarios such as vendor drop ships, warehouse consignment pulls, and RMAs.",
                "Generate advanced shipping paperwork and labels, where applicable, from upstream in the production process.",
            ],
            progress : [
                "Utilize ‘pending’ shipment features to prepare shipping paperwork days in advance.",
                "Coordinate logistics, with shipment plan RFQs, multi stop planning, and 3rd party logistics integrations.",
                "Build pallets interactively from plant floor workcenters or staged shipping areas.",
                "Build, label, and get electronic signoff on part, pallet, and truckload shipments before departure.",
                "Keep customers informed with email or EDI based advanced shipping notices (ASNs) and internally coordinated notification queues.",
                "Alert or stop shipping based on a variety of options, including PPAP signoff, open NCMR or quality issues, credit holds, and certification requirements.",
            ],
            deliver : [
                "Automatically generate standard and unique paperwork: Bill of Lading, Packing List, Internal Certification (at high levels of complexity), and trace based raw material certifications.",
                "Affix any type of label to the shipment; standard or customer specific, master label or child label, with full trace to packing list and EDI transactions.",
                "For one customer, 75 different customer required label formats are generated directly from the software.",
                "Integrate easily with 3rd party platforms: UPS Worldship, FedEx, UPS, and higher end logistics platforms.",
                "Report on advanced and historical On Time Delivery and other shipping metrics.",
            ]
      }
    },
    

    {
        moduleName : "Accounting",
        moduleSlug : "accounting",
        moduleCategories: [
            "Accounting",
        ],
        modulePreview : "Implement financial controls, track inventory, and manage profitability at multiple levels.",
        moduleStageDescriptions : {
            initiate : [
                "Simple and advanced tools to proactively manage pricing.",
                "Supplier purchase order approvals and confirmations by department, account category, and level of spend.",
                "Secured invoicing queues generated from shipments, services, projects, and special pricing setups across the company.",
                "Multitude of costing options with update management and rollup functions, including standard, actual, and average actual options",
                "Tools to perform credit approvals and holds at key intervals in the sales cycle.",
                "Support for Intercompany transactions.",
            ],
            progress : [
                "Generation and management of open accounts receivables from invoicing.",
                "Generation and management of open accounts payables, including PO and receiver variance tracking and PPV variance from standard cost.",
                "Availability of open accounts receivable, including past due and credit limit checking, to drive collections and sales order processing.",
                "Dynamic inventory revaluation tools based on purchasing, labor, and outplant price fluctuations.",
                "Integrated commission expected and earned calculations and reporting.",
                "Detailed workflows for exception management, including credit memos and RMAs.",
            ],
            deliver : [
                "Time sensitive and aggregate costing alerts and reporting tools, analyzing material, labor, burden, and outplant spend by company, customer, job, and more.",
                "Full EDI support of 810 outbound invoices.",
                "Fully integrated reporting: Projected and Historical Sales, Cost of Goods Sold, Inventory Turns, Quote vs Actual, Inventory Valuation, etc.",
                "Delivery of reported data in a variety of modes: Standard Reports, Excel extracts, Power BI, Delivered Pivots.",
                "Fully integrated GL under development for those seeking.",
            ]
      }
    },


    {
        moduleName : "CRM",
        moduleSlug : "crm",
        moduleCategories: [
            "Sales",
            "Engineering",
            "Customer Service",
            "Accounting",
        ],
        modulePreview : "Connect SV with state of the market CRM software and leverage data across two platforms.",
        moduleStageDescriptions : {
            initiate : [
                "Interface with CRM of choice bi-directionally, including Hubspot and SalesForce.com.",
                "Manage and share contacts centrally across the company.",
                "Track opportunities through the sales lifecycle – call reports to leads to quotes to purchase orders.",
            ],
            progress : [
                "Carry opportunities forward to SV quotes.",
                "Interface to email platform of choice, maintaining centralized record of prospect and customer outreach.",
                "Take advantage of SV alert features, triggering, assigning, and managing customer follow up activity.",
            ],
            deliver : [
                "Enable customer, order, invoice, and commission date to sales reps.",
                "Report on Pipeline, Quote Activity by Rep, Win Ratios, etc.",
            ]
      }
    },


    {
        moduleName : "Quality",
        moduleSlug : "quality",
        moduleCategories: [
            "Quality",
            "Manufacturing",
            "Inventory Control",
            "Shipping and Logistics",
            "Customer Service",
        ],
        modulePreview : "Locate, contain, communicate upon, segregate, and disposition inventory with quality issues, whether identified internally or by customer.",
        moduleStageDescriptions : {
            initiate : [
                "Identify, categorize, assign, and champion quality items at any level of categorization, including NCMR, alert, CAR, and customer notification.",
                "Manage inspection instructions, steps, dimensions, and frequencies at the item or routing step levels, generating for plant floor production use.",
                "Full NCMR functionality for more rigorous implementations, including segregated material identification and labeling by lot, and full disposition processing via MRB.",
                "Plant floor inspection data capture, both wirelessly and directly into SV, with exception notifications and alerts.",
            ],
            progress : [
                "Configurable workflow and email communication throughout the process, internally and with customers.",
                "Suspect or NCMR’d inventory segregated, sorted-reworked, and dispositioned via hold quantities, scrap quantities, and MRB.",
                "Maintenance of employee training records and history.",
                "Full customer return (RMA and credit memo), vendor return (debit memo), and rework functionality with segregation and measurement.",
            ],
            deliver : [
                "Support for any customer required NCR or CAR formats with a single template.",
                "Quality alerts throughout the system for vision by employees – plant dashboard, email, and via paperwork reminders.",
                "Ability to warn or stop key events, including production start or shipping, based on quality item or NCMR statuses for the item(s).",
                "Support for disposition of quality items and NCMRs to full completion.",
                "Plentiful reporting of open quality items, assignments, trends, customer required metrics, through core SV reports of Power BI.",
            ]
      }
    },

    {
        moduleName : "Capacity Planning",
        moduleSlug : "capacity-planning",
        moduleCategories: [
            "Planning",
            "Inventory Control",
            "Scheduling",
            "Manufacturing",
            "Supply Chain",
        ],
        modulePreview : "Visually inform and act upon on plant capacity utilization constraints and outcomes.",
        moduleStageDescriptions : {
            initiate : [
                "Maintain and utilize resource capacity information: By employee, skill set, workgroup, work center, shift, and calendar day-week.",
                "Support prioritized alternate resources designations for item routing steps.",
                "Easily create alternate outside process shop orders or alternate internal routings based on capacity shortages.",
            ],
            progress : [
                "Highlight overbooked departments and work centers, with what if analysis for user specified reassignments.",
                "Easily allow work center reassignments of open jobs.",
                "For multi-warehouse companies, recommend warehouse source based on available inventory and prior commitments.",
            ],
            deliver : [
                "Workflow tools for capacity-based analysis and order commitments to customers.",
                "Pivot table outputs to make the management case for capacity changes at work center, departmental, customer, and plant levels.",
                "Report current and future loads based on released, planned, or forecasted orders and standard or actual hours required.",
            ]
      }
    },

    {
        moduleName : "Collaborative Workflows",
        moduleSlug : "collaborative-workflows",
        moduleCategories: [
            "ALL",
        ],
        modulePreview : "Implement automation to shepherd module-level workstreams with accuracy, approval, and accountability.",
        moduleStageDescriptions : {
            initiate : [
                "Set up configurable workflows with rules for assignment, timing, and dependencies.",
                "Visually track workflow through its dependent steps.",
                "Remind employees of workflow responsibilities with emails, inbox processing, and reports.",
                "Provide quick access to supporting data to effect workflow decisions.",
                "Complete workflow steps on individual or team levels.",
                "Bypass workflow steps for simplicity, based on threshold criteria.",
                "Link and share developing and collaborative documentation through the workflow process.",
            ],
            progress : [
                "Set up configurable workflows with rules for assignment, timing, and dependencies.",
                "Visually track workflow through its dependent steps.",
                "Remind employees of workflow responsibilities with emails, inbox processing, and reports.",
                "Provide quick access to supporting data to effect workflow decisions.",
                "Complete workflow steps on individual or team levels.",
                "Bypass workflow steps for simplicity, based on threshold criteria.",
                "Link and share developing and collaborative documentation through the workflow process.",
            ],
            deliver : [
                "Quoting: Move a new quote or requote through sales, engineering, purchasing, and production departments to ensure accuracy and margin.",
                "Sales Order Approval: Approve customers based on credit-worthiness and completion of sufficient order detail.",
                "Sales Order Release Workflow: Commit to delivery dates with additive input from engineering, materials, production, and shipping personnel.",
                "Purchasing Approval Workflow: Approve purchase requisitions and advance to PO, based on account category, purchase type, department, and level of spend.",
                "Receiving Workflow: Review and approve incoming material against purchasing requirements, tolerances, and chemistries before proceeding with production.",
                "Quality Workflow: Manage a quality item through the segregation, sort-rework, accounting, and disposition processes.",
                "Credit Memo Workflow: Confirm credit memo details, reasoning, and pricing across the company before advancing to the accounting process.",
            ]
      }
    },

    {
        moduleName : "Project Management",
        moduleSlug : "project-management",
        moduleCategories: [
            "ALL",
        ],
        modulePreview : "Not available in most ERPs, plan and execute projects of all levels across the company to understand utilization of and manage valuable resources.",
        moduleStageDescriptions : {
            initiate : [
                "Supports any type of project, including new products, engineering, quality, human resources, CapEx, and  continuous improvement.",
                "Setup templates by project type, with the ability to tailor for individual projects.",
                "Utilize flex fields to maintain key data particular to a project type.",
                "Establish employee assignments, due dates, milestones and dependencies by phase and task.",
            ],
            progress : [
                "Remind employees of their upcoming tasks through Inbox processing.",
                "Link to other data within the ERP to avoid redundancy.",
                "Collaborate with email, including templatized email options and reminders of newly assigned or upcoming tasks.",
                "View open and historical project tasks by any combination of criteria – project, employee, timeframe, type of work.",
                "Quickly mark items complete and/or comment upon project tasks for general viewing.",
            ],
            deliver : [
                "Report upon past due, employee tasks/accountability, and resource loads, by company, customer, project, employee, or overall.",
                "Options for bar coding of paperwork through the plant to move projects through the process.",
                "Utilize Power BI for visual Gantt charts of project progress.",
                "Option to track and potentially bill hours by project, phase, and task.",
            ]
      }
    },

    {
        moduleName : "Time and Attendance",
        moduleSlug : "time-and-attendance",
        moduleCategories: [
            "Human Resources",
            "Manufacturing",
            "Accounting",
        ],
        modulePreview : "Timeclock, payroll, and various HR features.",
        moduleStageDescriptions : {
            initiate : [
                "Manage shifts, breaks, lunches centrally.",
                "Track desired human resource fields by employee, with security.",
                "Clock in and out easily, with configurable options for grace periods, early or late arrival, early or late departure.",
                "Provide access to other employee data from the timeclock, including production efficiency, scrap rates, and pay period hour tracking.",
            ],
            progress : [
                "Enable options to clock in and out at departmental levels over the course of the shift.",
                "Utilize ‘trusted’ employee options for those who work extra hours outside of shift to complete important work.",
                "Modify erroneous or missing time and attendance entries at supervisory or administrative levels.",
                "Submit, approve and track PTO requests and YTD time.",
                "Implement Points system, motivating good attendance and disincenting poor attendance.",
            ],
            deliver : [
                "Who is Here view, including production assignments on which they are currently working.",
                "Approve time and attendance entries at supervisory, department, or HR levels.",
                "Generate payroll interface to payroll system of choice (e.g. Paychex, Paycor, ADP, etc).",
                "Report on paid vs earned, productivity, and attendance history.",
            ]
      }
    },

    {
        moduleName : "Vendor Management",
        moduleSlug : "vendor-management",
        moduleCategories: [
            "Materials Management",
            "Purchasing",
            "Planning",
            "Supply Chain",
        ],
        modulePreview : "Hold suppliers accountable on dates, commitments, pricing, and quality.",
        moduleStageDescriptions : {
            initiate : [
                "Fluid RFQ to PO options to support pricing and purchasing alternatives.",
                "Maintenance of lead times by vendor and/or item to set reasonable expectations for all parties.",
                "Confirmation of delivery date vs request date and tracking against.",
                "Authorized confirmation of PO pricing and account before proceeding internally.",
            ],
            progress : [
                "Price control options, including material pricing vs index and historical cost fluctuations by material item or type.",
                "Vendor ISO certification tracking by function and date.",
                "Vendor certification workflow processing.",
                "Detailed quality metrics by vendor.",
                "Alternative vendor options on MRP.",
            ],
            deliver : [
                "Advanced return to vendor and debit memo processing.",
                "Timed, emailed PO reports by vendor, denoting upcoming and past due.",
                "On Time Delivery and Quality/NCMR reporting by vendor.",
                "Power BI vendor performance metrics.",
                "Standard vs actual costing queues to alert to price swings and impact on inventory value.",
            ]
      }
    },

    {
        moduleName : "Shop Maintenance",
        moduleSlug : "shop-maintenance",
        moduleCategories: [
            "Maintenance",
            "Manufacturing",
            "Tooling",
            "Purchasing",
        ],
        modulePreview : "Proactively manage machine and tool maintenance, controlling resource costs, meeting audit requirements and protecting company assets.",
        moduleStageDescriptions : {
            initiate : [
                "Support for maintenance tracking by machine/equipment, tooling, and gauge.",
                "Preventive Maintenance setups by activity type and frequency or number of pieces made.",
                "Schedule tool repairs, machine maintenance, and gauge calibration from one point.",
                "Alert Maintenance department to critical or incident needs from plant production workstations.",
                "Maintenance work order forms designed to specification with instructions.",
            ],
            progress : [
                "Generate upcoming preventive maintenance activities upon completion of prior activities or from the SV Preventive Maintenance engine.",
                "Inbox processing for maintenance employees to drive next items needing attention.",
                "Purchase order assignments to equipment or tooling, to",
                "Service part assignment to machines and inventory maintenance.",
                "Rapid bar coding features, to facilitate employee clock-ins to maintenance work and indirect activity.",
            ],
            deliver : [
                "Current open maintenance item reporting.",
                "Historical reporting of maintenance by equipment or tool, meeting audit requirements.",
                "Post-production run evaluation capture, generating real time instructions for tool and machine maintenance.",
                "Ability for maintenance employees to clock work on plant tablet computers.",
            ]
      }
    },

    {
        moduleName : "Tool Room",
        moduleSlug : "tool-room",
        moduleCategories: [
            "Maintenance",
            "Manufacturing",
            "Tooling",
            "Purchasing",
        ],
        modulePreview : "Master the scheduling, inventory, labor, and purchasing costs of tools (dies) and components.",
        moduleStageDescriptions : {
            initiate : [
                "Master list of dies and tool components, including job cross references.",
                "Oversight of tool builds using a bill of materials, including option to import from CAD.",
                "Capture of tool build and repair costs through detailed labor tracking and purchasing links.",
                "Tool repair schedule integrated and timed with production needs.",
            ],
            progress : [
                "Full tool crib inventory, including purchases, receipts, issues, with bar code options.",
                "Die location tracking and detailed field maintenance for OSHAA.",
                "Maintenance and forwarding of die setup parameters for production use at the press.",
                "Full integration with preventive maintenance (link here Patrick to shop maintenance) and incident tracking.",
            ],
            deliver : [
                "Post production run tool evaluation using wireless tablets, forwarding maintenance and repair instructions to the tool room.",
                "Shop drawing to open order import functions to facilitate order management.",
                "Reporting on purchasing and labor costs, including customer billing and historical tracking for future quotes.",
            ]
      }
    },


    {
        moduleName : "Mobile Solutions",
        moduleSlug : "mobile-solutions",
        moduleCategories: [
            "ALL",
        ],
        modulePreview : "Mobilize employees, customers, and partners by securely connecting SV to the shop and beyond.",
        moduleStageDescriptions : {
            initiate : [
                "Online quoting and budgeting extension, enabling full project cycle collaboration with customers.",
                "Integration with third party IPad-based order submission and management systems.",
                "Full plant floor tablet device support within the core software: production, inventory, shipping — including bar coding.",
            ],
            progress : [
                "Materials handler inventory picks, moves, and labeling using mounted tow motor devices.",
                "Elaborate plant floor solutions for unique material processing requirements, e.g. slitting.",
                "Full physical inventory capture with mobile tablets, reducing physical inventory time by orders of magnitude.",
            ],
            deliver : [
                "Post production evaluation and preventive maintenance tablet based solutions.",
                "Full shipment-level bill of lading signoff by serialized, bar coded container.",
                "3rd party logistics integration.",
                "Emailed executive reports and dashboards to digital devices.",
            ]
      }
    },


    {
        moduleName : "Bar Coding",
        moduleSlug : "bar-coding",
        moduleCategories: [
            "ALL",
        ],
        modulePreview : "Unlike most ERP solutions requiring bolt-ons or extensions, SV is bar code enabledin with the core software -- across the entire shop.",
        moduleStageDescriptions : {
            initiate : [
                "Scan to receive raw material against open purchase orders.",
                "Scan to kit materials by lot to production work orders.",
                "Generate lot level labels for raw material with full trace backward.",
                "Scan to issue and return material lots to and from production work orders.",
                "Scan routing tickets or container labels to move claim and move inventory through the production value add process.",
            ],
            progress : [
                "Scan to build and send outplant shippers by lot.",
                "Scan to receive outplant work by lot.",
                "Scan to perform full physical inventory",
                "Scan to move material lots across WIP and finished goods locations.",
            ],
            deliver : [
                "Scan pick lists to generate shipments.",
                "Scan pallet labels in staging area to build shipments from immediately available product.",
                "Scan maintenance and indirect work order documents to clock non production and tooling work.",
                "Generate standard or customer-specified bar code labels from the integrated solution.",
            ]
      }
    },


    {
        moduleName : "EDI",
        moduleSlug : "edi",
        moduleCategories: [
            "Customer Service",
            "Shipping",
            "Accounting",
        ],
        modulePreview : "Unlike most ERPs, full onboarding and support of Electronic Data Interchange (EDI) without the need for  additional mapping software and third party expertise.",
        moduleStageDescriptions : {
            initiate : [
                "Central control of all EDI using the SV EDI Integrator, resident in the software.",
                "Full customer translation and mapping setups, including parts, locations, unit of measure translations.",
                "Configuration and enforcement of EDI outbound data validation rules by customer.",
                "Full transaction and audit logging, with powerful user review tools.",
                "Rapid onboarding of new trading partners or mapping types.",
            ],
            progress : [
                "Full 830 (sales order blanket) support.",
                "Full 862 (daily release, demand) support.",
                "Full 850 (purchase order) support.",
                "Full customer portal/demand download support for those choosing not to use EDI.",
            ],
            deliver : [
                "Full 856 (advanced shipping notice) support.",
                "Full 810 (outbound invoice) support.",
                "Full 753 (request for routing instructions) support.",
                "Detailed alignment with master and child serialized labels, for advanced customer requirements.",
            ]
      }
    },


    {
        moduleName : "Business Intelligence",
        moduleSlug : "business-intelligence",
        moduleCategories: [
            "ALL",
        ],
        modulePreview : "Leverage data as an asset, using many SV tools to access, share, and analyze information, effecting company performance, strategy and decisions.",
        moduleStageDescriptions : {
            initiate : [
                "SV ‘flex field’ constructs, allowing rapid add and maintenance of tracking data on demand.",
                "SV ‘Data Grabs’, enabling user addition, use, and sharing of quick access to information without IT support.",
                "SV ‘User Queries’, giving instant access to more complex data needs on demand from the SV support team.",
                "Specific pricing and costing drill tools, commissioned by customers over the years.",
            ],
            progress : [
                "Production Dashboard and Command Center, providing visualization to open and in process work across the company.",
                "SV Data Manager, providing secured access for mass maintenance of data.",
                "Custom folders as requested, calling out data or action needing follow up.",
                "Alert engines connected to both workflow and dashboard tools.",
            ],
            deliver : [
                "Hundreds of canned and commissioned reports.",
                "Daily emailed executive reports as specified.",
                "Excel pivot table extracts.",
                "SV QuickDash tool to distribute dashboards to the shop floor.",
                "Power BI visualizations and dashboards around sales, quality metrics, productivity, project management, and commissions, to name a few.",
            ]
      }
    },


    {
        moduleName : "Machine Integration",
        moduleSlug : "machine-integration",
        moduleCategories: [
            "Manufacturing",
            "Supply Chain",
            "Engineering",
            "Inventory Control",
        ],
        modulePreview : "Seamlessly connect SV with shop equipment, controls, wireless devices, and third party software for real time data sharing and visualization.",
        moduleStageDescriptions : {
            initiate : [
                "Feed and enter press machine control inputs based on approved settings for the job run.",
                "Drive material fabrication nesting priorities based on common material, date, and program.",
                "Capture inspection results directly into the software from wireless devices (e.g. calipers).",
            ],
            progress : [
                "Collect real time production hits centrally, from all machines within the company, providing dashboard views of productivity, up time, and down time.",
                "Collect machine measurement results for temperature and chemistries, alerting management to variances from part standard for immediate approval or override.",
                "Receive material fabrication nesting output by lot and work order, consuming material, measuring yield variance, and costing jobs.",
            ],
            deliver : [
                "Add to inventory based on third party machine bundling output, scanning labels and moving inventory immediately.",
                "Generate bar code labels at part, work order/lot, and serialized levels from the software, guiding inventory through the process.",
            ]
      }
    },


    // // {
    // //     moduleName : "",
    // //     moduleSlug : "",
    // //     modulePreview : "",
    // //     moduleStageDescriptions : {
    // //         initiate : [
                
    // //         ],
    // //         progress : [
                
    // //         ],
    // //         deliver : [
                
    // //         ]
    // //   }
    // // },
    
]


