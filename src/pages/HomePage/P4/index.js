import React from "react";
import "./P4.css";
import KUHackfest from "../../../assets/img/hackfest.png";
import calendar from "../../../assets/img/calendar.png";
import clock from "../../../assets/img/clock.png";
import location from "../../../assets/img/location.png";
import target from "../../../assets/img/target1.png";

export default function P4() {
  return (
    <div className="P4">
      <div id="pre-events">
        <h1>Pre Events</h1>
        <div class="cards">
          <div class="card">
            <div class="content">
              <h2>KU HACKFEST</h2>

              <div class="description">
                <img src={target} alt="Target"></img>

                <p>
                  Unleash Innovation, Code Your Dreams: Join the
                  HackfestRevolution! Unleash Innovation, Code Your Dreams:
                  Hackfest Revolution! Unleash Innovation, Code Your Dreams:
                  Join the Hackfest Revolution! Unleash Innovation, Code Your
                  Dreams: Join the Hackfest Revolution! Unleash Innovation, Code
                  Your Dreams: Join the Hackfest Revolution!
                </p>
              </div>
              <div class="foot">
                <div class="location">
                  <img src={location} alt="location"></img>
                  <h4>Kathmandu University</h4>
                </div>
                <div class="location">
                  <img src={calendar} alt="date"></img>
                  <h4>
                    29<sup>th</sup> Sept
                  </h4>
                </div>
                <div class="location">
                  <img src={clock} alt="time"></img>
                  <h4>1 pm</h4>
                </div>
              </div>
            </div>

            <img src={KUHackfest} alt="Hackfest photo"></img>
          </div>
          <div class="card">
            <div class="content">
              <h2>KU HACKFEST</h2>

              <div class="description">
                <img src={target} alt="Target"></img>

                <p>
                  Unleash Innovation, Code Your Dreams: Join the
                  HackfestRevolution! Unleash Innovation, Code Your Dreams:
                  Hackfest Revolution! Unleash Innovation, Code Your Dreams:
                  Join the Hackfest Revolution! Unleash Innovation, Code Your
                  Dreams: Join the Hackfest Revolution! Unleash Innovation, Code
                  Your Dreams: Join the Hackfest Revolution!
                </p>
              </div>
              <div class="foot">
                <div class="location">
                  <img src={location} alt="location"></img>
                  <h4>Kathmandu University</h4>
                </div>
                <div class="location">
                  <img src={calendar} alt="date"></img>
                  <h4>
                    29<sup>th</sup> Sept
                  </h4>
                </div>
                <div class="location">
                  <img src={clock} alt="time"></img>
                  <h4>1 pm</h4>
                </div>
              </div>
            </div>

            <img src={KUHackfest} alt="Hackfest photo"></img>
          </div>
          <div class="card">
            <div class="content">
              <h2>KU HACKFEST</h2>

              <div class="description">
                <img src={target} alt="Target"></img>

                <p>
                  Unleash Innovation, Code Your Dreams: Join the
                  HackfestRevolution! Unleash Innovation, Code Your Dreams:
                  Hackfest Revolution! Unleash Innovation, Code Your Dreams:
                  Join the Hackfest Revolution! Unleash Innovation, Code Your
                  Dreams: Join the Hackfest Revolution! Unleash Innovation, Code
                  Your Dreams: Join the Hackfest Revolution!
                </p>
              </div>
              <div class="foot">
                <div class="location">
                  <img src={location} alt="location"></img>
                  <h4>Kathmandu University</h4>
                </div>
                <div class="location">
                  <img src={calendar} alt="date"></img>
                  <h4>
                    29<sup>th</sup> Sept
                  </h4>
                </div>
                <div class="location">
                  <img src={clock} alt="time"></img>
                  <h4>1 pm</h4>
                </div>
              </div>
            </div>

            <img src={KUHackfest} alt="Hackfest photo"></img>
          </div>
          <div class="layer"></div>
        </div>
        <button>Browse More</button>
      </div>
    </div>
  );
}
