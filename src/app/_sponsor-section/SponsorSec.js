"use client"
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import styles from "./sponsor.module.css";
import img1 from "./_components/img1.png";
import img2 from "./_components/img2.png";
import img3 from "./_components/img3.png";
import img4 from "./_components/img4.png";
import img5 from "./_components/img5.png";
import img13 from "./_components/img13.png";
import img7 from "./_components/img7.png";
import img8 from "./_components/img8.png";
import img9 from "./_components/img9.png";
import img10 from "./_components/img10.png";
import img11 from "./_components/img11.png";
import img12 from "./_components/img12.png";
import line2 from "./_components/line2.png";
import dash1 from "./_components/dash1.png";
import dash2 from "./_components/dash2.png";
import Image from "next/image";
import GridSketch from "../_trailinggrid/grid";
const sponsors = [
  { name: "Gplus", logo: img1, alt: "Gplus logo" },
  { name: "SBI", logo: img2, alt: "SBI logo" },
  { name: "Sparx1", logo: img3, alt: "Sparx logo" },
  { name: "Sparx2", logo: img4, alt: "Sparx logo" },
  { name: "PRAG NEWS", logo: img5, alt: "PRAG NEWS logo" },
  { name: "JioSaavn", logo: img2, alt: "JioSaavn logo" },
  { name: "Unstop", logo: img7, alt: "Unstop logo" },
  { name: "Edu Fabrica", logo: img8, alt: "Edu Fabrica logo" },
  { name: "NTPC", logo: img9, alt: "NTPC logo" },
  { name: "French Essence", logo: img13, alt: "French Essence logo" },
  { name: "E-media", logo: img11, alt: "E-media logo" },
  { name: "E-media2", logo: img10, alt: "E-media logo" },
  { name: "E-media3", logo: img12, alt: "E-media logo" },
];

const SponsorSection = () => {

  const [gridDimensions, setGridDimensions] = useState({ width: 300, height: 50,gridsize:16.5 });

  useLayoutEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth > 1024) {
        setGridDimensions({ width: 3000, height: 132,gridsize:16.5 }); // Large screens
      }else if (window.innerWidth > 991) {
        setGridDimensions({ width: 2000, height: 95,gridsize:14 }); // Medium screens
      }
       else if (window.innerWidth > 768) {
        setGridDimensions({ width: 2000, height: 85,gridsize:11 }); // Medium screens
      } else {
        setGridDimensions({ width: 0, height: 0,gridsize:0 }); // Small screens
      }
    };

    updateDimensions(); // Call initially
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions); // Cleanup
  }, []);



  return (
    <div className={styles.sponsorsection}>
      <div className={styles.dashContainer}>
      <GridSketch width={gridDimensions.width} height={gridDimensions.height} gridsize={gridDimensions.gridsize} />
        <Image src={dash1} alt="Top dash" className={styles.dash} />
      </div>
      <h2 className={styles.sponsortitle}>Sponsors</h2>
      <div className={styles.sponsorlogos}>
      <Image src={line2} className={styles.lines} alt="line2"/>
        {sponsors.map((sponsor, index) => (
          
          <div className={styles.sponsorlogo} key={index}>
            <Image src={sponsor.logo} alt={sponsor.alt} className={styles.sponsorImg}/>
          </div>
        ))}
       <Image src={line2} className={styles.lines} alt=""/>
      </div>
      <div className={styles.dashContainer1}>
      <GridSketch width={gridDimensions.width} height={gridDimensions.height} gridsize={gridDimensions.gridsize} />
        <Image src={dash2} alt="Bottom dash" className={styles.dash} />
      </div>
    </div>
  );
};

export default SponsorSection;

