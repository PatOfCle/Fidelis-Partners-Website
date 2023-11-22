import React from 'react'
import './BookDemoBlock.css'
import { Link } from 'react-router-dom'

function BookDemoBlock() {
  return (
    <div className='BookDemoBlock-container'>
        
        <div className="menu-item book-demo-menu-item-button book-demo-block-button">
            <Link to="/contact/book-demo" className='router-link'><li>Book Introduction <span className='double-arrow'>&#xbb;</span></li></Link>

        </div>

        
    </div>
  )
}

export default BookDemoBlock