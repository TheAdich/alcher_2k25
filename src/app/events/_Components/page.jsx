"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./events.module.css";
import Loading from "../loading";

import image1 from "./_Components/Group38.png";
import image2 from "./_Components/image2.png";
import image3 from "./_Components/next.png";
import image4 from "./_Components/Group38.png";
import image5 from "./_Components/image2.png";

import enter from "./_Components/Group39.svg";
import next from "./_Components/next.png";

const images = [
  { src: image1, name: "Pronites", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium, consectetur quaerat illum labore reiciendis odit pariatur eligendi fuga quis optio provident dolorum recusandae et sed autem in iusto sequi." },
  { src: image2, name: "Proshows", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium, consectetur quaerat illum labore reiciendis odit pariatur eligendi fuga quis optio provident dolorum recusandae et sed autem in iusto sequi." },
  { src: image3, name: "Creator's Camp", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium, consectetur quaerat illum labore reiciendis odit pariatur eligendi fuga quis optio provident dolorum recusandae et sed autem in iusto sequi." },
  { src: image4, name: "Critical Damage", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium, consectetur quaerat illum labore reiciendis odit pariatur eligendi fuga quis optio provident dolorum recusandae et sed autem in iusto sequi." },
  { src: image5, name: "Flickeringa", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium, consectetur quaerat illum labore reiciendis odit pariatur eligendi fuga quis optio provident dolorum recusandae et sed autem in iusto sequi." },
];


export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);
  const [loading, setLoading] = useState(true);

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

          <button className={styles.enter}>
            <Image
              src={enter}
              className={styles.enterImage}
              quality={100}
              alt="enter button"
            />
          </button>
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
            <p className={styles.eventName}>{images[currentIndex].name}</p>
          </div>
          <div className={`${styles.right} ${isExpanded ? styles.up : ""}`}>
            <p>Day 0 : Saaz</p>
            <hr />
            <p>Day 0 : Juggernaut</p>
            <hr />
            <p>Day 0 : Saaz</p>
            <hr />
            <p>Day 0 : Saaz</p>
            <hr />
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
                <div className={styles.lower}>
                  <button className={styles.enter}>
                    <Image
                      src={enter}
                      className={styles.enterImage}
                      quality={100}
                      alt="enter button"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

    </main>
  );
}
