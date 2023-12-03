import React from 'react'
import './BookDemoBlock.css'
import Link from 'next/link'

function BookDemoBlock() {
  return (
    <div className='BookDemoBlock-container'>
        
        <div className="menu-item book-demo-menu-item-button book-demo-block-button">
            <Link href="/contact/book-introduction" className='router-link'>
              <li>Book Introduction 
                <span className='double-arrow'>&#xbb;</span>
              </li>
            </Link>
        </div>

        
    </div>
  )
}

export default BookDemoBlock