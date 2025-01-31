"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./component/style.module.css";
import loc from "./component/Location.svg";
import CloudSection from "../_Components/Cloudsection2";
// import Loading from "../loading";

// import image1 from "./component/events low res/Pronites 1.png";
// import image2 from "./component/events low res/Pronites 1.png";
import google from "./component/googlelink.svg";
import frame from "./component/Frame51-o.svg";
import clock from "./component/Time_light.svg"
import ComingSoon from "../_Components/comingsoon";
const images = [
  { src: "/events low res/proshows 1.png", day:"Day 2 - Crescendo", location: "Rocko Stage",loaclink:"https://www.google.com/maps/place/Cricket+Field,+Amingaon,+Guwahati,+Namati+Jalah,+Assam+781039/@26.189375,91.6927851,16.55z/data=!4m6!3m5!1s0x375a5ae98eaac1d3:0xb81bf49e19c882c6!8m2!3d26.1906031!4d91.6970283!16s%2Fg%2F11b8th1twm?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D", name: "Caracal",time: "1 Feb, 4:30 PM", description: "Brace yourself for an electrifying night as Caracal Band sets the stage on fire with their high-energy performance. Get lost in their powerful riffs, intense beats, and mesmerizing melodies! 🎸" },
  { src: "/events low res/proshows 2.png", day:"Day 3 - Blitzkrieg", location: "Rocko Stage",loaclink:"https://www.google.com/maps/place/Cricket+Field,+Amingaon,+Guwahati,+Namati+Jalah,+Assam+781039/@26.189375,91.6927851,16.55z/data=!4m6!3m5!1s0x375a5ae98eaac1d3:0xb81bf49e19c882c6!8m2!3d26.1906031!4d91.6970283!16s%2Fg%2F11b8th1twm?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D", name: "Black Rhythm",time: "2 Feb, 4:00 PM", description: "Get ready for an electrifying performance by Black Rhythm, a powerhouse of music and energy. Their dynamic beats and captivating stage presence will leave you grooving to an unforgettable rhythm!" },
  { src: "/events low res/proshows 3.png", day:"Day 2 - Crescendo", location: "Rocko Stage",loaclink:"https://www.google.com/maps/place/Cricket+Field,+Amingaon,+Guwahati,+Namati+Jalah,+Assam+781039/@26.189375,91.6927851,16.55z/data=!4m6!3m5!1s0x375a5ae98eaac1d3:0xb81bf49e19c882c6!8m2!3d26.1906031!4d91.6970283!16s%2Fg%2F11b8th1twm?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D", name: "Vardhaman Chhajed",time: "1 Feb, 5:30 PM", description: "Witness a mesmerizing performance by Vardhaman Chajjer, a musical talent known for his soulful melodies and captivating stage presence. Let his enchanting tunes take you on an unforgettable musical journey" },
  { src: "/events low res/proshows 4.png", day:"Day 2 - Crescendo", location: "Rocko Stage",loaclink:"https://www.google.com/maps/place/Cricket+Field,+Amingaon,+Guwahati,+Namati+Jalah,+Assam+781039/@26.189375,91.6927851,16.55z/data=!4m6!3m5!1s0x375a5ae98eaac1d3:0xb81bf49e19c882c6!8m2!3d26.1906031!4d91.6970283!16s%2Fg%2F11b8th1twm?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D", name: "Shaurya Mehta",time: "2 Feb", description: "Explore a literary wonderland at Alcheringa's Book Fair, where you’ll find books from all genres. From captivating fiction to insightful non-fiction, there's something for every reader. Meet authors, discover new releases, and indulge in your love for books. A paradise for book enthusiasts! 📚✨" },
];
const event = [
  { name: "Proshows", topsubheading: "Flickeringa", contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium, consectetur quaerat illum labore reiciendis odit pariatur eligendi fuga quis optio provident dolorum recusandae et sed autem in iusto sequi." },
];
export default function Page() {
  return (
    <div className={styles.main}>

      <CloudSection event={event}/>
      {/* <ComingSoon></ComingSoon> */}
         <div className={styles.container}>
            {images.map((image, index) => (
              <div key={index} className={styles.event}>
                <div className={styles.left}
                    style={{
                        backgroundImage: `url("${image.src}")`,
                        backgroundSize: "34.5vw 25.5vw",
                        // backgroundSize: "cover", 
                        
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
