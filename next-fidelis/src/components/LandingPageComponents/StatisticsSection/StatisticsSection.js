import React from 'react'
import './StatisticsSection.css'
import CountUp from 'react-countup'

function StatisticsSection() {
  return (
    <div className='StatisticsSectionHomepage-container'>

{/* <CountUp start={0} end={1000} duration={2} separator="," decimal="." decimals={2} prefix="$" suffix=" USD" /> */}
{/* <CountUp start={0} end={100} /> */}


        <div className='stat-container'>
            <div className='spotlight-stat' style={{fontSize: '8vw', color: 'rgb(11, 136, 0)', fontWeight: 'lighter'}}>
                <CountUp 
                    start={0} 
                    end={100} 
                    suffix="%" 
                    // enableScrollSpy 
                    scrollSpyDelay={1000} 
                    scrollSpyOnce 
                />
            </div>
            <div className='stat-description'>
                Implementation Success and Retention Rate
            </div>
        </div>
        <div className='stat-container' style={{borderLeft: 'solid', borderColor: 'lightgrey'}}>
            <div className='spotlight-stat' style={{fontSize: '8vw', color: 'rgb(11, 136, 0)'}}>
                {/* 17% */}
                <CountUp 
                    start={0} 
                    end={14} 
                    suffix="%" 
                    // enableScrollSpy 
                    scrollSpyDelay={1000} 
                    scrollSpyOnce 
                    duration={2}
                />
            </div>
            <div className='stat-description'>
                Average Annual Revenue Increase for Companies Using Steel Viking
            </div>
        </div>
        <div className='stat-container' style={{borderLeft: 'solid', borderColor: 'lightgrey'}}>
        <div className='spotlight-stat' style={{fontSize: '8vw', color: 'rgb(11, 136, 0)'}}>
                {/* 23 */}
                <CountUp 
                    start={0} 
                    end={(new Date().getFullYear())-2001} 
                    suffix="" 
                    // enableScrollSpy 
                    scrollSpyDelay={1000} 
                    scrollSpyOnce 
                    duration={2.5}
                />

            </div>
            <div className='stat-description'>
                Years of Delivering Results
            </div>
        </div>
        
    </div>
  )
}

export default StatisticsSection