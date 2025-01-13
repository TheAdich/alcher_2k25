
"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./gallery.module.css";
import card1 from "./card1.svg";
import card2 from "./card2.svg";
import card3 from "./card3.svg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  useEffect(() => {
    const rows = document.querySelectorAll(`.${styles.row}`);
    const mediaQuery = window.matchMedia("(max-width: 580px)");
  
    rows.forEach((row, index) => {
      const pos = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top center", 
          end: "bottom center", 
          scrub: true,
        },
      });
  
      if (mediaQuery.matches) {
      
        if (mediaQuery.matches) {
          pos.to(row.querySelectorAll(`.${styles.block1}`), {
            y: 100,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
          });
  
          pos.to(row.querySelectorAll(`.${styles.block2}`), {
            y: 180,
            opacity: 0,
            duration: 1.8,
            stagger: 0.2,
          });
  
          pos.to(row.querySelectorAll(`.${styles.block3}`), {
            y: 240,
            opacity: 0,
            duration: 2.1,
            stagger: 0.3,
          });
          pos.to(row.querySelectorAll(`.${styles.block4}`), {
            y: 300,
            opacity: 0,
            duration: 1.8,
            stagger: 0.2,
          });
        }
      } else {
     
        pos.to(row.querySelectorAll(`.${styles.block1}, .${styles.block3}`), {
          y: 400,
          opacity: 0,
          duration: 3.4,
          stagger: 0.1,
        });
  
        pos.to(
          row.querySelectorAll(
           ` .${styles.block2}, .${styles.block4}, .${styles.middleContainer}`
          ),
          {
            y: 600,
            opacity: 0,
            duration: 3.8,
            stagger: 0.1,
          }
        );
      }
    });
  }, []);
  
  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className={styles.row}>
            <div className={styles.leftContainer}>
              <div className={styles.block1}>
                <div className={styles.card3}>
                  <Image
                    src={card3}
                    alt="Image 1"
                    layout="responsive"
                    className={styles.cardcss3}
                    width={30}
                    height={60}
                  />
                </div>
                <div className={styles.card2}>
                  <Image
                    src={card2}
                    alt="Image 2"
                    layout="responsive"
                    className={styles.cardcss2}
                    width={60}
                    height={30}
                  />
                </div>
              </div>
              <div className={styles.block2}>
                <div className={styles.card2}>
                  <Image
                    src={card2}
                    alt="Image 4"
                    layout="responsive"
                    className={styles.cardcss2}
                    width={60}
                    height={30}
                  />
                </div>
                <div className={styles.card3}>
                  <Image
                    src={card3}
                    alt="Image 3"
                    layout="responsive"
                    className={styles.cardcss3}
                    width={30}
                    height={60}
                  />
                </div>
              </div>
              

            </div>
            <div className={styles.middleContainer}>
              <div className={styles.largeImage}>
                <Image
                  src={card3}
                  alt="Large Image"
                  layout="responsive"
                  className={styles.LargeCardcss3}
                  width={60}
                  height={30}
                />
              </div>
              <div className={styles.smallImage}>
                <Image
                  src={card1}
                  alt="Small Image"
                  layout="responsive"
                  className={styles.SmallCardcss3}
                  width={50}
                  height={50}
                />
              </div>
           
            </div>

            <div className= {styles.hideContainer}>
              <div className={`${styles.block3}`}>
                <div className={styles.card3}>
                  <Image
                    src={card3}
                    alt="Image 1"
                    layout="responsive"
                    className={styles.cardcss3}
                    width={30}
                    height={60}
                  />
                </div>
                <div className={styles.card2}>
                  <Image
                    src={card2}
                    alt="Image 2"
                    layout="responsive"
                    className={styles.cardcss2}
                    width={60}
                    height={30}
                  />
                </div>
              </div>
              <div className={`${styles.block4}`}>
                <div className={styles.card2}>
                  <Image
                    src={card2}
                    alt="Image 4"
                    layout="responsive"
                    className={styles.cardcss2}
                    width={60}
                    height={30}
                  />
                </div>
                <div className={styles.card3}>
                  <Image
                    src={card3}
                    alt="Image 3"
                    layout="responsive"
                    className={styles.cardcss3}
                    width={30}
                    height={60}
                  />
                </div>
              </div>
              

            </div>
            <div className={styles.rightContainer}>
              <div className={styles.block3}>
                <div className={styles.card2}>
                  <Image
                    src={card2}
                    alt="Image 2"
                    layout="responsive"
                    className={styles.cardcss2}
                    width={60}
                    height={30}
                  />
                </div>
                <div className={styles.card3}>
                  <Image
                    src={card3}
                    alt="Image 1"
                    layout="responsive"
                    className={styles.cardcss3}
                    width={30}
                    height={60}
                  />
                </div>
              </div>
              <div className={styles.block4}>
                <div className={styles.card3}>
                  <Image
                    src={card3}
                    alt="Image 3"
                    layout="responsive"
                    className={styles.cardcss3}
                    width={30}
                    height={60}
                  />
                </div>

                <div className={styles.card2}>
                  <Image
                    src={card2}
                    alt="Image 4"
                    layout="responsive"
                    className={styles.cardcss2}
                    width={60}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}