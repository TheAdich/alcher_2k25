import Image from "next/image";
import SlotCounter from "react-slot-counter";
import styles from "./components.module.css";
import Marquee from "react-fast-marquee";
import { Color } from 'three';

const CloudSection = ({event}) => {
  const { name, topsubheading, contents } = event[0];
  return (
    <div className={styles.galleryclouds}>
      <div className={styles.galleryclouds1}>
        <Marquee speed={10}>
          <Image
            src="/cloudLeft.svg"
            width="1000"
            height="1000"
            alt="section"
          />
          <Image
            src="/cloudLeft.svg"
            width="1000"
            height="1000"
            alt="section"
          />
          <Image
            src="/cloudLeft.svg"
            width="1000"
            height="1000"
            alt="section"
          />
        </Marquee>
      </div>
      <div className={styles.galleryclouds2}>
        <Marquee direction="right" speed={30}>
          <Image
            src="/cloudRight.svg"
            width="1000"
            height="1000"
            alt="section"
          />
          <Image
            src="/cloudRight.svg"
            width="1000"
            height="1000"
            alt="section"
          />
          <Image
            src="/cloudRight.svg"
            width="1000"
            height="1000"
            alt="section"
          />
        </Marquee>
      </div>
      <div className={styles.galleryHeader}>
        <div className={styles.heading}>{name}</div>
        <div className={styles.topsubheading}>{topsubheading}</div>

        <div className={styles.contents}>
          <p>{contents}</p>
        </div>
      </div>
    </div>
  );
};

export default CloudSection;