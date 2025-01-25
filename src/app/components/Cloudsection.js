"use client";
import "./brick-pixel.css";
import Marquee from "react-fast-marquee";
import SlotCounter from "react-slot-counter";
import { useEffect, useState } from "react";

const CloudSection = () => {
  const [event_stat, setEventStat] = useState(0);
  const [footfall_stat, setFootfallStat] = useState(0);
  const [competition_stat, setCompetitionStat] = useState(0);

  useEffect(() => {
    setEventStat(45);
    setFootfallStat(45);
    setCompetitionStat(45);
  }, []);

  return (
    <section>
      <div>
        <img
          src="/redlines.png"
          alt="redlines"
          width={40}
          height={40}
          className="redlines"
        />
      </div>

      {/* <section className="clouds">
                <div>
                    <img
                        src="/cloud1u.svg"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="fu cloud"
                    />
                    <img
                        src="/cloud1b.svg"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="fb cloud"
                    />
                </div>
                <div>
                    <img
                        src="/cloud2u.png"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="su cloud"
                    />
                    <img
                        src="/cloud2d.png"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="sd cloud"
                    />
                </div>
                <div>
                    <img
                        src="/cloud3.png"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="tu cloud"
                    />
                </div>
                <div>
                    <img
                        src="/cloudlu.svg.svg"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="lu cloud"
                    />
                    <img
                        src="/cloudlb.png"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="lb cloud"
                    />
                </div>
            </section> */}
      <div className="homeclouds">
        <div className="homecloud1 opacity-40">
          <Marquee speed={10}>
            <img src="/cloudLeft.png" width="1000" height="1000" />
            <img src="/cloudLeft.png" width="1000" height="1000" />
            <img src="/cloudLeft.png" width="1000" height="1000" />
          </Marquee>
        </div>
        <div className="homecloud2 opacity-40" >
          <Marquee direction="right" speed={30}>
            <img src="/cloudRight.png" width="1000" height="1000" />
            <img src="/cloudRight.png" width="1000" height="1000" />
            <img src="/cloudRight.png" width="1000" height="1000" />
          </Marquee>
        </div>

        <img
          src="/alcherlogo 1.svg"
          alt="alcher"
          width={100}
          height={100}
          className="alcherlogo"
          style={{ opacity: 1 }}
        />
      </div>

      <div className="content">
        <p>
        Alcheringa is the annual cultural extravaganza of IIT Guwahati, a vibrant celebration of youth, creativity, and diversity. As North East India's largest cultural festival, Alcheringa offers a unique platform for students to showcase their talents and explore a world of artistic expression.

Experience three days and four nights of electrifying performances, thrilling competitions, and unforgettable moments. From January 30th to February 2nd, 2025, Alcheringa invites you to unlock a world of artistic expression and cultural exploration.
        </p>

      </div>
      <div>
        <div className="relative">
          <video autoPlay loop muted className="video-container">
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay"></div>

          <div className="stats-section">
            <div className="stats-flex">
              <div className="stat-item">
                <h2 className="stat-title">
                  {" "}
                  <SlotCounter
                    startValue={event_stat}
                    value={100}
                    duration={1}
                    speed={1.4}
                    sequentialAnimationMode
                    animateOnVisible={{
                      triggerOnce: false,
                      rootMargin: "0px 0px -50px 0px",
                    }}
                  />
                  +
                </h2>
                <p className="stat-description">Events</p>
              </div>
              <div className="stat-item">
                <h2 className="stat-title">
                  {" "}
                  <SlotCounter
                    startValue={footfall_stat}
                    value={140}
                    duration={1}
                    speed={1.2}
                    sequentialAnimationMode
                    animateOnVisible={{
                      triggerOnce: false,
                      rootMargin: "0px 0px -50px 0px",
                    }}
                  />
                  K+
                </h2>
                <p className="stat-description">Footfall</p>
              </div>
              <div className="stat-item">
                <h2 className="stat-title">
                  {" "}
                  <SlotCounter
                    startValue={competition_stat}
                    value={45}
                    duration={1}
                    speed={1.4}
                    sequentialAnimationMode
                    animateOnVisible={{
                      triggerOnce: false,
                      rootMargin: "0px 0px -50px 0px",
                    }}
                  />
                  +
                </h2>
                <p className="stat-description">Competitions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudSection;
