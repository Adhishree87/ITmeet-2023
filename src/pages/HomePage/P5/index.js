import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup, } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./P5.sass";
import { databaseContext } from "../../../context/databaseContext/databse.context";
import {iconITMeet} from "./icons";

export default function P5() {
  const center = [27.6227443, 85.5310493];
  const database = useContext(databaseContext);
  const [qna, setQna] = useState([]);

  useEffect(() => {
    const fetchData = async (type) => {
      return await database.listDocuments("itmeet", "qna");
    };
    fetchData()
      .then((value) => {
        setQna(value.documents);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  
  return (
    
    <div className="P5">
      <section
        className="section contact"
        data-section="faq"
        name="faq"
        id="faq"
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
                  {qna.map((element, index) => (
                <React.Fragment key={index}>

                    <div
                      className="accordian-item card wow animate__fadeInUp"
                      data-wow-duration="1s"
                    >
                      <div
                        className="accordion-header card-header"
                        id={`question${index}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="true"
                        aria-controls={`collapse${index}`}
                      >
                        <h5 className="mb-0">
                          <a className="accordian-button faq-btn">
                            {element.question}
                          </a>
                        </h5>
                      </div>

                      <div
                        id={`collapse${index}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#faqAccordian"
                        aria-labelledby={`question${index}`}
                        data-parent="#accordion"
                      >
                        <div className="card-body accordion-body">
                          {element.answer}
                        </div>
                      </div>
                    </div>
                    </React.Fragment>
                  ))}
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
          <div id="map" className="map">
            <MapContainer
              className="leaf"
              center={center}
              zoom={14}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={center} icon={iconITMeet}>
                <Popup>
                  Kathmandu University <br /> IT Meet Venue.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
