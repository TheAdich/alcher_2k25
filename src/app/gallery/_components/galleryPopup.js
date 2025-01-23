
// import React, { useState, useEffect } from "react";
// import styles from "./galleryPopup.module.css";
// import card1 from "./card1.png";
// import gallArrow1 from "./gallArrow1.svg";
// import gallArrow3 from "./gallArrow3.svg";
// import carImg1 from "./carImg1.png";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Image from "next/image";

// const GalleryPopup = ({ imageSrc, closePopup }) => {
//   const images = [carImg1, card1, carImg1];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleCarouselChange = (index) => {
//     setCurrentIndex(index);
//   };

//   const onSlideChanging = (args) => {
//     console.log(args.currentSlide);
//   };

//   const onSlideChanged = (args) => {
//     console.log(args.currentSlide);
//   };

//   useEffect(() => {
//     const timeout = setTimeout(() => {
   
//     }, 600);

//     return () => clearTimeout(timeout);
//   }, [currentIndex]);

//   return (
//     <div className={styles.popupContainer} onClick={closePopup}>
//       <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
//         <button className={styles.closeButton} onClick={closePopup}>
//           &times;
//         </button>

//         <div
//           className={styles.backgroundImage}
//           style={{
//             backgroundImage: `url(${images[currentIndex].src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center", 
           
//           }}
//         >
//           <button
//             className={styles.arrowButtonLeft}
//             onClick={() =>
//               handleCarouselChange((currentIndex - 1 + images.length) % images.length)
//             }
//           >
//             <Image src={gallArrow3} alt="Left Arrow" width={50} height={50} />
//           </button>

//           <button
//             className={styles.arrowButtonRight}
//             onClick={() => handleCarouselChange((currentIndex + 1) % images.length)}
//           >
//             <Image src={gallArrow1} alt="Right Arrow" width={50} height={50} />
//           </button>
//         </div>

//         <Carousel
//           showThumbs={false}
//           dynamicHeight
//           autoPlay={true}
//           loop={true}
//           slideChanging={onSlideChanging}
//           slideChanged={onSlideChanged}
//           showStatus={false}
//           showIndicators={false}
//           selectedItem={currentIndex}
//           onChange={handleCarouselChange}
//           style={{ width: "100%", height: "100%" }}
//           transitionTime={800}
//           axis="horizontal"
//         >

          
//         </Carousel>

//         {/* <div className={styles.scrollIndicator}>
//           {images.map((_, index) => (
//             <div
//               key={index}
//               className={`${styles.scrollItem} ${currentIndex === index ? styles.active : ""}`}
//               onClick={() => handleCarouselChange(index)}
//             ></div>
//           ))}
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default GalleryPopup;



// import React from "react";
// import styles from "./galleryPopup.module.css";
// import Image from "next/image";

// const GalleryPopup = ({ imageSrc, closePopup }) => {
//   return (
//     <div className={styles.popupContainer} onClick={closePopup}>
//       <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
//         <button className={styles.closeButton} onClick={closePopup}>
//           &times;
//         </button>
//         <Image
//           src={imageSrc}
//           alt="Popup Image"
//           layout="fill" 
//           className={styles.popupImage}
          
//         />
//       </div>
//     </div>
//   );
// };

// export default GalleryPopup;





import React from "react";
import styles from "./galleryPopup.module.css";
import card1 from "./card1.png";
import gallArrow1 from "./gallArrow1.svg";
import gallArrow3 from "./gallArrow3.svg";
import carImg1 from "./carImg1.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const GalleryPopup = ({ imageSrc, closePopup }) => {
  return (
    <div className={styles.popupContainer} onClick={closePopup}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={closePopup}>
          &times;
        </button>

        <div
          className={styles.backgroundImage}
          style={{
            backgroundImage: `url(${imageSrc.src})`,
            backgroundSize: "contain", 
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <button className={styles.arrowButtonLeft} disabled>
            <Image src={gallArrow3} alt="Left Arrow" width={50} height={50} />
          </button>

          <button className={styles.arrowButtonRight} disabled>
            <Image src={gallArrow1} alt="Right Arrow" width={50} height={50} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryPopup;
