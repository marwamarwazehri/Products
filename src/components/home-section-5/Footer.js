import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
       <h1>Newsletter</h1>
       <form>
              <input type='email' placeholder='your@gmail.com'/>
              <button>Subscribe</button>
       </form>

       <div className='links'>
              <a href="#">About</a>
              <a href="#">Store Locator</a>
              <a href="#">FAQS</a>
              <a href="#">News</a>
              <a href="#">Careers</a>
              <a href="#">Contact Us</a>
       </div>
      
    </div>
  )
}

export default Footer
