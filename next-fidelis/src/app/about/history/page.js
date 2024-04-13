import './HistoryPage.css'
import Timeline from './Timeline';

export const metadata = {
  title: 'History',
  description: 'Fidelis has a history rich with solving problems for our clients. ',
}

function History() {

  return (
    <div className='history-container'>      
      <div className='history-intro-outer-container'>
          <div className='history-intro-container'>
              <h1>
                  Our History
              </h1>
              <div>
                  The Fidelis Team has a record rich with solving challenges for our clients. 
                  <br></br>
                  Take a glimpse at our story.
              </div>
          </div>
      </div>

      <Timeline />

    </div>
  )
}

export default History