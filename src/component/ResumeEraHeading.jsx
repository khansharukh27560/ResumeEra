import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import best_logo from '../image/best_logo.webp';
import '../css/resumeeraheading.css';

function ResumeEraHeading({ title, publishDate }) {
    const calculateDaysAgo = (publishDate) => {
        const publishDateObj = new Date(publishDate);
        const today = new Date();
        const diffTime = today - publishDateObj;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };
const daysAgo = publishDate ? calculateDaysAgo(publishDate) : 0;
    return (
        <div className="big">
            <div className="ResumeEraHeading">
                <div className='heading-div'>
                      <h1 >{title ? title : "wait..."}</h1>
                    <p className="Link">
                        <Link
                            style={{
                                fontSize: '1.3rem',
                                color: 'white',
                                border: '1px solid white',
                                borderRadius: '25px',
                                padding: '15px',
                                backgroundColor: 'salmon'
                            }}
                            to="/template"
                        >
                            Create Free Resume
                        </Link>
                    </p>
                </div>
            </div>
            <div className="author-details " style={{}}>
                
                    <div className="dateAuthor">
                        <img
                            src={best_logo}
                            alt="ResumeEra Logo"
                            className="author-logo"
                            width="80"
                            height="100%"
                            style={{ objectFit: 'cover', borderRadius: '5%' }}
                            // LCP image, so no loading="lazy"
                            fetchpriority="high" // Chrome supports this for LCP images
                        />
                    </div>
                    <div className="middle" style={{}}>
                        <span className="author-highlight">✍️ SHARUKH KHAN</span>
                        <br />
                        <span className="author-highlight" style={{ fontSize: '.8rem', marginTop: '', textAlign: 'center' }}>Career Expert</span>
                        <br />
                        <span>
                            <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-be67f9aa-a7e6-4f23-9f0a-82d219b9085b.pdf">
                                <i className="fa-solid fa-link" style={{ color: 'red' }}></i>Certificate Link</a>
                        </span>
                        <br />
                        <span className="author-highlight">⏱️{publishDate} ({daysAgo} days ago) </span>
                        <br />
                        <span className="author-highlight" >8 min read</span>
                        <br />
                        <span className="author-highlight" >Reviewer:- ResumeEra Team</span>
                    </div>
                

                <div className='aboutresumeerateam'>
                    <h4  style={{}}>About ResumeEra Team:</h4>
                    <br />
                    <p  style={{ textAlign:'justify'}}>
                        We are a dedicated team of career experts helping professionals create standout resumes and enhance their career journey.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default memo(ResumeEraHeading);
