import React from "react";

export default function P6() {
  return (
    <>
      <section
        className="section contact"
        data-section="section5"
        name="section5"
        id="section5"
      >
        <div style={{ padding: "0px 20px" }}>
          <div>
            <div className="section-heading">
              <h2 className="wow animate__bounceIn" data-wow-duration="1s">
                Have Questions? Contact Us
              </h2>
            </div>
          </div>
          <div className="row contact-div">
            <div className="col-md-6 FAQ">
              <div className="faq-section mb-100">
                <div className="accordion" id="faqAccordian">
                  <div
                    className="accordian-item card wow animate__fadeInUp"
                    data-wow-duration="1s"
                  >
                    <div
                      className="accordion-header card-header"
                      id="questionOne"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h5 className="mb-0">
                        <a className="accordian-button faq-btn">
                          Are the Competitions Only for KU Students?
                        </a>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordian"
                      aria-labelledby="questionOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body accordion-body">
                        No, the competition is not only for the students of
                        Kathmandu University. It is open to everyone who is
                        willing to participate.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordian-item card wow animate__fadeInUp"
                    data-wow-delay="400ms"
                    data-wow-duration="1s"
                  >
                    <div
                      className="accordion-header card-header"
                      id="questionTwo"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <h5 className="mb-0">
                        <a className="faq-btn">
                          {" "}
                          Are all events open for everyone?{" "}
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordian"
                      aria-labelledby="questionTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body accordion-body">
                        Yes, Anyone can participate in events. You can
                        participate freely in the event you like.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordian-item card wow animate__fadeInUp"
                    data-wow-delay="500ms"
                    data-wow-duration="1s"
                  >
                    <div
                      className="accordion-header card-header"
                      id="questionThree"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      <h5 className="mb-0">
                        <a className="faq-btn"> What is KU Hackfest 2022? </a>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordian"
                      aria-labelledby="questionThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body accordion-body">
                        KU Hackfest 2022 is one of the major pre-events of IT
                        Meet 2022 which is going to take place from August 5 to
                        7.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordian-item card wow animate__fadeInUp"
                    data-wow-delay="500ms"
                    data-wow-duration="1s"
                  >
                    <div
                      className="accordion-header card-header"
                      id="questionThree"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      <h5 className="mb-0">
                        <a className="faq-btn">
                          I am not from IT background? Can I participate in the
                          events?
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordian"
                      aria-labelledby="questionFour"
                      data-parent="#accordion"
                    >
                      <div className="card-body accordion-body">
                        Yes, you can.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 form wow animate__fadeInUp"
              data-wow-duration="1s"
            >
              <form
                name="cform"
                className="gform"
                id="contact"
                action="https://script.google.com/macros/s/AKfycbwwllheSmJabCsUAoDrD7pDhntQtg3Uke630VfUG5go4aQvN7aQW1XcKZWpo4pRliI3/exec"
                method="post"
              >
                <div className="row">
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <textarea
                        name="message"
                        rows="6"
                        className="form-control"
                        id="message"
                        placeholder="Your message..."
                        required
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-md-2">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="send-btn"
                      >
                        Send
                      </button>
                    </fieldset>
                  </div>
                  <div className="col-md-9 thanks-div">
                    <p className="thanks">
                      <i
                        className="fa fa-check"
                        style={{ marginRight: "10px" }}
                      ></i>
                      Sent. We will reach out to you soon.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div id="map">
              <iframe
                className="wow animate__fadeInUp"
                data-wow-duration="1s"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.160256491057!2d85.53645301549287!3d27.619552935950605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb092082d99e3b%3A0xe509dafa47685dba!2sKathmandu%20University!5e0!3m2!1sen!2snp!4v1656526000016!5m2!1sen!2snp"
                width="100%"
                height="550"
                style={{ border: 0, borderRadius: "4px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
