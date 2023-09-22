import React, { useState, useEffect, useContext } from "react";
import { databaseContext } from "../../../context/databaseContext/databse.context";
import { FiClock, FiTarget } from "react-icons/fi";
import { BiSolidEditLocation } from "react-icons/bi";
import { Query } from "appwrite";
import "./PreEvents.sass";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

export default function PreEvents() {
  const database = useContext(databaseContext);
  const [preEvents, setPreEvents] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async (type) => {
      return await database.listDocuments("itmeet", "events", [
        Query.equal("type", ["pre"]),
      ]);
    };
    fetchData()
      .then((value) => {
        setPreEvents(value.documents);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  return (
    <div className="PreEvents">
      <section
        className="section preEvents sponsors"
        data-section="preevents"
        name="preevents"
        id="preevents"
      >
        <h4 className="wow animate__fadeInUp" data-wow-duration="1s">
          Our Pre Events
        </h4>
        <div className="cards">
          {preEvents.map((element, index) => {
            if (index < 3)
              return (
                <React.Fragment key={index}>
                <div
                  className="card"
                  onClick={() => {
                    navigate(`/event/${element.title}`);
                  }}
                >
                  <div className="content">
                    <h2>{element.title}</h2>
                    {element.description.length > 150 ? (
                      <>
                        <p>
                          {element.description.slice(0, 150)}
                          <Link to={`/event/${element.title}`}>More ...</Link>
                        </p>
                      </>
                    ) : (
                      <p> {element.description}</p>
                    )}
                    <div className="icons">
                      <BiSolidEditLocation size={24} />
                      <p>{element.venue}</p>
                    </div>
                    <div className="icons">
                      <FiClock size={24} />
                      <p>
                        {moment(element.date_time)
                          .utcOffset("+0545")
                          .format("YYYY/MM/DD ")}
                      </p>
                    </div>
                  </div>
                  <img src={element.photo} alt={element.title} />
                </div>
                </React.Fragment>
              );
          })}
          <span className="overlay" />
        </div>
        {/* <a
          className="viewallbtn wow animate__fadeInUp"
          data-wow-duration="1s"
          href="/allpreEvents"
        >
          View all Events <i className="fa fa-angle-double-right"></i>
        </a> */}

        <a href='/allpreEvents'>
                <div className="container-fluid">
                    <div className="row roww">
                        <div className="col-md-12">
                            <div className="boxed-button">
                                <h2 className="wow animate__bounceIn" data-wow-duration="1s">
                                    View All Events
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                </a>
      </section>
    </div>
  );
}
