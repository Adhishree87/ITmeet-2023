import React from "react";

export default function P1() {
  return (
    <>
      <section
        className="section main-banner"
        id="section1"
        data-section="section1"
        name="section1"
      >
        <video autoPlay muted loop id="bg-video" playsInline>
          <source src="assets/images/KU.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay header-text">
          <div className="caption">
            <h2 className="wow animate__fadeInUp" data-wow-duration="1s">
              IT MEET 2023
            </h2>
            <h6 className="wow animate__slideInLeft" data-wow-duration="1s">
              Tech Unleashed, Ideas Ignitied
            </h6>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-12"></div>
            <div
              className="col-lg-4 col-12 wow animate__bounceInUp"
              data-wow-duration="1s"
            >
              <div className="features-post">
                <div className="features-content">
                  <div className="content-show">
                    <h4>
                      <i className="fa fa-map-marker"></i>Kathmandu University
                    </h4>
                  </div>
                  <div className="content-hide">
                    <p>
                      Kathmandu University (KU) is an autonomous,
                      not-for-profit, self-funding public institution
                      established by an Act of Parliament in December 1991. It
                      is an institution of higher learning dedicated to
                      maintaining ...
                    </p>
                    <p className="hidden-sm">
                      Kathmandu University (KU) is an autonomous,
                      not-for-profit, self-funding public institution
                      established by an Act of Parliament in December 1991.
                    </p>
                    <a href="https://ku.edu.np">More Info.</a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-12 wow animate__bounceInUp"
              data-wow-duration="1s"
            >
              <div className="features-post second-features">
                <div className="features-content">
                  <div className="content-show">
                    <h4>
                      <i className="fa fa-calendar"></i>August 13 & 14, 2022
                    </h4>
                  </div>
                  <div className="content-hide">
                    <p>
                      The main event will be on August 12th and 13th. However, a
                      lot of challenges, competitions and pre-events will be
                      organized prior to the main dates.
                    </p>
                    <p className="hidden-sm">
                      The main event will be on August 12th and 13th. However, a
                      lot of challenges, competitions and pre-events will be
                      organized prior to the main dates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
