import Image from "next/image";
import SlotCounter from "react-slot-counter";
import styles from "./kartavyaCloud.module.css";
import Marquee from "react-fast-marquee";
import { Color } from 'three';

const KartavyaCloud = () => {
  return (
    <div className={styles.kartavyaclouds} style={{position: "relative"}}>
    <div className={styles.kartavyaclouds1}>
        <Marquee speed={10} >
            <Image src="/cloudLeft.png" width="1000" height="1000" />
            <Image src="/cloudLeft.png" width="1000" height="1000" />
            <Image src="/cloudLeft.png" width="1000" height="1000" />
        </Marquee>
    </div>
    <div className={styles.kartavyaclouds2}>
        <Marquee direction="right" speed={30} >
            <Image src="/cloudRight.png" width="1000" height="1000" />
            <Image src="/cloudRight.png" width="1000" height="1000" />
            <Image src="/cloudRight.png" width="1000" height="1000" />
        </Marquee>
    </div>
   
    <div className={styles.heading}>Kartavya</div>
    <div className={styles.topsubheading}>“Unite for change, ignite hope, and
        let people's voices shape our journey.“</div>
       
        
        <div className={styles.contents}>
        <p>
        Kartavya is the social responsibility module of Alcheringa, IIT Guwahati, dedicated to driving meaningful change beyond the celebrations. Through awareness campaigns, drives, and impactful initiatives, Kartavya embodies the spirit of giving back to society. Each year, it focuses on a cause that matters, inspiring individuals to take responsibility and contribute to a better world. Join us in making a difference—because change begins with Kartavya!
        </p>
      </div></div>

  );
};

export default KartavyaCloud;