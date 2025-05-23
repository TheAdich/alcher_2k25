"use client";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import styles from "./sponsor.module.css";
import img1 from "./_components/gplus.png";
import img2 from "./_components/img2.png";
import img3 from "./_components/pragg.png";
import img4 from "./_components/img4.png";
import img5 from "./_components/img5.png";
import img6 from "./_components/NERIM.jpg";
import img7 from "./_components/img7.png";
import img8 from "./_components/img8.png";
import img9 from "./_components/img9.png";
import img10 from "./_components/img10.png";
import img11 from "./_components/img11.png";
import img12 from "./_components/img12.png";
import img13 from "./_components/logo.png";
import img14 from "./_components/CocaColalogo.webp";
import img15 from "./_components/MCJ.png";
import line2 from "./_components/line2.png";
import dash1 from "./_components/dash1.png";
import dash2 from "./_components/dash2.png";
import Image from "next/image";
import GridSketch from "../_trailinggrid/grid";

const sponsors = [
  { name: "CocaCola", logo: img14, alt: "E-media logo" },
  { name: "Techno", logo: img13, alt: "E-media logo" },
  { name: "Gplus", logo: img1, alt: "Gplus logo" },
  { name: "MCJ", logo: img15, alt: "MCJ" },
  { name: "Nerim", logo: img6, alt: "Nerim" },
  { name: "Prag News", logo: img3, alt: "Prag News" },
];

const SponsorSection = () => {
  const [gridDimensions, setGridDimensions] = useState({
    width: 300,
    height: 50,
    gridsize: 16.5,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 1024) {
          setGridDimensions({ width: 3000, height: 530, gridsize: 15 });
        } else if (window.innerWidth > 991) {
          setGridDimensions({ width: 2000, height: 95, gridsize: 14 });
        } else if (window.innerWidth > 768) {
          setGridDimensions({ width: 2000, height: 85, gridsize: 11 });
        } else {
          setGridDimensions({ width: 0, height: 0, gridsize: 0 });
        }
      }
    };

    updateDimensions(); // Initial call
    window.addEventListener("resize", updateDimensions); // Add listener

    return () => {
      window.removeEventListener("resize", updateDimensions); // Cleanup
    };
  }, []);

  return (
    <div className={styles.sponsorsection}>
      <div className={styles.dashContainerup}>
        <GridSketch
          width={gridDimensions.width}
          height={gridDimensions.height}
          gridsize={gridDimensions.gridsize}
        />
        <Image src={dash1} alt="Top dash" className={styles.dash} />
      </div>
      <h2 className={styles.sponsortitle}>Sponsors</h2>
      <Image src={line2} className={styles.lines} alt="line2" />
      <div className={styles.sponsorlogos}>
        {sponsors.map((sponsor, index) => (
          <div
            className={`${styles.sponsorlogo} ${
              index === 1 ? styles.SSlogo : ""
            }`}
            key={index}
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.alt}
              className={styles.sponsorImg}
            />
          </div>
        ))}
        {/* <Image /> */}
      </div>
      <Image src={line2} className={styles.lines} alt="ewdhskg" />
      <div className={styles.dashContainer1}>
        <GridSketch
          width={gridDimensions.width}
          height={gridDimensions.height}
          gridsize={gridDimensions.gridsize}
        />
        <Image src={dash2} alt="Bottom dash" className={styles.dash} />
      </div>
    </div>
  );
};

export default SponsorSection;
