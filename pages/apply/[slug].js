import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const IdComponent = () => {
    const router = useRouter();
    const [slug, setSlug] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch data when the component mounts or when the slug changes
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/${slug}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
                setData(responseData.data);
            } catch (error) {
                console.error(error);
                // Handle error
            }
        };

        if (slug) {
            fetchData();
        }
    }, [slug]); // This will re-run the effect whenever slug changes

    useEffect(() => {
        // Log the slug and data when they change
        console.log('Slug:', slug);
        console.log('Data:', data);
    }, [slug, data]); // This will re-run the effect whenever slug or data changes

    useEffect(() => {
        // Set the slug state when the component mounts
        setSlug(router.query.slug || '');
    }, [router.query.slug]); // This will re-run the effect whenever router.query.slug changes

    return (
        <>
            <div className="head-banner">
                <div className="page-info banner-res" style={{ background: "url(" + "/imgs/careers-banner.jpg" + ")", backgroundRepeat: 'no-repeat', backgroundSize: "100%", backgroundPosition: "center" }}>
                    <h1 className="heading-main">CAREER PORTAL</h1>
                    <h4>ITS EXCITING WHEN YOU’RE SURROUNDED BY GREAT INDIVIDUALS</h4>

                </div>
            </div>
            <div>
                {data && (
                    <section className="carrers-main">
                        <h1 className='main-heading' style={{ fontSize: "81px" }}>{data.title}</h1>
                        <h2 className="heading start" style={{ marginTop: "25px" }}>Department : </h2> <br />
                        <p className="company-desc" style={{ marginTop: "25px", width: "100%" }}>{data.department}</p>
                        <h2 className="heading start" style={{ marginTop: "25px" }}>Location : </h2> <br />
                        <p className="company-desc" style={{ marginTop: "25px", width: "100%" }} >{data.location}</p>
                        <h2 className="heading start" style={{ marginTop: "25px", width: "100%" }}>Responsibilities : </h2> <br />
                        <p className="company-desc" style={{ opacity: 1, width: "100%" }}>{data.responsibilities}</p>
                        <h2 className="heading start" style={{ marginTop: "25px" }}>Qualifications : </h2> <br />
                        <p className="company-desc" style={{ marginTop: "25px", width: "100%" }}>{data.qualifications}</p>
                        <h2 className="heading start" style={{ marginTop: "25px" }}>How To Apply : </h2> <br />
                        <p className="company-desc" style={{ marginTop: "25px", width: "100%" }}>Please send your resume to <b className="company-desc bold">recruiting@northbeta.com</b>, We look forward to your application!</p>



                    </section>
                )}
            </div>
        </>
    );
};

export default IdComponent;
