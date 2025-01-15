
import React, { useState } from "react";
import styles from "./galleryPopup.module.css";
import card1 from "./card1.svg";
import gallArrow1 from "./gallArrow1.svg";
import gallArrow3 from "./gallArrow3.svg";
import carImg1 from "./carImg1.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const GalleryPopup = ({ imageSrc, closePopup }) => {
  const images = [carImg1, carImg1, carImg1]; 
  const [currentIndex, setCurrentIndex] = useState(0); 

  const handleCarouselChange = (index) => {
    setCurrentIndex(index); 
  };

  return (
    <div className={styles.popupContainer} onClick={closePopup}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closePopup}>
          &times;
        </button>
        <div
          className={styles.backgroundImage}
          style={{
            backgroundImage: `url(${images[currentIndex].src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
         
          <button
            className={styles.arrowButtonLeft}
            onClick={() =>
              handleCarouselChange((currentIndex - 1 + images.length) % images.length)
            }
          >
            <Image src={gallArrow3} alt="Left Arrow" width={50} height={50} />
          </button>

        
          <button
            className={styles.arrowButtonRight}
            onClick={() => handleCarouselChange((currentIndex + 1) % images.length)}
          >
            <Image src={gallArrow1} alt="Right Arrow" width={50} height={50} />
          </button>
          
        </div>
        <Carousel
          showThumbs={false} 
          dynamicHeight
          autoPlay
          showStatus={false}
          showIndicators={false} 
          selectedItem={currentIndex}
          onChange={handleCarouselChange}
        >
          
        </Carousel>
        <div className={styles.scrollIndicator}>
            {images.map((_, index) => (
              <div
                key={index}
                className={`${styles.scrollItem} ${currentIndex === index ? styles.active : ""}`}
                onClick={() => handleCarouselChange(index)}
              ></div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default GalleryPopup;
