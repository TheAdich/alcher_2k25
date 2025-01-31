"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./component/style.module.css";
import CloudSection from "../_Components/Cloudsection2";
import loc from "./component/Location.svg";
// import Loading from "../loading";

// import image1 from "./component/image1.png";
// import image2 from "./component/image1.png";
import google from "./component/googlelink.svg";
import frame from "./component/Frame51-o.svg";
import clock from "./component/Time_light.svg"
const images = [
  { src: "/events low res/Flick 1.png", day:"All Day", location: "Rocko Stage",loaclink:"https://www.google.com/maps/place/Cricket+Field,+Amingaon,+Guwahati,+Namati+Jalah,+Assam+781039/@26.189375,91.6927851,16.55z/data=!4m6!3m5!1s0x375a5ae98eaac1d3:0xb81bf49e19c882c6!8m2!3d26.1906031!4d91.6970283!16s%2Fg%2F11b8th1twm?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D", name: "Ferris Wheel",time: "7:00 PM", description: "Experience the magic of Shaurya Mehta live at Alcheringa! With his unique fusion of heartfelt lyrics and soulful melodies, Shaurya’s performance promises to captivate your heart and soul. His powerful voice and evocative stage presence will transport you into a world of emotions, leaving a lasting impression. Whether it's his soothing tunes or energetic beats, this performance is set to be an unforgettable experience for music lovers! 🎶💫" },
  { src: "/events low res/Flick 2.png", day:"All Day", location: "Rocko Stage",loaclink:"https://www.google.com/maps/place/Cricket+Field,+Amingaon,+Guwahati,+Namati+Jalah,+Assam+781039/@26.189375,91.6927851,16.55z/data=!4m6!3m5!1s0x375a5ae98eaac1d3:0xb81bf49e19c882c6!8m2!3d26.1906031!4d91.6970283!16s%2Fg%2F11b8th1twm?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D", name: "Tora Tora",time: "7:00 PM", description: "Get ready for an adrenaline-pumping ride as Tora Tora takes you on a thrilling spinning adventure! This high-energy amusement ride rotates at dizzying speeds, swaying unpredictably to keep your excitement levels soaring. Feel the rush as you spin in every direction, experiencing the perfect blend of thrill and fun. A must-try for all adventure seekers at Alcheringa! 🎢🔥" },
  { src: "/events low res/Flick 3.png", day:"All Day", location: "Rocko Stage",loaclink:"https://www.google.com/maps/place/Cricket+Field,+Amingaon,+Guwahati,+Namati+Jalah,+Assam+781039/@26.189375,91.6927851,16.55z/data=!4m6!3m5!1s0x375a5ae98eaac1d3:0xb81bf49e19c882c6!8m2!3d26.1906031!4d91.6970283!16s%2Fg%2F11b8th1twm?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D", name: "BookFair",time: "7:00 PM", description: "Explore a literary wonderland at Alcheringa's Book Fair, where you’ll find books from all genres. From captivating fiction to insightful non-fiction, there's something for every reader. Meet authors, discover new releases, and indulge in your love for books. A paradise for book enthusiasts! 📚✨" },
  { src: "/events low res/Flick 4.png", day:"All Day", location: "Rocko Stage",loaclink:"https://www.google.com/maps/place/Cricket+Field,+Amingaon,+Guwahati,+Namati+Jalah,+Assam+781039/@26.189375,91.6927851,16.55z/data=!4m6!3m5!1s0x375a5ae98eaac1d3:0xb81bf49e19c882c6!8m2!3d26.1906031!4d91.6970283!16s%2Fg%2F11b8th1twm?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D", name: "Break Dance",time: "7:00 PM", description: "Experience the thrill of an intense breakdance showdown as talented B-boys and B-girls take the stage with explosive moves, gravity-defying flips, and unmatched energy. Feel the adrenaline as they battle it out with style, rhythm, and power! 🔥🎶" },
  { src: "/events low res/Flick 5.png", day:"All Day", location: "Rocko Stage",loaclink:"https://www.google.com/maps/place/Cricket+Field,+Amingaon,+Guwahati,+Namati+Jalah,+Assam+781039/@26.189375,91.6927851,16.55z/data=!4m6!3m5!1s0x375a5ae98eaac1d3:0xb81bf49e19c882c6!8m2!3d26.1906031!4d91.6970283!16s%2Fg%2F11b8th1twm?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D", name: "360 Photo & Video-Booth",time: "7:00 PM", description: "Capture unforgettable moments at Alcheringa with the immersive 360° Photobooth! Strike a pose and get stunning, dynamic videos from every angle, creating memories that last forever. Don't miss this unique experience! 📸✨" },
];
const event = [
  { name: "Flickeringa", topsubheading: "Flickeringa", contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium, consectetur quaerat illum labore reiciendis odit pariatur eligendi fuga quis optio provident dolorum recusandae et sed autem in iusto sequi." },
];
export default function Page() {
  return (
    <div className={styles.main}>
      <CloudSection event={event} />
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
