'use client'
import Image from "next/image";
import './brick-pixel.css'
import Marquee from "react-fast-marquee";
import SlotCounter from 'react-slot-counter';
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
                <Image
                    src="/redlines.svg"
                    alt="redlines"
                    width={40}
                    height={40}
                    className="redlines"
                />
            </div>

            {/* <section className="clouds">
                <div>
                    <Image
                        src="/cloud1u.svg"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="fu cloud"
                    />
                    <Image
                        src="/cloud1b.svg"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="fb cloud"
                    />
                </div>
                <div>
                    <Image
                        src="/cloud2u.png"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="su cloud"
                    />
                    <Image
                        src="/cloud2d.png"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="sd cloud"
                    />
                </div>
                <div>
                    <Image
                        src="/cloud3.png"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="tu cloud"
                    />
                </div>
                <div>
                    <Image
                        src="/cloudlu.svg.svg"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="lu cloud"
                    />
                    <Image
                        src="/cloudlb.png"
                        alt="cloud"
                        width={100}
                        height={100}
                        className="lb cloud"
                    />
                </div>
            </section> */}
            <div className="homeclouds">
                <div className="homecloud1">
                    <Marquee speed={10} >
                        <Image src="./cloudLeft.svg" width="1000" height="1000" />
                        <Image src="./cloudLeft.svg" width="1000" height="1000" />
                        <Image src="./cloudLeft.svg" width="1000" height="1000" />
                    </Marquee>
                </div>
                <div className="homecloud2">
                    <Marquee direction="right" speed={30} >
                        <Image src="./cloudRight.svg" width="1000" height="1000" />
                        <Image src="./cloudRight.svg" width="1000" height="1000" />
                        <Image src="./cloudRight.svg" width="1000" height="1000" />
                    </Marquee>
                </div>
            
                    <Image
                        src="/alcherlogo 1.svg"
                        alt="alcher"
                        width={100}
                        height={100}
                        className="alcherlogo"
                        style={"opacity=1"}
                    />
              
            </div>

            <div className="content">
                <p>Alcheringa, the annual cultural festival of IIT Guwahati, is a celebration of art, culture, and creativity that transcends boundaries. Established in 1996, it has grown to become Northeast India’s largest college festival, drawing participants and audiences from across the nation.</p>

                <p>Named after the Aboriginal Australian term for the “Dreamtime,” Alcheringa represents a world of imagination, self-expression, and cultural unity. With a rich legacy of showcasing diverse traditions, innovative performances, and spirited competitions, the festival embodies the values of inclusivity, creativity, and collaboration.</p>

                <p>Through its vibrant events and electrifying concerts, Alcheringa continues to inspire and connect individuals, fostering a sense of community and passion for the arts.</p>
                
            </div>
            <div>
                <div className="relative">
                    <video
                        autoPlay
                        loop
                        muted
                        className="video-container"
                    >
                        <source src="/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div class="overlay"></div>

                    <div className="stats-section">
                        <div className="stats-flex">
                            <div className="stat-item">
                                <h2 className="stat-title"> <SlotCounter
                                    startValue={event_stat}
                                    value={100}
                                    duration={1}
                                    speed={1.4}
                                    sequentialAnimationMode
                                    animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -50px 0px' }}
                                />+</h2>
                                <p className="stat-description">Events</p>
                            </div>
                            <div className="stat-item">
                                <h2 className="stat-title"> <SlotCounter
                                    startValue={footfall_stat}
                                    value={140}
                                    duration={1}
                                    speed={1.2}
                                    sequentialAnimationMode
                                    animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -50px 0px' }}
                                />K+</h2>
                                <p className="stat-description">Footfall</p>
                            </div>
                            <div className="stat-item">
                                <h2 className="stat-title"> <SlotCounter
                                    startValue={competition_stat}
                                    value={45}
                                    duration={1}
                                    speed={1.4}
                                    sequentialAnimationMode
                                    animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -50px 0px' }}

                                />+</h2>
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
