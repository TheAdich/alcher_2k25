




"use client"


import { useEffect, useState } from "react";
import styles from "./gallery.module.css";
import card1 from "./card1.svg";
import card2 from "./card2.svg";
import card3 from "./card3.svg";
import Image from "next/image";
import gal1 from "./gal1.svg";
import gal2 from "./gal2.svg";
import gal3 from "./gal3.svg";
import gal4 from "./gal4.svg";
import gal5 from "./gal5.svg";
import gal6 from "./gal6.svg";
import gal7 from "./gal7.svg";
import gal8 from "./gal8.svg";
import gal9 from "./gal9.svg";
import gal10 from "./gal10.svg";

import gal11 from "./gal11.svg";
import gal12 from "./gal12.svg";
import gal13 from "./gal13.svg";
import gal14 from "./gal14.svg";
import gal15 from "./gal15.svg";
import gal16 from "./gal16.svg";
import gal17 from "./gal17.svg";
import gal18 from "./gal18.svg";
import gal19 from "./gal19.svg";
import gal20 from "./gal20.svg";
import gal21 from "./gal21.svg";
import gal22 from "./gal22.svg";
import gal23 from "./gal23.svg";
import gal24 from "./gal24.svg";


import gal27 from "./gal27.svg";
import gal28 from "./gal28.svg";
import gal29 from "./gal29.svg";
import gal30 from "./gal30.svg";

import GalleryPopup from "./galleryPopup";

export default function Gallery() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImageSrc, setPopupImageSrc] = useState(null);

  const [flippingIndex, setFlippingIndex] = useState(null);
  const [isHideContainerActive, setIsHideContainerActive] = useState(false);

  const openPopup = (imageSrc) => {
    setPopupImageSrc(imageSrc);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupImageSrc(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 580) {
        setIsHideContainerActive(true);
      } else {
        setIsHideContainerActive(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const flipRandomImage = () => {
      const totalImages = isHideContainerActive ? 18 : 9;
      const randomIndex = Math.floor(Math.random() * totalImages);
      setFlippingIndex(randomIndex);
     console.log(randomIndex);
      setTimeout(() => {
        setFlippingIndex(null);
      }, 1000);
    };

    const interval = setInterval(flipRandomImage, 3000);
    return () => clearInterval(interval);
  }, [isHideContainerActive]);

  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        {/* {[...Array(2)].map((_, i) => ( */}
          <div  className={styles.row}>
            <div className={styles.leftContainer}>
              <div className={styles.block1}>
                <div className={`${styles.card3} ${flippingIndex === 0 ? styles.flip : ""}`}>
                  <div className={styles.cardFront}>
                    <Image
                      src={gal1}
                      alt="Image 1"
                      onClick={() => openPopup(card3)}
                      className={`${styles.cardcss3} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={gal1}
                      alt="Image 1"
                      onClick={() => openPopup(card3)}
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
                <div className={`${styles.card2} ${flippingIndex === 1 ? styles.flip : ""}`}>
                  <div className={styles.cardFront1}>
                    <Image
                      src={gal10}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack1}>
                    <Image
                      src={gal10}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.block2}>
                <div className={`${styles.card2} ${flippingIndex === 2 ? styles.flip : ""}`}>
                  <div className={styles.cardFront1}>
                    <Image
                      src={gal2}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack1}>
                    <Image
                      src={gal2}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
                <div className={`${styles.card3} ${flippingIndex === 3 ? styles.flip : ""}`}>
                  <div className={styles.cardFront}>
                    <Image
                      src={gal3}
                      alt="Image 1"
                      onClick={() => openPopup(card3)}
                      className={`${styles.cardcss3} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={gal3}
                      alt="Image 1"
                      onClick={() => openPopup(card3)}
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.middleContainer}>
              <div className={`${styles.largeImage} ${flippingIndex === 4 ? styles.flip : ""}`}>
                <div className={styles.cardFront2}>
                  <Image
                    src={gal11}
                    alt="Image 1"
                    onClick={() => openPopup(card3)}
                    className={`${styles.LargeCardcss3} ${styles.cardImage}`}
                    layout="responsive"
                    width={30}
                    height={60}
                  />
                </div>
                <div className={styles.cardBack2}>
                  <Image
                    src={gal11}
                    alt="Image 1"
                    onClick={() => openPopup(card3)}
                    className={`${styles.LargeCardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                    layout="responsive"
                    width={30}
                    height={60}
                  />
                </div>
              </div>
              <div className={`${styles.smallImage} ${flippingIndex === 5 ? styles.flip : ""}`}>
                <div className={styles.cardFront}>
                  <Image
                    src={gal5}
                    alt="Image 1"
                    onClick={() => openPopup(card1)}
                    className={`${styles.SmallCardcss3} ${styles.cardImage}`}
                    layout="responsive"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={styles.cardBack}>
                  <Image
                    src={gal5}
                    alt="Image 1"
                    onClick={() => openPopup(card1)}
                    className={`${styles.SmallCardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                    layout="responsive"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.hideContainer} ${isHideContainerActive ? styles.active : ""}`}>
              <div className={styles.block3}>
                <div className={`${styles.card3} ${flippingIndex === 5 ? styles.flip : ""}`}>
                  <div className={styles.cardFront}>
                    <Image
                      src={gal14}
                      alt="Image 1"
                      onClick={() => openPopup(card3)}
                      className={`${styles.cardcss3} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={gal14}
                      alt="Image 1"
                      onClick={() => openPopup(card3)}
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
                <div className={`${styles.card2} ${flippingIndex === 6 ? styles.flip : ""}`}>
                  <div className={styles.cardFront1}>
                    <Image
                      src={gal13}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack1}>
                    <Image
                      src={gal13}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.block4}>
                <div className={`${styles.card2} ${flippingIndex === 7 ? styles.flip : ""}`}>
                  <div className={styles.cardFront1}>
                    <Image
                      src={gal12}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack1}>
                    <Image
                      src={gal12}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
                <div className={`${styles.card3} ${flippingIndex === 8 ? styles.flip : ""}`}>
                  <div className={styles.cardFront}>
                    <Image
                      src={gal6}
                      alt="Image 1"
                      onClick={() => openPopup(card3)}
                      className={`${styles.cardcss3} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={gal6}
                      alt="Image 1"
                      onClick={() => openPopup(card3)}
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.block3}>
                <div className={`${styles.card2} ${flippingIndex === 6 ? styles.flip : ""}`}>
                  <div className={styles.cardFront1}>
                    <Image
                      src={gal13}
                      onClick={() => openPopup(card2)}
                      alt="Image 2"
                      layout="responsive"
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      width={60}
                      height={30}
                    />
                  </div>
                  <div className={styles.cardBack1}>
                    <Image
                      src={gal13}
                      onClick={() => openPopup(card2)}
                      alt="Image 2"
                      layout="responsive"
                      className={`${styles.cardcss2} ${styles.cardImage} ${styles.cardBackImage}`}
                      width={60}
                      height={30}
                    />
                  </div>
                </div>
                <div className={`${styles.card3} ${flippingIndex === 7 ? styles.flip : ""}`}>
                  <div className={styles.cardFront}>
                    <Image
                      src={gal14}
                      onClick={() => openPopup(card3)}
                      alt="Image 3"
                      layout="responsive"
                      className={`${styles.cardcss3} ${styles.cardImage}`}
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={gal14}
                      onClick={() => openPopup(card3)}
                      alt="Image 3"
                      layout="responsive"
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.block4}>
           
                <div className={`${styles.card3} ${flippingIndex === 8 ? styles.flip : ""}`}>
                  <div className={styles.cardFront}>
                    <Image
                      src={gal6}
                      onClick={() => openPopup(card3)}
                      alt="Image 1"
                      layout="responsive"
                      className={`${styles.cardcss3} ${styles.cardImage}`}
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={gal6}
                      onClick={() => openPopup(card3)}
                      alt="Image 1"
                      layout="responsive"
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
                <div className={`${styles.card2} ${flippingIndex === 9 ? styles.flip : ""}`}>
                  <div className={styles.cardFront1}>
                    <Image
                      src={gal12}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack1}>
                    <Image
                      src={gal12}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div  className={styles.row}>
            <div className={styles.leftContainer}>
              <div className={styles.block1}>
                <div className={`${styles.card3} ${flippingIndex === 2 ? styles.flip : ""}`}>
                  <div className={styles.cardFront}>
                    <Image
                      src={gal17}
                      alt="Image 1"
                      onClick={() => openPopup(card3)}
                      className={`${styles.cardcss3} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={gal17}
                      alt="Image 1"
                      onClick={() => openPopup(card3)}
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
                <div className={`${styles.card2} ${flippingIndex === 4 ? styles.flip : ""}`}>
                  <div className={styles.cardFront1}>
                    <Image
                      src={gal21}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack1}>
                    <Image
                      src={gal21}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.block2}>
                <div className={`${styles.card2} ${flippingIndex === 3 ? styles.flip : ""}`}>
                  <div className={styles.cardFront1}>
                    <Image
                      src={gal19}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack1}>
                    <Image
                      src={gal19}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
                <div className={`${styles.card3} ${flippingIndex === 1 ? styles.flip : ""}`}>
                  <div className={styles.cardFront}>
                    <Image
                      src={gal20}
                      alt="Image 1"
                      onClick={() => openPopup(card3)}
                      className={`${styles.cardcss3} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={gal20}
                      alt="Image 1"
                      onClick={() => openPopup(card3)}
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.middleContainer}>
              <div className={`${styles.largeImage} ${flippingIndex === 7 ? styles.flip : ""}`}>
                <div className={styles.cardFront2}>
                  <Image
                    src={gal22}
                    alt="Image 1"
                    onClick={() => openPopup(card3)}
                    className={`${styles.LargeCardcss3} ${styles.cardImage}`}
                    layout="responsive"
                    width={30}
                    height={60}
                  />
                </div>
                <div className={styles.cardBack2}>
                  <Image
                    src={gal22}
                    alt="Image 1"
                    onClick={() => openPopup(card3)}
                    className={`${styles.LargeCardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                    layout="responsive"
                    width={30}
                    height={60}
                  />
                </div>
              </div>
              <div className={`${styles.smallImage} ${flippingIndex === 8 ? styles.flip : ""}`}>
                <div className={styles.cardFront}>
                  <Image
                    src={gal23}
                    alt="Image 1"
                    onClick={() => openPopup(card1)}
                    className={`${styles.SmallCardcss3} ${styles.cardImage}`}
                    layout="responsive"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={styles.cardBack}>
                  <Image
                    src={gal23}
                    alt="Image 1"
                    onClick={() => openPopup(card1)}
                    className={`${styles.SmallCardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                    layout="responsive"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.hideContainer} ${isHideContainerActive ? styles.active : ""}`}>
              <div className={styles.block3}>
                <div className={`${styles.card3} ${flippingIndex === 6 ? styles.flip : ""}`}>
                  <div className={styles.cardFront}>
                    <Image
                      src={gal27}
                      alt="Image 1"
                      onClick={() => openPopup(card3)}
                      className={`${styles.cardcss3} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={gal27}
                      alt="Image 1"
                      onClick={() => openPopup(card3)}
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
                <div className={`${styles.card2} ${flippingIndex === 7 ? styles.flip : ""}`}>
                  <div className={styles.cardFront1}>
                    <Image
                      src={gal30}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack1}>
                    <Image
                      src={gal30}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.block4}>
                <div className={`${styles.card2} ${flippingIndex === 8 ? styles.flip : ""}`}>
                  <div className={styles.cardFront1}>
                    <Image
                      src={gal29}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack1}>
                    <Image
                      src={gal29}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
                <div className={`${styles.card3} ${flippingIndex === 4 ? styles.flip : ""}`}>
                  <div className={styles.cardFront}>
                    <Image
                      src={gal28}
                      alt="Image 1"
                      onClick={() => openPopup(card3)}
                      className={`${styles.cardcss3} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={gal28}
                      alt="Image 1"
                      onClick={() => openPopup(card3)}
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.block3}>
                <div className={`${styles.card2} ${flippingIndex === 2 ? styles.flip : ""}`}>
                  <div className={styles.cardFront1}>
                    <Image
                      src={gal30}
                      onClick={() => openPopup(card2)}
                      alt="Image 2"
                      layout="responsive"
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      width={60}
                      height={30}
                    />
                  </div>
                  <div className={styles.cardBack1}>
                    <Image
                      src={gal30}
                      onClick={() => openPopup(card2)}
                      alt="Image 2"
                      layout="responsive"
                      className={`${styles.cardcss2} ${styles.cardImage} ${styles.cardBackImage}`}
                      width={60}
                      height={30}
                    />
                  </div>
                </div>
                <div className={`${styles.card3} ${flippingIndex === 9 ? styles.flip : ""} ${styles.card3a}`}>
                  <div className={styles.cardFront}>
                    <Image
                      src={gal27}
                      onClick={() => openPopup(card3)}
                      alt="Image 3"
                      layout="responsive"
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardcss3a}`}
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={gal27}
                      onClick={() => openPopup(card3)}
                      alt="Image 3"
                      layout="responsive"
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.block4}>
           
                <div className={`${styles.card3} ${flippingIndex === 8 ? styles.flip : ""}`}>
                  <div className={styles.cardFront}>
                    <Image
                      src={gal28}
                      onClick={() => openPopup(card3)}
                      alt="Image 1"
                      layout="responsive"
                      className={`${styles.cardcss3} ${styles.cardImage}`}
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={gal28}
                      onClick={() => openPopup(card3)}
                      alt="Image 1"
                      layout="responsive"
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
                <div className={`${styles.card2} ${flippingIndex === 6 ? styles.flip : ""}`}>
                  <div className={styles.cardFront1}>
                    <Image
                      src={gal29}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack1}>
                    <Image
                      src={gal29}
                      alt="Image 1"
                      onClick={() => openPopup(card2)}
                      className={`${styles.cardcss2} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      {isPopupOpen && <GalleryPopup imageSrc={popupImageSrc} closePopup={closePopup} />}
    </div>
  );
}