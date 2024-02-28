import React from 'react'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer>
            <div className="footer-content main-footer-content">
                <div className="logo-footer">
                    <img src="/imgs/logo.png" width="250px" id='footer-logo' alt="" />
                </div>
                <h2 id='footer-main'>LEVERAGING GENERATIVE AI TO SCALE SUCCESS</h2>
                <p id='footer-strt-copy'>Copyright © 2022 Northbeta Capital / 京 ICP No. 14062306</p>
            </div>
            <div className="footer-content">
                <h4 className="footer-heading">INVESTMENTS </h4>
                <div className="footer-links-cont">
                    <Link href="/portfolio" className='footer-links'>OUR PORTFOLIO</Link>
                </div>
                <h4 className="footer-heading">JOIN US</h4>
                <div className="footer-links-cont">
                    <Link href="/careers" className='footer-links'>CAREERS & CULTURE</Link>
                </div>

            </div>
            <div className="footer-content">
                <h4 className="footer-heading">COMPANY </h4>
                <div className="footer-links-cont links-cont-footer">
                    <Link href="/portfolio" className='footer-links other-links'>ABOUT US</Link>
                </div>
                <br />
                <div className="footer-links-cont links-cont-footer">
                    <Link href="/services" className='footer-links'>SERVICES</Link>
                </div>
            </div>
            <div className="footer-content">
                <h4 className="footer-heading">CARRERS </h4>
                <div className="footer-links-cont links-cont-footer">
                    <Link href="" className='footer-links other-links'>TERMS OF SERVICE</Link>
                </div>
                <br />
                <div className="footer-links-cont links-cont-footer">
                    <Link href="" className='footer-links'>PRIVACY POLICY</Link>
                </div>
            </div>
            <div className="footer-content">
                <h4 className="footer-heading">NEWSLETTER </h4>
                <p className='footer-links'>SUBSCRIBE & GET THE LATEST NEWS</p>
                <form action="">
                    <input type="email" id='footer-email' placeholder='ENTER YOUR EMAIL' />
                    <br />
                    <button className='subscribe-btn'>SUBSCRIBE</button>
                </form>
                <p id='footer-end-copy'>Copyright © 2022 Northbeta Capital / 京 ICP No. 14062306</p>
            </div>


        </footer>
    )
}

export default Footer