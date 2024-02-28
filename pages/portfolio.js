import React from 'react'
import Link from 'next/link'
const portfolio = () => {
    return (
        <>
            <div className="head-banner">
                <div className="page-info" style={{ background: "url(" + "/imgs/portfolio-banner.png" + ")", backgroundRepeat: 'no-repeat', }}>
                    <h1 className="heading-main">OUR PORTFOLIO</h1>
                    <h4>WELCOME TO THE JOURNEY INTO THE FOURTH INDUSTRIAL REVOLUTION</h4>
                    <Link href="/services" className="subscribe-btn main-btn" >Our Services</Link>
                </div>
            </div>
            <section className="milestones">
                <h1 className="heading">OUR MILESTONES</h1>
                <div className="text-panels">
                    <div className="text-panel" style={{ backgroundColor: "rgb(219, 219, 219)", color: "#141414" }}>

                        <p className="text-panel-desc">Founded in 2013, headquartered in Singapore, <b className='text-panel-desc bold'>over 50 experienced experts across the globe</b></p>
                    </div>

                    <div className="text-panel" style={{ backgroundColor: "#141414", opacity: "50%" }}>
                        <p className="text-panel-desc"><b className='text-panel-desc bold'>USD 500 Million in assets under <br /></b>management, with over 20 portfolio companies</p>
                    </div>
                    <div className="text-panel" style={{ backgroundColor: "#141414", opacity: "80%" }}>
                        <p className="text-panel-desc"><b className='text-panel-desc bold'>USD 15 Billion in capital raising advisory </b>for top-tier tech companies in the past 10 years, with deep connections to 200+ institutional investors in the globe, including PE/VC and family offices</p>
                    </div>
                </div>
            </section>
            <section className="main-portfolio">
                <p className="desc">Our vision is that Generative Artificial Intelligence will be the key driver of the fourth industrial revolution, in synergy with other technologies <br /> such as semiconductors, the internet of things, cloud computing, big data, blockchain, and more. This will result in a radical transformation of <br /> productivity and value creation.</p>
                <div className="company-container">
                    <div className="company">
                        <img src="/imgs/RUNSUN-LOGO-WHITE.png" width="439px" alt="" />
                        <div className="company-info">
                            <h2 className="name">RUNSUN </h2>
                            <p className="company-desc">Train foundation models and LLMs with RunSun Cloud Clusters featuring NVIDIA H100 + 1600 Gbps infiniband.</p>
                            <a href="https://www.runsuncloud.com" className="company-website">https://www.runsuncloud.com</a>
                        </div>
                    </div>
                    <div className="company">
                        <img src="/imgs/MFORCE.png" width="604px" alt="" />
                        <div className="company-info" style={{ position: "relative", right: "40px" }}>
                            <h2 className="name">MARKETINGFORCE  </h2>
                            <p className="company-desc">The World's Leading SaaS Marketing Cloud Platform that provide end-end solutions for your applications needs.</p>
                            <a href="https://www.marketingforce.com" className="company-website">https://www.marketingforce.com</a>
                        </div>
                    </div>
                    <div className="company">
                        <img src="/imgs/ZHIPU.png" width='430px' alt="" />
                        <div className="company-info">
                            <h2 className="name">ZHIPU AI</h2>
                            <p className="company-desc">Build and explore big model solutions with our ecosystem of APIs, fine-tuning tools, and more。</p>
                            <a href="https://www.zhipuai.cn/en/" className="company-website">https://www.zhipuai.cn/en/</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-us">
                <p className=" contact-desc">Join our community of GPU-powered innovators and get comprehensive financial support from our growing team of professionals.</p>
                <Link href="/contact" className="btn" >Contact Us</Link>
            </section>

        </>
    )
}

export default portfolio