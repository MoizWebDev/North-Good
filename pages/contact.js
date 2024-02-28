import Link from 'next/link'
import React from 'react'
const contact = () => {
  return (
    <>
      <div className="head-banner">
        <div className="page-info" style={{ background: "url(" + "/imgs/contact-banner.jpg" + ")", backgroundRepeat: 'no-repeat', backgroundPosition: "center", }}>
          <h1 className="heading-main">CONTACT US </h1>
          <h4>WE WOULD LOVE TO HEAR FROM OUR PARTNERS & FRIENDS</h4>
          <Link href="/services" className="subscribe-btn main-btn" >Our Services</Link>
        </div>
      </div>
      <section className="contact-infos">
        <div className="info">
          <h2 className='heading'>Talent Recruitment</h2>
          <p className='mail'>careers@northbeta.com</p>
        </div>
        <div className="info">
          <h2 className='heading'>Media Cooperation </h2>
          <p className='mail'>public-relations@northbeta.com</p>
        </div>
        <div className="info">
          <h2 className='heading'>Business Cooperation  </h2>
          <p className='mail'>business@northbeta.com</p>
        </div>
        <div className="info">
          <h2 className='heading'>BP Pitch</h2>
          <p className='mail'>BP@northbeta.com</p>
        </div>
      </section>

    </>
  )
}

export default contact