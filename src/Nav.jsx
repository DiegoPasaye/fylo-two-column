import React from 'react'
import logo from './images/logo.svg'
import './styles.css'

export const Nav = () => {
  return (
    <nav>
        <img src={logo} alt="logo image" />
        <div>
            <a href="">Features</a>
            <a href="">Team</a>
            <a href="">Sign In</a>
        </div>
    </nav>
  )
}
