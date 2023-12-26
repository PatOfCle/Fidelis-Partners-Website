export const svModules = [
    {
        //moduleName is the title of the module how you want it displayed
        moduleName : "Quoting",
        // moduleName : "Quoting1",

        // whereas moduleSlug is the moduleName, but with the words all lowercase and spaces replaced with -'s
        // moduleSlug is used to drive the URL
        moduleSlug : "quoting",
        // moduleSlug : "quoting1",

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
        moduleName : "MRP",
        moduleSlug : "mrp",        
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
        moduleName : "Order Management",
        moduleSlug : "order-management",
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
        moduleName : "Purchasing",
        moduleSlug : "purchasing",
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
        moduleName : "Production",
        moduleSlug : "production",
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
        moduleName : "Scheduling",
        moduleSlug : "scheduling",        
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
        moduleName : "Inventory",
        moduleSlug : "inventory",
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


    // {
    //     moduleName : "",
    //     moduleSlug : "",
    //     modulePreview : "",
    //     moduleStageDescriptions : {
    //         initiate : [
                
    //         ],
    //         progress : [
                
    //         ],
    //         deliver : [
                
    //         ]
    //   }
    // },


]