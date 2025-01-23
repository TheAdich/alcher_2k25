"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./component/style.module.css";
import loc from "./component/Location.svg";
import CloudSection from "../_Components/Cloudsection2";
// import Loading from "../loading";

// import image1 from "./component/image1.png";
// import image2 from "./component/image1.png";
import google from "./component/googlelink.svg";
import frame from "./component/Frame51-o.svg";
import clock from "./component/Time_light.svg"
const images = [
  { src: "/image1.png", day:"Day 1 - Juggernaut", location: "Main Auditorium",loaclink:"https://www.google.com", name: "Arjit Singh",time: "31 Jan, 11:00 PM", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium, consectetur quaerat illum labore reiciendis odit pariatur eligendi fuga quis optio provident dolorum recusandae et sed autem in iusto sequi." },
  { src: "/image1.png", day:"Day 1 - Juggernaut", location: "Main Auditorium",loaclink:"https://www.google.com", name: "Arjit Singh",time: "31 Jan, 11:00 PM", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium, consectetur quaerat illum labore reiciendis odit pariatur eligendi fuga quis optio provident dolorum recusandae et sed autem in iusto sequi." },
];
const event = [
  { name: "Cretical Damage", topsubheading: "Flickeringa", contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium, consectetur quaerat illum labore reiciendis odit pariatur eligendi fuga quis optio provident dolorum recusandae et sed autem in iusto sequi." },
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
