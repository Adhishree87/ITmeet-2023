import React from 'react'
import "./Footer.sass"
import data from './data.json'

export default function Footer() {
    return (
        <div className='footer'>
            <footer>
                <div className="container section"
                    data-section="section5"
                    style={{ width: "100 %" }}
                    name="section5"
                    id="section5"
                >
                    <div className="row" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
                        <div
                            className="col-lg-6 col-md-12 wow animate__fadeInUp"
                            data-wow-duration="1s"
                        >
                            <div className="contact-item-left">
                                <i className="fa fa-map-marker"></i>&nbsp;&nbsp;Kathmandu University,
                                Dhulikhel
                            </div>
                            <div className="contact-item-left">
                                <i className="fa fa-phone"></i>&nbsp;&nbsp;{data.kuccPresident} (KUCC President)
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp; {data.itMeetCoordinator} (IT Meet Coordinator)
                            </div>
                            <div className="contact-item-left">
                                <i className="fa fa-envelope"></i>&nbsp;&nbsp;
                                <a href={`mailto:${data.email}?Subject=`}>{data.email}</a>
                            </div>
                            <div className="contact-item-left">
                                <i className="fa fa-globe"></i>&nbsp;&nbsp;<a
                                    href={data.webLink}
                                >{data.webLink}</a
                                >
                            </div>
                        </div>
                        <div
                            className="col-lg-6 col-md-12 wow animate__fadeInUp"
                            data-wow-duration="1s"
                        >
                            <div className="contact-item-right head">Get in Touch</div>
                            <div className="contact-item-right">
                                Don't miss a thing. Receive daily news and updates from our social
                                handles.
                            </div>
                            <div
                                className="socials-icon-container d-flex justify-content-start mt-4"
                            >
                                <a
                                    className="btn btn-outline-warning rounded-circle text-center ml-2 me-3 px-0"
                                    style={{ width: "45px", height: "45px" }}
                                    href={data.twitterLink}
                                ><i style={{ marginTop: "6px" }} className="fa fa-twitter"></i
                                ></a>
                                <a
                                    className="btn btn-outline-warning rounded-circle text-center me-3 px-0"
                                    style={{ width: "45px", height: "45px" }}
                                    href={data.facebookLink}
                                ><i style={{ marginTtop: "6px" }} className="fa fa-facebook"></i
                                ></a>
                                <a
                                    className="btn btn-outline-warning rounded-circle text-center me-3 px-0"
                                    style={{ width: "45px", height: "45px" }}
                                    href={data.linkedinLink}
                                ><i style={{ marginTop: "6px" }} className="fa fa-linkedin"></i
                                ></a>
                                <a
                                    className="btn btn-outline-warning rounded-circle text-center me-3 px-0"
                                    style={{ width: "45px", height: "45px" }}
                                    href={data.instagramLink}
                                ><i style={{ marginTop: "6px" }} className="fa fa-instagram"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-md-12 wow animate__fadeInUp"
                            data-wow-duration="1s"
                            style={{ borderTop: "1px solid white" }}
                        >
                            <p>
                                Copyright  <i className="fa fa-copyright"></i> {data.year}
                                <a href={data.webLink}
                                > Kathmandu University Computer Club. </a
                                >
                                All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
