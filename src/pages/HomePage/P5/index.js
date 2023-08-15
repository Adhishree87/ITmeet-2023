import React from "react";

export default function P5() {
  return (
    <>
      <section
        className="section sponsors"
        data-section="section4"
        name="section4"
        id="section4"
      >
        <h4 className="wow animate__fadeInUp" data-wow-duration="1s">
          Our Sponsors
        </h4>
        <div className="sponsor-us">
          <h3>Interested in Sponsoring?</h3>
          <p>Email us at</p>
          <i style={{ color: "white" }} className="fa fa-envelope"></i>
          &nbsp;&nbsp;
          <a href="mailto:kucc@ku.edu.np?Subject=">kucc@ku.edu.np</a>
        </div>
        <div className="row align-items-center">
          <div className="col-12">
            <h5
              className="text-center text-uppercase text-white text-underline sponsor-title wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              Gold Sponsors
            </h5>
            <div
              className="our-sponsor-area d-flex justify-content-center flex-wrap wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <div className="single-sponsor mb-50">
                <a href="http://nta.gov.np">
                  <img
                    className="img-fluid"
                    src="assets/images/sponsers/nta.png"
                    alt="NTA"
                  />
                </a>
              </div>
              <div className="single-sponsor mb-50">
                <a href="http://yomari.com.np">
                  <img
                    className="img-fluid"
                    src="assets/images/sponsers/yomari.png"
                    alt="Yomari"
                  />
                </a>
              </div>
              <div className="single-sponsor mb-50">
                <a href="https://www.lftechnology.com/">
                  <img
                    className="img-fluid"
                    src="assets/images/sponsers/leapfrog.png"
                    alt="Leapfrog"
                  />
                </a>
              </div>
              <div className="single-sponsor mb-50">
                <a href="http://fusemachines.com">
                  <img
                    className="img-fluid"
                    src="assets/images/sponsers/fuseai.png"
                    alt="FuseMachines Nepal"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-12">
            <h5
              className="text-center text-uppercase text-white text-underline sponsor-title wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              Event Sponsors
            </h5>
            <div
              className="our-sponsor-area d-flex justify-content-center flex-wrap wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <div className="single-sponsor mb-50 wow animate__fadeInUp">
                <a href="https://www.innovatetech.io/">
                  <img
                    className="img-fluid"
                    src="assets/images/sponsers/innovatetech.png"
                    alt="Innovate Tech"
                  />
                </a>
              </div>
              <div className="single-sponsor mb-50 wow animate__fadeInUp">
                <a href="https://www.braindigit.com/">
                  <img
                    className="img-fluid"
                    src="assets/images/sponsers/braindigit.png"
                    alt="BrainDigit"
                  />
                </a>
              </div>
              <div className="single-sponsor mb-50 wow animate__fadeInUp">
                <a href="https://www.machbank.com/">
                  <img
                    className="img-fluid"
                    src="assets/images/sponsers/machhapuchhre.png"
                    alt="MACHBANK"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row supporters align-items-center justify-content-center">
          <div className="col">
            <h5
              className="text-left text-uppercase text-white text-underline sponsor-title wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              Bronze Sponsor
            </h5>
            <div
              className="our-sponsor-area d-flex flex-wrap wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <div className="single-sponsor me-25 mb-50 wow animate__fadeInUp">
                <a href="https://growbydata.com/">
                  <img
                    className="img-fluid"
                    src="assets/images/sponsers/growbydata.png"
                    alt="Grow by Data"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <h5
              className="text-uppercase text-white text-underline sponsor-title wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              Cyber Security Partner
            </h5>
            <div
              className="our-sponsor-area d-flex flex-wrap wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <div className="single-sponsor me-25 mb-50 bottom-row-sponsor">
                <a href="http://cynicaltechnology.com">
                  <img
                    className="img-fluid"
                    src="assets/images/sponsers/cynical.png"
                    alt="Cynical Technology"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <h5
              className="text-uppercase text-white text-underline sponsor-title wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              Supporting Partner
            </h5>
            <div
              className="our-sponsor-area d-flex flex-wrap wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <div className="single-sponsor me-25 mb-50 bottom-row-sponsor">
                <a href="http://verisknepal.com.np/">
                  <img
                    className="img-fluid"
                    src="assets/images/sponsers/verisk.png"
                    alt="Verisk Nepal"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <h5
              className="text-uppercase text-white text-underline sponsor-title wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              Gift Partner
            </h5>
            <div
              className="our-sponsor-area d-flex flex-wrap wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <div className="single-sponsor me-25 mb-50 bottom-row-sponsor">
                <a href="http://itti.com.np">
                  <img
                    className="img-fluid"
                    src="assets/images/sponsers/itti.png"
                    alt="ITTI pvt. Ltd."
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
