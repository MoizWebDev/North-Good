import React, { useEffect, useState } from 'react'
import Link from 'next/link'
const carreers = () => {
    const [positions, setpositions] = useState([])
    useEffect(() => {
        try {
            fetch('http://localhost:3000/api/position').then((res) => {
                return res.json()
            }).then((res) => {
                setpositions(res.data)
                console.log(res.data)
            })
        } catch (error) {
            setpositions(["failed to fetch"])
        }

    }, [])


    return (
        <>
            <div className="head-banner">
                <div className="page-info banner-res" style={{ background: "url(" + "/imgs/carrersmain-banner.jpg" + ")", backgroundRepeat: 'no-repeat', backgroundSize: "100%", backgroundPosition: "center" }}>
                    <h1 className="heading-main">PEOPLE AND CULTURE</h1>
                    <h4>EXCITING WHEN YOU’RE SURROUNDED BY GREAT INDIVIDUALS</h4>

                </div>
            </div>
            <section className="carrers-main">
                <div className="carrers-first-row">
                    <h1 className="heading" style={{ textAlign: "start" }}>Our Vision</h1>
                    <p className="company-desc study" style={{ margin: "0px" }}>We believe that capital is more than just money. It’s a tool to create products that change the world and technologies that push the boundaries of what’s possible. It’s a way to connect and collaborate with builders, founders, and investors who share our passion and ambition. It’s a means to achieve our dreams and make a lasting difference.</p>
                </div>
                <div className="carrers-second-row carrers-row">
                    <h1 className="heading" style={{ textAlign: "start" }}>Our VALUES</h1>
                    <p className="company-desc study" style={{ margin: "0px" }}>We are guided by these core values in everything we do:</p>
                    <div className="carrer-value-container">
                        <div className="carrers-values">
                            <h2 className="heading">IMPACT</h2>
                            <p className="company-desc study" style={{ margin: "0px" }}>We aim to create positive and meaningful impact for our clients, partners, and society. We measure our success by the value we deliver and the difference we make.</p>
                        </div>
                        <div className="carrers-values" style={{ background: "url(" + "/imgs/innovation.jpg" + ")", backgroundRepeat: 'no-repeat', backgroundSize: "100%", backgroundPosition: "center" }}>
                            <h2 className="heading">INNOVATION</h2>
                            <p className="company-desc study" style={{ margin: "0px" }}>We embrace change and challenge the status quo. We are always looking for new ways to improve and grow.</p>
                        </div>
                    </div>
                    <div className="carrer-value-container">
                        <div className="carrers-values" style={{ background: "url(" + "/imgs/excellence.jpg" + ")", backgroundRepeat: 'no-repeat', backgroundSize: "100%", backgroundPosition: "center" }}>
                            <h2 className="heading">EXCELLENCE</h2>
                            <p className="company-desc study" style={{ margin: "0px" }}>We strive for the highest standards of quality and performance. We are not afraid to take risks and learn from our mistakes.</p>
                        </div>
                        <div className="carrers-values" style={{ background: "url(" + "/imgs/collaboration.jpg" + ")", backgroundRepeat: 'no-repeat', backgroundSize: "100%", backgroundPosition: "center" }}>
                            <h2 className="heading">COLLABORATION</h2>
                            <p className="company-desc study" style={{ margin: "0px" }}>We work as a team and support each other. We value diversity and inclusion and respect different perspectives and backgrounds.</p>
                        </div>
                    </div>
                </div>
                <div className="carrers-third-row carrers-row">
                    <h1 className="heading" style={{ textAlign: "start" }}>Our Culture</h1>
                    <div className="text-panels four-panels">
                        <div className="text-panel between" style={{ backgroundColor: "rgb(45, 44, 102)", color: "white" }}>
                            <h2 className="heading" style={{ textAlign: "start" }}>Growth:</h2>
                            <b className='text-panel-desc bold'>We provide a nurturing environment where you can flourish and reach your full potential. We offer mentorship, training, feedback, and opportunities for learning and development.</b>
                        </div>
                        <div className="text-panel between" style={{ backgroundColor: "#676692", color: "#fff" }}>
                            <h2 className="heading" style={{ textAlign: "start" }}>Flexibility:</h2>
                            <b className='text-panel-desc bold'>We offer a flexible and remote-friendly work environment where you can work the way you want, when you want, and where you want. We respect your work-life balance and personal preferences.</b>
                        </div>

                        <div className="text-panel between" style={{ backgroundColor: "#9999b6", color: "black" }}>
                            <h2 className="heading" style={{ textAlign: "start" }}>Wellness: </h2>
                            <b className='text-panel-desc bold'>We care about your well-being and happiness. We offer a range of perks and benefits, such as competitive compensation, equity, health insurance, retirement plan, paid time off, and more.</b>
                        </div>
                        <div className="text-panel between" style={{ backgroundColor: "#ccccda", color: "#000" }}>
                            <h2 className="heading" style={{ textAlign: "start" }}>FUN: </h2>
                            <b className='text-panel-desc bold'>We enjoy what we do and have fun along the way. We celebrate our achievements and milestones, and we have social events and activities to connect and bond with each other. </b>
                        </div>
                    </div>
                </div>
                <div className="carrers-fourth-row carrers-row">
                    <h1 className="heading" style={{ textAlign: "start", borderBottom: "1px solid #e6e6e6", paddingBottom: "50px" }}>OPEN POSITIONS</h1>
                    <div className="positions-container">
                        {positions.map((elem) => (
                            <div className="open-position" key={elem._id}>
                                <div className="first-column">
                                    <h2 className="title">{elem.title}</h2>
                                    <p className="company-desc">
                                        <b className="bold company-desc">DEPARTMENT: {elem.department}</b>
                                    </p>
                                    <p className="company-desc">
                                        <b className="bold company-desc">LOCATION: {elem.location}</b>
                                    </p>
                                    <p className="company-desc summary">
                                        <b className="bold company-desc">JOB SUMMARY:</b> <br />
                                        {elem.summary}
                                    </p>
                                </div>
                                <Link href={`/apply/${elem._id}`} className="subscribe-btn main-btn" style={{ width: "329px", height: "90px", fontSize: "30px", borderRadius: "25px" }}>
                                    APPLY NOW
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default carreers