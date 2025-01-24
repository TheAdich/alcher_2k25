"use client"
import styles from './merch.module.css'
import Image from 'next/image'
import React, { useState, useEffect } from "react";
import GridSketch from '../_trailinggrid/grid';
import dash2 from "./_components/dash2.png";
const Merch = () => {
  const [gridDimensions, setGridDimensions] = useState({ width: 300, height: 50, gridsize: 16.5 });

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 1024) {
          setGridDimensions({ width: 3000, height: 530, gridsize: 15 }); // Large screens
        } else if (window.innerWidth > 991) {
          setGridDimensions({ width: 2000, height: 95, gridsize: 14 }); // Medium screens
        } else if (window.innerWidth > 768) {
          setGridDimensions({ width: 2000, height: 85, gridsize: 11 }); // Small screens
        } else {
          setGridDimensions({ width: 0, height: 0, gridsize: 0 }); // Extra small screens
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
    <div className={styles.merchHome}>
      <div className={styles.dashContainer}>
        <GridSketch width={gridDimensions.width} height={gridDimensions.height} gridsize={gridDimensions.gridsize} />
        <Image src="./tetris.svg" alt="merch" width={500} height={500} className={`${styles.merchTextHome} ${styles.dashHome}`} />
      </div>
      <Image src="./tetrisMobile.svg" alt="merch" width={500} height={500} className={styles.mobileTextHome} />
      <Image src="/merch.png" alt="merch" width={500} height={500} className={styles.tshirts} />
      <a href="/merch">
        <Image src="./merch-btn.svg" alt="merch" width={500} height={500} className={styles.merchBtnHome} />
      </a>
      <div className={styles.dashContainermerch}>
      <GridSketch width={gridDimensions.width} height={gridDimensions.height} gridsize={gridDimensions.gridsize} />
        <Image src={dash2} alt="Bottom dash" className={styles.dash} />
      </div>
    </div>
  )
}

export default Merch;