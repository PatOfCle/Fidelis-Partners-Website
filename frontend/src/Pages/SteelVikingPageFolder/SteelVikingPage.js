import React, { useEffect, useRef } from 'react'
import './SteelVikingPage.css'
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {Fade} from 'react-awesome-reveal';


function SteelVikingPage() {
  const location = useLocation();
  useEffect(() => {
    console.log(location)
  }, [])

  const scrollToWithOffset = (id, offset) => () => {
    const element = document.getElementById(id);
    const yOffset = offset || 0;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };


  return (
    <div className='SteelVikingPage-container'>

      <div className='software-fit-processes'>
              <h2>
                <Fade direction='left' triggerOnce duration={1300}><span>Your ERP system should fit your processes. </span></Fade>
                <br></br>
                <Fade direction='right' triggerOnce duration={1300} delay={1900}><span>Not vice versa. </span></Fade>
              </h2>
      </div>


      <div className='erp-page-navbox'>
        <h2>
          On This Page
        </h2>

        <div className='erp-page-navbox-options'>
          <ul>
          <li><HashLink to="#highlightedModules" smooth={true} duration={500} scroll={scrollToWithOffset('highlightedModules', -100)} offset={300}>Highlighted Modules</HashLink>
            <ul>
              <li><HashLink to="#quoting" smooth={true} duration={500} scroll={scrollToWithOffset('quoting', -100)} offset={300}>Quoting</HashLink></li>
              <li><HashLink to="#engineerToOrder" smooth={true} duration={500} scroll={scrollToWithOffset('engineerToOrder', -100)} offset={300}>Engineer to Order</HashLink></li>
              <li><HashLink to="#salesOrders" smooth={true} duration={500} scroll={scrollToWithOffset('salesOrders', -100)} offset={300}>Sales Orders</HashLink></li>
              <li><HashLink to="#scheduling" smooth={true} duration={500} scroll={scrollToWithOffset('scheduling', -100)} offset={300}>Scheduling</HashLink></li>
              <li><HashLink to="#purchasingAndReceiving" smooth={true} duration={500} scroll={scrollToWithOffset('purchasingAndReceiving', -100)} offset={300}>Purchasing and Receiving</HashLink></li>
              <li><HashLink to="#mrpInventory" smooth={true} duration={500} scroll={scrollToWithOffset('mrpInventory', -100)} offset={300}>MRP, Inventory</HashLink></li>
              <li><HashLink to="#production" smooth={true} duration={500} scroll={scrollToWithOffset('production', -100)} offset={300}>Production</HashLink></li>
              <li><HashLink to="#shippingAndInvoicing" smooth={true} duration={500} scroll={scrollToWithOffset('shippingAndInvoicing', -100)} offset={300}>Shipping and Invoicing</HashLink></li>
              {/* <li>Plant Floor Maintenance</li> */}
              <li><HashLink to="#" smooth={true} duration={500} scroll={scrollToWithOffset('timeAndAttendance', -100)} offset={300}>Time and Attendance</HashLink></li>
              {/* <li>GL Integration</li> */}
              {/* <li>Tooling</li> */}
              {/* <li>Workflows</li> */}
              {/* <li>Costing</li> */}
              <li><HashLink to="#" smooth={true} duration={500} scroll={scrollToWithOffset('additionalCustomFeaturesAndIntegrations', -100)} offset={300}>Additional Features and Integrations</HashLink></li>
              {/* <li>CRM Integration</li> */}
            </ul>
          </li>
          <li><HashLink to="#" smooth={true} duration={500} scroll={scrollToWithOffset('caseStudies', -100)} offset={300}>Case Studies</HashLink></li>
          <li><HashLink to="#" smooth={true} duration={500} scroll={scrollToWithOffset('compare', -100)} offset={300}>Compare</HashLink></li>
          </ul>
        </div>

      </div>

      <Fade direction='up' triggerOnce duration={1000} delay={2700}> 
      <div className='erp-page-content'>
        

      {/* <section ref={sectionRefs.section1}> */}
      <section id='highlightedModules'>
          <h1 className='section-header' style={{fontSize: '40px', paddingTop: '50px', paddingBottom: '30px'}}>
            Highlighted Modules
          </h1>


          <section id='quoting'>
            <h3>Quoting</h3>
            <h4> <em> Uses company's preferred Excel-based quoting and integrates within the workflow, sharing data bi-directionally. </em> </h4>
            <div>
              <ul className="checklist">
                <li>Quote Approvals with "Inbox" Processing</li>
                <li>Configurable Pricing Formulas</li>
                <li>Electronic customer touch points, including formal quote and no quote</li>
                <li>Carry forward to item setup for awarded quotes</li>
                <li>Quote vs. actual cost comparisons</li>
              </ul>
            </div>

          </section>

          <section id='engineerToOrder'>
            <h3>Engineer to Order</h3>
            <h4> <em> Supports many variations of item and tool set up. </em> </h4>

            <div>
              <ul className="checklist">
                <li>Flexible, Multi-Tiered Pricing Structures</li>
                <li>Standard and alternate part routings</li>
                <li>Bills of Materials, Multi-Level BOM</li>
                <li>Kitting</li>
              </ul>
            </div>
          </section>

          <section id='salesOrders'>
            <h3>Sales Orders</h3>
            <h4> <em> Emphasizes efficient order entry, with data controls to ensure accuracy. </em> </h4>

            <div>
              <ul className="checklist">
                <li>Quote to order and order to order copy</li>
                <li>EDI and web portal integration</li>
                <li>Make to stock or order</li>
                <li>Electronic order confirmations</li>
              </ul>
            </div>
          </section>

          <section id='scheduling'>
            <h3>Scheduling</h3>
            <h4> <em>Various scheduling tools to fit an organization. </em> </h4>

            <div>
              <ul className="checklist">
              <li>Excel extract and import</li>
              <li>Capacity planning</li>
              <li>Workcenter-job "drag and drop", replacing plant floor whiteboards</li>
              <li>Dashboards with display of "next" scheduled shop order for clock in</li>
              </ul>
            </div>
          </section>

          <section id='purchasingAndReceiving'>
            <h3>Purchasing and Receiving</h3>
            <h4> <em>Supports all types fo raw material, outside process, miscellaneous purchases. </em> </h4>

            <div>
              <ul className="checklist">
                <li>Bar coded material receipts</li>
                <li>RFQ and final PO electronic processing</li>
                <li>PO approvals based on types, value, department</li>
                <li>Lot level material traceability and labeling</li>
                <li>Receipt notification</li>
                <li>Material certification linkages</li>
                <li>Payables link to POs and receipts</li>
              </ul>
            </div>
          </section>

          {/* <section >
            <h3>MRP, Inventory</h3>
            <h4> <em></em> </h4>
            
            <div>
              <ul className="checklist">
                <li></li>
              </ul>
            </div>
          </section> */}

          <section id='production'>
            <h3>Production</h3>
            <h4> <em>End-to-end production planning and execution.</em> </h4>

            <div>
              <ul className="checklist">
                <li>Secured plant floor capture with bar coding for job clocking and material issuance</li>
                <li>Outside process shippers and receivers with lot control</li>
                <li>Numerous edits and controls for data quality</li>
                <li>Custom floor paperwork: Work orders, routers, material labels, inspection documents</li>
                <li>Performance reports for productivity, scrap, yield and schedule tracking</li>
              </ul>
            </div>
          </section>

          <section id='shippingAndInvoicing'>
            <h3>Shipping and Invoicing</h3>
            <h4> <em>Standard and distinctive shipping & invoicing functions to always know what is where and when.</em> </h4>

            <div>
              <ul className="checklist">
                <li>Pending shippers for advanced paperwork prep</li>
                <li>Multiple document types: Bill of landing, packing list, material cert, customs invoice, SED, skid tag</li>
                <li>Warehouse consignment pull downloads</li>
                <li>Option for Electronic Invoicing</li>
                <li>Location level tracking</li>
                <li>Logistics planning</li>
              </ul>
            </div>
          </section>

          {/* <section >
            <h3>Plant Floor Maintenance</h3>
            <h4> <em></em> </h4>

            <div>
              <ul className="checklist">
                <li></li>
              </ul>
            </div>
          </section> */}

          <section id='timeAndAttendance'>
            <h3>Time and Attendance</h3>
            <h4> <em></em> </h4>

            <div>
              <ul className="checklist">
                <li></li>
              </ul>
            </div>
          </section>

          {/* <section >
            <h3>GL Integration</h3>
            <h4> <em></em> </h4>

            <div>
              <ul className="checklist">
                <li></li>
              </ul>
            </div>
          </section> */}

          {/* <section >
            <h3>Tooling</h3>
            <h4> <em></em> </h4>

            <div>
              <ul className="checklist">
                <li></li>
              </ul>
            </div>
          </section> */}

          {/* <section >
            <h3>Workflows</h3>
            <h4> <em></em> </h4>

            <div>
              <ul className="checklist">
                <li></li>
              </ul>
            </div>
          </section> */}

          {/* <section >
            <h3>Costing</h3>
            <h4> <em></em> </h4>

            <div>
              <ul className="checklist">
                <li></li>
              </ul>
            </div>
          </section> */}

          {/* <section >
            <h3>CRM Integration</h3>
            <h4> <em></em> </h4>

            <div>
              <ul className="checklist">
                <li></li>
              </ul>
            </div>
          </section> */}

          <section id='additionalCustomFeaturesAndIntegrations'>
            <h3>Additional Custom Features and Integrations</h3>
            <h4> <em></em> </h4>

            <div>
              <ul className="checklist">
                <li></li>
              </ul>
            </div>
          </section>


        </section>


        {/* <section ref={sectionRefs.section2}>
          
        </section> */}
        
        <section id='caseStudies'>
          <h1 className='section-header' style={{fontSize: '40px', paddingTop: '50px', paddingBottom: '30px'}}>
            Case Studies
          </h1>
        </section>

        <section id='compare'>
          <h1 className='section-header' style={{fontSize: '40px', paddingTop: '50px', paddingBottom: '30px'}}>
            Compare
          </h1>
        </section>


      </div>

      </Fade>

    </div>
  )
}

export default SteelVikingPage