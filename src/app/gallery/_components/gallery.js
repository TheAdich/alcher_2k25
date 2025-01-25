




"use client"


import { useEffect, useState } from "react";
import styles from "./gallery.module.css";
import Image from "next/image";
import gal1 from "./gal1.png";
import gal2 from "./gal2.png";
import gal3 from "./gal3.png";
import gal4 from "./gal4.png";
import gal5 from "./gal5.png";
import gal6 from "./gal6.png";
import gal7 from "./gal7.png";
import gal8 from "./gal8.png";
import gal9 from "./gal9.png";
import gal10 from "./gal10.png";
import frame1 from "./frame1.png";
import frame2 from "./frame2.png";
import frame3 from "./frame3.png";
import frame5 from "./frame5.png";
import frame4 from "./frame4.png";
import gal17 from "./gal17.png";
import gal19 from "./gal19.png";
import gal16 from "./gal16.png";
import gal20 from "./gal20.png";
import gal18 from "./gal18.png";
import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";

import GalleryPopup from "./galleryPopup";
import GalleryCloud from "./galleryCloud";

function Gallery() {
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
                      // // onClick ={( => openPopup(gal1)}
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
                      // // onClick ={( => openPopup(gal1)}
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
                <div className={`${styles.card2} ${flippingIndex === 1 ? styles.flip : ""}`}>
                  <div className={styles.cardFront12}>
                    <Image
                      src={gal10}
                      alt="Image 1"
                      // // onClick ={( => openPopup(gal10)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack12}>
                    <Image
                      src={gal10}
                      alt="Image 1"
                      // // onClick ={( => openPopup(gal10)}
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
                  <div className={styles.cardFront12}>
                    <Image
                      src={gal2}
                      alt="Image 1"
                      // // onClick ={( => openPopup(gal2)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack12}>
                    <Image
                      src={gal2}
                      alt="Image 1"
                      // // onClick ={( => openPopup(gal2)}
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
                      // // onClick ={( => openPopup(gal3)}
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
                      // // onClick ={( => openPopup(gal3)}
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
                    src={gal4}
                    alt="Image 1"
                    // // onClick ={( => openPopup(gal4)}
                    className={`${styles.LargeCardcss3} ${styles.cardImage}`}
                    layout="responsive"
                    width={30}
                    height={60}
                  />
                </div>
                <div className={styles.cardBack2}>
                  <Image
                    src={gal4}
                    alt="Image 1"
                    // // onClick ={( => openPopup(gal4)}
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
                    // // onClick ={( => openPopup(gal5)}
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
                    // // onClick ={( => openPopup(gal5)}
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
                      src={gal6}
                      alt="Image 1"
                      // // onClick ={( => openPopup(gal6)}
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
                      // // onClick ={( => openPopup(gal6)}
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
                <div className={`${styles.card2} ${flippingIndex === 6 ? styles.flip : ""}`}>
                  <div className={styles.cardFront12}>
                    <Image
                      src={gal8}
                      alt="Image 1"
                      // // onClick ={( => openPopup(gal8)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack12}>
                    <Image
                      src={gal8}
                      alt="Image 1"
                      // // onClick ={( => openPopup(gal8)}
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
                  <div className={styles.cardFront12}>
                    <Image
                      src={frame5}
                      alt="Image 1"
                      // // onClick ={( => openPopup(frame5)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack12}>
                    <Image
                      src={frame5}
                      alt="Image 1"
                      // // onClick ={( => openPopup(frame5)}
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
                      src={gal4}
                      alt="Image 1"
                      // // onClick ={( => openPopup(gal4)}
                      className={`${styles.cardcss3} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={gal4}
                      alt="Image 1"
                      // // onClick ={( => openPopup(gal4)}
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
                  <div className={styles.cardFront12}>
                    <Image
                      src={gal8}
                      // // onClick ={( => openPopup(gal8)}
                      alt="Image 2"
                      layout="responsive"
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      width={60}
                      height={30}
                    />
                  </div>
                  <div className={styles.cardBack12}>
                    <Image
                      src={gal8}
                      // // onClick ={( => openPopup(gal8)}
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
                      src={gal7}
                      // // onClick ={( => openPopup(gal7)}
                      alt="Image 3"
                      layout="responsive"
                      className={`${styles.cardcss3} ${styles.cardImage}`}
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={gal7}
                      // // onClick ={( => openPopup(gal7)}
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
                      // // onClick ={( => openPopup(gal6)}
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
                      // // onClick ={( => openPopup(gal6)}
                      alt="Image 1"
                      layout="responsive"
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
                <div className={`${styles.card2} ${flippingIndex === 9 ? styles.flip : ""}`}>
                  <div className={styles.cardFront12}>
                    <Image
                      src={gal9}
                      alt="Image 1"
                      // // onClick ={( => openPopup(gal9)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack12}>
                    <Image
                      src={gal9}
                      alt="Image 1"
                      // // onClick ={( => openPopup(gal9)}
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
                      // onClick ={( => openPopup(gal17)}
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
                      // onClick ={( => openPopup(gal17)}
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
                <div className={`${styles.card2} ${flippingIndex === 4 ? styles.flip : ""}`}>
                  <div className={styles.cardFront12}>
                    <Image
                      src={gal18}
                      alt="Image 1"
                      // onClick ={( => openPopup(gal18)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack12}>
                    <Image
                      src={gal18}
                      alt="Image 1"
                      // onClick ={( => openPopup(gal18)}
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
                  <div className={styles.cardFront12}>
                    <Image
                      src={gal19}
                      alt="Image 1"
                      // onClick ={( => openPopup(gal19)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack12}>
                    <Image
                      src={gal19}
                      alt="Image 1"
                      // onClick ={( => openPopup(gal19)}
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
                      // onClick ={( => openPopup(gal20)}
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
                      // onClick ={( => openPopup(gal20)}
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
                    src={frame1}
                    alt="Image 1"
                    // onClick ={( => openPopup(frame1)}
                    className={`${styles.LargeCardcss3} ${styles.cardImage}`}
                    layout="responsive"
                    width={30}
                    height={60}
                  />
                </div>
                <div className={styles.cardBack2}>
                  <Image
                    src={frame1}
                    alt="Image 1"
                    // onClick ={( => openPopup(frame1)}
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
                    src={frame2}
                    alt="Image 1"
                    // onClick ={( => openPopup(frame2)}
                    className={`${styles.SmallCardcss3} ${styles.cardImage}`}
                    layout="responsive"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={styles.cardBack}>
                  <Image
                    src={frame2}
                    alt="Image 1"
                    // onClick ={( => openPopup(frame2)}
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
                      src={frame1}
                      alt="Image 1"
                      // onClick ={( => openPopup(frame1)}
                      className={`${styles.cardcss3} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={frame1}
                      alt="Image 1"
                      // onClick ={( => openPopup(frame1)}
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
                <div className={`${styles.card2} ${flippingIndex === 7 ? styles.flip : ""}`}>
                  <div className={styles.cardFront12}>
                    <Image
                      src={gal9}
                      alt="Image 1"
                      // onClick ={( => openPopup(gal9)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack12}>
                    <Image
                      src={gal9}
                      alt="Image 1"
                      // onClick ={( => openPopup(gal9)}
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
                  <div className={styles.cardFront12}>
                    <Image
                      src={frame3}
                      alt="Image 1"
                      // onClick ={( => openPopup(frame3)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack12}>
                    <Image
                      src={frame3}
                      alt="Image 1"
                      // onClick ={( => openPopup(frame3)}
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
                      src={frame4}
                      alt="Image 1"
                      // onClick ={( => openPopup(frame4)}
                      className={`${styles.cardcss3} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={frame4}
                      alt="Image 1"
                      // onClick ={( => openPopup(frame4)}
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
                  <div className={styles.cardFront12}>
                    <Image
                      src={frame5}
                      // onClick ={( => openPopup(frame5)}
                      alt="Image 2"
                      layout="responsive"
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      width={60}
                      height={30}
                    />
                  </div>
                  <div className={styles.cardBack12}>
                    <Image
                      src={frame5}
                      // onClick ={( => openPopup(frame5)}
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
                      src={gal16}
                      // onClick ={( => openPopup(gal16)}
                      alt="Image 3"
                      layout="responsive"
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardcss3a}`}
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={gal16}
                      // onClick ={( => openPopup(gal16)}
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
                      src={frame4}
                      // onClick ={( => openPopup(frame4)}
                      alt="Image 1"
                      layout="responsive"
                      className={`${styles.cardcss3} ${styles.cardImage}`}
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      src={frame4}
                      // onClick ={( => openPopup(frame4)}
                      alt="Image 1"
                      layout="responsive"
                      className={`${styles.cardcss3} ${styles.cardImage} ${styles.cardBackImage}`}
                      width={30}
                      height={60}
                    />
                  </div>
                </div>
                <div className={`${styles.card2} ${flippingIndex === 6 ? styles.flip : ""}`}>
                  <div className={styles.cardFront12}>
                    <Image
                      src={frame3}
                      alt="Image 1"
                      // onClick ={( => openPopup(frame3)}
                      className={`${styles.cardcss2} ${styles.cardImage}`}
                      layout="responsive"
                      width={30}
                      height={60}
                    />
                  </div>
                  <div className={styles.cardBack12}>
                    <Image
                      src={frame3}
                      alt="Image 1"
                      // onClick ={( => openPopup(frame3)}
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

function page() {
  return (
    <>
    <GalleryCloud/>
    <Gallery/>
      
    </>
  )
}

export default page
