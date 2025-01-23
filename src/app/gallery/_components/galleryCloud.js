import Image from "next/image";
import SlotCounter from "react-slot-counter";
import styles from "./galleryCloud.module.css";
import Marquee from "react-fast-marquee";
import { Color } from 'three';
const GalleryCloud = () => {
  return (
    <div className={styles.galleryclouds}>
    <div className={styles.galleryclouds1}>
        <Marquee speed={10} >
            <Image src="./cloudLeft.svg" width="1000" height="1000" />
            <Image src="./cloudLeft.svg" width="1000" height="1000" />
            <Image src="./cloudLeft.svg" width="1000" height="1000" />
        </Marquee>
    </div>
    <div className={styles.galleryclouds2}>
        <Marquee direction="right" speed={30} >
            <Image src="./cloudRight.svg" width="1000" height="1000" />
            <Image src="./cloudRight.svg" width="1000" height="1000" />
            <Image src="./cloudRight.svg" width="1000" height="1000" />
        </Marquee>
    </div>
    <div className={styles.galleryHeader}>
    <div className={styles.heading}>Gallery</div>
    <div className={styles.topsubheading}>Relive the Magic :<br/> A Journey Through Alcheringa Moments</div>
       
        
        <div className={styles.contents}>
        <p>
        Step into the vibrant world of Alcheringa through our gallery – a visual journey celebrating the energy, creativity, and spirit of India’s largest cultural festival. From breathtaking performances to unforgettable moments of joy, this is where memories come alive. Explore snapshots of mesmerizing music, dazzling dance, and the unique essence of our cultural heritage. Whether you’re reliving cherished memories or experiencing the magic for the first time, this gallery captures the heart and soul of Alcheringa. Dive in and witness the stories, emotions, and excitement that make Alcheringa truly extraordinary!
        </p>
      </div></div>
</div>
  );
};

export default GalleryCloud;