import Link from 'next/link'
import React from 'react'
const services = () => {
    return (
        <>
            <div className="head-banner">
                <div className="page-info banner-res" style={{ background: "url(" + "/imgs/services-banner.jpg" + ")", backgroundRepeat: 'no-repeat', backgroundSize: "100%", }}>
                    <h1 className="heading-main">OUR PROFESSIONAL SERVICES </h1>
                    <h4>TECH COMMUNITY SUPPORT | INVESTMENT BANKING | INVESTMENT MANAGEMENT</h4>
                    <Link href="/contact" className="subscribe-btn main-btn" >CONTACT US</Link>
                </div>
            </div>
            <section className="investment-management">
                <h1 className="heading">INVESTMENT MANAGEMENT</h1>
                <p className="investment-desc">We have USD 500 Million in assets under management, with over 20 portfolio companies across various sectors and stages. We also provide capital raising advisory for top-tier tech companies, having raised over USD 15 Billion in the past 10 years. Our extensive network of 200+ institutional investors worldwide, including PE/VC and family offices, enables us to access the best opportunities and deliver the best outcomes for our clients.</p>
                <img src="/imgs/contact-banner.jpg" width="100%" alt="" className="investment-img" />
            </section>
            <section className="investment-banking">
                <h1 className="heading">INVESTMENT BANKING</h1>
                <div className="text-panels">

                    <img src="/imgs/Equity-Financing.jpg" width="600px" className='services-imgs' alt="" />
                    <img src="/imgs/share-acquisitions.jpg" width="600px" className='services-imgs' alt="" />
                </div>
                <div className="text-panels">
                    <img src="/imgs/MANDA ADVISORY.jpg" width="600px" className='services-imgs' alt="" />
                    <img src="/imgs/OVERSEA LISTING.jpg" width="600px" className='services-imgs' alt="" />
                </div>
            </section>
            <section className="tech-community">
                <h1 className="heading">DIGITAL TECHNOLOGY COMMUNITY</h1>
                <div className="tech-comm-cont">
                    <div className="left-column">
                        <p className="tech-desc">North Beta Labs is a platform and community of Generative AI founders, investors, builders and researchers that aims to accelerate humanity’s transition to AGI in a responsible and ethical manner. Innovate, Invest, and Accelerate with North Beta Labs.</p>
                        <Link href="/portfolio" className="subscribe-btn main-btn" style={{ width: "389px", height: "97px", fontSize: "50px" }}>LEARN MORE</Link>
                    </div>

                    <img src="/imgs/tech-com.jpg" width="639px" alt="" />
                </div>
            </section>
        </>
    )
}

export default services