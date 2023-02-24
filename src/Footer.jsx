import React from 'react'
import logo from './images/logo.svg'
import phone from './images/icon-phone.svg'
import mail from './images/icon-email.svg'
import fb from './images/icon-facebook.svg'
import tw from './images/icon-twitter.svg'
import ig from './images/icon-instagram.svg'

export const Footer = () => {
  return (
    <footer>
        <img src={logo} alt="logo image" />

        <div className='footer-sections'>
            <div className='contact'>
                <img src={phone} alt="phone icon" />
                <p>Phone: +1-543-123-4567</p>
            </div>

            <div className='contact'>
                <img src={mail} alt="mail icon" />
                <p>example@fylo.com</p>
            </div>

            <div className='links'>
                <a href="">About Us</a>
                <a href="">Jobs</a>
                <a href="">Press</a>
                <a href="">Blog</a>
            </div>

            <div className='links'>
                <a href="">Contact Us</a>
                <a href="">Terms</a>
                <a href="">Privacy</a>
            </div>

            <div className='icons'>
                <img src={fb} alt="fb icon" />
                <img src={tw} alt="tw icon" />
                <img src={ig} alt="ig icon" />
            </div>
        </div>
    </footer>
  )
}
