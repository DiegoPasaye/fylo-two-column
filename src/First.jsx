import React from 'react'
import first from './images/illustration-1.svg'
import second from './images/illustration-2.svg'
import arrow from './images/icon-arrow.svg'
import profile from './images/avatar-testimonial.jpg'

export const First = () => {
  return (
    <section>
        <div className='first-container'>
            <div className='first-container-text'>
                <h1>All your files in one secure location, accessible anywhere.</h1>
                <p>Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
                <div>
                    <input type="email" name="inp" placeholder='name@mail.com' />
                    <button>Get Started</button>
                </div>
            </div>

            <img src={first} alt="folder illustration" />
        </div>

        <div className='second-container'>
            <div className='second-container-text'>
                <h1>Stay productive, wherever you are</h1>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
                <div className='how-work'>
                    <span>See how Fylo works</span>
                    <img src={arrow} alt="arrow icon" />
                </div>

                <div className='testimonial'>
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <div>
                        <img src={profile} alt="kyle image" />
                        <div>
                            <p>Kyle Burton</p>
                            <span>Founder & CEO, Huddle</span>
                        </div>
                    </div>
                </div>
            </div>

            <img src={second} alt="team image" />
        </div>
    </section>
  )
}
