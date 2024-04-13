"use client"

import React from 'react'
import TimelineItem from './TimelineItem';
import './Timeline.css'
import { Fade } from 'react-awesome-reveal';

const timelineData = [
    {
        text: 'Fidelis incorporated.',
        date: '2002',
    },
    {
        text: 'Die-Matic Corporation in Cleveland, OH commissions the development of SV software for its stamping business, recognizing that expensive, canned ERP software does not fit its business model.',
        date: '2004',
    },
    {
        text: 'First SV implementation successfully completed at Die-Matic Corporation (still a satisfied client).',
        date: '2005',
    },
    {
        text: 'Fidelis launches its Consulting practice, offering advisory, project management, data analysis, process mapping, software development, and testing services to clients in multiple industries.',
        date: '2008',
    },
    {
        text: 'Fifth SV implementation successfully completed at Welded Ring Products, Cleveland, OH (still a satisfied client).',
        date: '2010',
    },
    {
        text: 'Fidelis designs, develops, and implements an Enterprise Data Warehouse at Garland Industries, Cleveland, OH (still a satisfied client), integrating and delivering data from many systems to drive company-wide reporting, sales force mobilization, and data sharing.',
        date: '2011',
    },
    {
        text: 'Fidelis’ first foray into Machine Integration, Basic Aluminum in Cleveland, OH connects all of its manufacturing equipment – die casting and trim presses – to SV to present real-time dashboard reporting of plant floor activity.',
        date: '2014',
    },
    {
        text: 'Fidelis purchases, renovates and moves into modern office space in Euclid, Ohio, as business growth requires a place for employee and client collaboration.',
        date: '2015',
    },
    {
        text: 'Tenth SV implementation successfully completed at Alacriant, Streetsboro, OH (still a satisfied client).',
        date: '2017',
    },
    {
        text: 'Fidelis makes a major financial commitment to its Business Intelligence services, largely around Microsoft Power BI.',
        date: '2019',
    },
    {
        text: 'SV versatility and extensibility demonstrated with successful implementations to mobile and portal applications. Earthwalk Orthotics, Massillon, OH, connects SV with its iPad software used by podiatrists to submit orthotic shoe orders. IMETCO, Norcross, GA, connects SV with its high-end quoting software used in the field to quote large metal roofing jobs.',
        date: '2021',
    },
    {
        text: 'Next generation of family joins the Fidelis team, assuring continued growth and scalability going forward.',
        date: '2022',
    },
    {
        text: '25th SV implementation successfully completed at Applied Engineered Surfaces, Elyria, OH.',
        date: '2023',
    },
];

const Timeline = () =>

    timelineData.length > 0 && (
        <Fade delay={1200} triggerOnce>

            <div className="timeline-container">
                    {timelineData.map((data, idx) => (
                        <TimelineItem data={data} key={idx} />
                    ))}
            </div>
        </Fade>

    );

export default Timeline
