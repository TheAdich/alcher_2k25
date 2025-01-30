"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./component/style.module.css";
import loc from "./component/Location.svg";
import CloudSection from "../_Components/Cloudsection2";
// import Loading from "../loading";
// import ComingSoon from "../_Components/comingsoon";

// import image1 from "./component/image1.png";
// import image2 from "./component/image1.png";
import google from "./component/googlelink.svg";
import frame from "./component/Frame51-o.svg";
import clock from "./component/Time_light.svg"
const images = [
  { src: "/events low res/Pronites 1.png", day:"Day 1 - Juggernaut", location: "Pronite Stage",loaclink:"https://www.google.com/maps/place/Cricket+Field,+Amingaon,+Guwahati,+Namati+Jalah,+Assam+781039/@26.189375,91.6927851,16.55z/data=!4m6!3m5!1s0x375a5ae98eaac1d3:0xb81bf49e19c882c6!8m2!3d26.1906031!4d91.6970283!16s%2Fg%2F11b8th1twm?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D", name: "Yashraj ",time: "31 Jan, 6:00 PM", description: "Kickstart Alcheringa with a power-packed performance by Yashraj Mehra, the rising star of Indian rap. Get ready for hard-hitting bars and electrifying beats that will set the stage on fire!" },
  { src: "/events low res/Pronites 2.png", day:"Day 2 - Crescendo", location: "Pronite Stage",loaclink:"https://www.google.com/maps/place/Cricket+Field,+Amingaon,+Guwahati,+Namati+Jalah,+Assam+781039/@26.189375,91.6927851,16.55z/data=!4m6!3m5!1s0x375a5ae98eaac1d3:0xb81bf49e19c882c6!8m2!3d26.1906031!4d91.6970283!16s%2Fg%2F11b8th1twm?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D", name: "Amit Trivedi",time: "1 Feb, 6:00 PM", description: "Experience the musical brilliance of Amit Trivedi as he takes you on a soulful journey with his iconic melodies. A night filled with mesmerizing tunes and unforgettable rhythms awaits!" },
  { src: "/events low res/Pronites 3.png", day:"Day 3 - Blitzkrieg", location: "Pronite Stage",loaclink:"https://www.google.com/maps/place/Cricket+Field,+Amingaon,+Guwahati,+Namati+Jalah,+Assam+781039/@26.189375,91.6927851,16.55z/data=!4m6!3m5!1s0x375a5ae98eaac1d3:0xb81bf49e19c882c6!8m2!3d26.1906031!4d91.6970283!16s%2Fg%2F11b8th1twm?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D", name: "Lost Stories",time: "2 Feb, 6:00 PM", description: "End the fest with a bang as Lost Stories, the sensational musical duo, bring their signature electronic beats to Alcheringa. Get ready to groove to an electrifying fusion of EDM and Indian sounds!" },
];
const event = [
  { name: "Pronites", topsubheading: "Flickeringa", contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium, consectetur quaerat illum labore reiciendis odit pariatur eligendi fuga quis optio provident dolorum recusandae et sed autem in iusto sequi." },
];
export default function Page() {
  return (
    <div className={styles.main}>
      <CloudSection event={event}/>
        
        <div className={styles.container}>
            {images.map((image, index) => (
              <div key={index} className={styles.event}>
                <div className={styles.left}
                    style={{
                        backgroundImage: `url("${image.src}")`,
                        backgroundSize: "34.5vw 25.5vw",
                        // background-size: "30vw 27vw",
                        // backgroundSize: "400px 300px",
                      }}>
                    <Image
                        src={frame}
                        className={styles.eventimage}
                        quality={100}
                        width={400}
                        height={300}
                        alt="event image"
                    />
                </div>
                <div className={styles.right}>
                    <div className={styles.rightupper}>
                        <h1 className={styles.name}>{image.name}</h1>
                        <hr />
                        <div className={styles.time}>
                            <h2 className={styles.day}>{image.day}</h2>
                            <div className="flex flex-row gap-2">
                            <Image
                                src={loc}
                                className={styles.loc}
                                quality={100}
                                width={15}
                                height={15}
                                alt="event image"
                              />
                              <p>  {image.location}</p>
                            </div>
                            <div className="flex flex-row gap-2">
                            <Image
                                src={clock}
                                className={styles.loc}
                                quality={100}
                                width={15}
                                height={15}
                                alt="event image"
                              />
                              <p>  {image.time}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <p>{image.description}</p>
                    </div>
                    <div className={styles.rightlower}>
                      <a href={image.loaclink} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={google}
                          className={styles.google}
                          quality={100}
                          width={140}
                          height={30}
                          alt="Google link"
                        />
                      </a>
                    </div>
                </div>
              </div>
            ))} 
        </div>
    </div>
  );
}
