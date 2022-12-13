// * NOT WORKING IMAGE NOT LOADING FOR PAYMENTS IN THE FOOTER

import React from 'react'
import './Footer.scss'

import payment from '../../assets/payment.png';

const Footer = () => {
  return (
    <div className='footer'>

      <div className='top'>

        <div className='item'>
          <h1> Categories</h1>
          <span>Courses</span>
          <span>Tutoring</span>
          <span>Services</span>
        </div>

        <div className='item'>
          <h1> Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Cookies</span>
        </div>

        <div className='item'>
          <h1> About</h1>
          <span>The company is a team of one. Kevin Espina works hard to deliver top quality products & services</span>
        </div>

        <div className='item'>
          <h1> Contact</h1>
          <span>The company is a team of one. Kevin Espina works hard to deliver top quality products & services</span>
        </div>

      </div>

      <div className='bottom'>

        <div className='left'>
          <span className='logo'>Kevin's Store</span>
          <span className='copyright'>© 2022 Kevin Espina. All rights reserved.</span>
        </div>

        <div className='right'>
          <img src={payment} alt='payment method' />
        {/* * NOT WORKING */}
        </div>

      </div>
    </div>
  )
}

export default Footer