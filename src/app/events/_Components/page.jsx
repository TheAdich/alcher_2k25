"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./events.module.css";
import Link from "next/link";

// import Loading from "../loading";

import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./coming.png";
import image4 from "./coming.png";
import image5 from "./coming.png";

import enter from "./Group39.svg";
import next from "./next.png";

const images = [
  { src: image1, name: "Pronites",link: "/events/pronites", description: "Pronites are the ultimate music experience, featuring electrifying performances by top artists and bands. Get ready for four unforgettable nights of music, dance, and pure energy!" },
  { src: image2, name: "Proshows",link: "/events/proshows", description: "Proshows bring together breathtaking acts and spellbinding performances by world-class entertainers. From jaw-dropping stunts to mesmerizing displays, these shows are bound to leave you awestruck!" },
  { src: image3, name: "Creator's Camp",link: "/events/creators_camp", description: "Creator’s Camp is the hub for innovation and creativity, offering hands-on workshops and insightful sessions with industry experts. Unleash your imagination and learn from the best!" },
  { src: image4, name: "Critical Damage",link: "/events/critical_damage", description: "Critical Damage is where the energy hits the roof with adrenaline-pumping gaming battles and esports tournaments. Challenge yourself and prove your dominance in this ultimate gaming arena!" },
  { src: image5, name: "Flickeringa",link: "/events/flickeringa", description: "Flickeringa is the vibrant heart of Alcheringa, brimming with fun, excitement, and unforgettable experiences. Immerse yourself in a world of joy and let your spirit soar!" },
];



export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
//   const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Set a 3-second timeout to disable loading
  //   const timer = setTimeout(() => setLoading(false), 3000);
  //   return () => clearTimeout(timer); // Clean up the timer on component unmount
  // }, []);

  // // Display the loading page while `loading` is true
  // if (loading) {
  //   return <Loading />;
  // }

  const assignImage = (index) => {
    setIsExpanded(false);
    setTimeout(() => {
      setCurrentIndex(index); 
      handleExpand();
    }, 1000);
  };

  const handleExpand = () => setIsExpanded(true);

  const handleNext = () => {
    // Step 1: Perform refresh
    setIsExpanded(false); // Collapse the component briefly
    setTimeout(() => {
      // setIsExpanded(true); // Re-expand the component after refresh

      // Step 2: Assign the next image
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);

      // Step 3: Execute the Click Me function
      handleExpand();
    }, 1000); // Timeout ensures the "refresh" effect is noticeable
  };

  return (
    <main>
      <div className={styles.mainPage}>
        <div className={`${styles.left} ${isExpanded ? styles.visible : ""}`}>
          <h1 className={styles.heading}>{images[currentIndex].name}</h1>
          <div className={styles.description}>
            <p className={styles.descriptionTxt}>
              {images[currentIndex].description}
            </p>
          </div>
          <div>
          {(currentIndex === 0||currentIndex === 1) && (
          <Link className={styles.enter} href={images[currentIndex].link}>
            <Image
              src={enter}
              className={styles.enterImage}
              quality={100}
              alt="enter button"
            />
          </Link>
          )}
          </div>
        </div>
        <div className={styles.center}>
          <div
            className={`${styles.mainImage} ${
              isExpanded ? styles.mainImageExpanded : ""
            }`}
          >
            <Image
              src={images[currentIndex].src}
              className={styles.image1}
              alt="show's image"
              quality={100}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={`${styles.box1} ${isExpanded ? styles.box1Visible : ""}`}>
          <div className={styles.nextButton} onClick={handleNext}>
            <Image src={next} className={styles.nextImage} alt="next button" />
            <p className={styles.eventName}>{images[currentIndex+1].name}</p>
          </div>
          <div className={`${styles.right} ${isExpanded ? styles.up : ""}`}>
          {currentIndex === 0 && (
            
              <><p>Day 0 : Saaz</p><hr /><p>Day 1 : Juggernaut</p><hr /><p>Day 2 : Crescendo</p><hr /><p>Day 3 : Blitz</p><hr /></>
            
          )}
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.imagelinks}>
          {images.map((image, index) => (
            <button
              key={index}
              className={`${styles.link} ${
                currentIndex === index ? styles.selected : ""
              }`}
              onClick={() => assignImage(index)}
            >
              <p className={styles.txt}>{image.name}</p>
            </button>
          ))}
        </div>
      </footer>
        <div className={styles.mobileview}>
          <div className={styles.list}>
            {images.map((image, index) => (
              <div key={index} className={styles.event}>
                <div className={styles.upper}>
                  <div className={styles.upperLeft}>
                    <h1 className={styles.heading}>{image.name}</h1>
                  </div>
                  <div className={styles.center}>
                    <div
                      className={`${styles.mainImage} ${
                        isExpanded ? styles.mainImageExpanded : ""
                      }`}
                    >
                      <Image
                        src={image.src}
                        className={styles.image1}
                        alt={`${image.name} image`}
                        quality={100}
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.description}>
                  <p className={styles.descriptionTxt}>{image.description}</p>
                </div>
                
                {(index === 0||index === 1) && (
                <div className={styles.lower}>
                  <Link className={styles.enter} href={image.link}>
                    <Image
                      src={enter}
                      className={styles.enterImage}
                      quality={100}
                      alt="enter button"
                    />
                  </Link>
                  </div>
                  )}
                
              </div>
            ))}
          </div>
        </div>

    </main>
  );
}
