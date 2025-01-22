import Image from "next/image";
import SlotCounter from "react-slot-counter";
import styles from "./cloudsection.module.css";
import Marquee from "react-fast-marquee";
import { Color } from 'three';
const CloudSection = () => {
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
    <div className={styles.topsubheading}>“Unite for change, ignite hope, and
        let people's voices shape our journey.“</div>
       
        
        <div className={styles.contents}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tristique purus eu libero egestas, sed bibendum felis tincidunt. Proin
          ultricies viverra mollis. Nullam vel quam tortor. Duis egestas libero
          velit, vel ullamcorper ipsum condimentum ac. Suspendisse ac porttitor
        </p>
      </div></div>
</div>
  );
};

export default CloudSection;