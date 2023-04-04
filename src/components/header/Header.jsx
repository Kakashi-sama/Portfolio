import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>This is</h5>
        <h1>Samrat</h1>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt = "me" />
        </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header