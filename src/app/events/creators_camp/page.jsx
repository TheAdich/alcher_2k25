"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./component/style.module.css";
import loc from "./component/Location.svg";
import ComingSoon from "../_Components/comingsoon";
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
  { name: "Creator's Camp"},
];

export default function Page() {
  return (
    <div className={styles.main}>
      <CloudSection event={event} ></CloudSection>
        <div className={styles.container}>
        </div>
        <ComingSoon/>
    </div>
  );
}
