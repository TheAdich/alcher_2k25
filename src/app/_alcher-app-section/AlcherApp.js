"use client";

import styles from "./alcherApp.module.css";
import Image from "next/image";
// import pic from './_components/image.png';

// import GetAppBtn from './_components/getAppBtn';
import Text from "./_components/Text";
import VanillaTilt from "./vanila-tilt";
import { useEffect } from "react";

// For mobile rendering
// import Line from './_components/Line';
// import Feeling_Lost from './_components/Feeling_Lost';
// import Noneedworry from './_components/Noneedworry';
// import Wegotyou from './_components/wegotyou';
// import Covered from './_components/Covered';
// import Atext from './_components/Atext';
// import Btext from './_components/Btext';
// import B1text from './/_components/B1text';

const AlcherApp = () => {
  // Initialize VanillaTilt
  useEffect(() => {
    if (typeof window !== "undefined") {
      const tiltElements = document.querySelectorAll("[data-tilt]");
      VanillaTilt.init(tiltElements);
    }
  }, []);

  return (
    <div className={styles.alcherApp}>
      <div className={styles.mobile}>
        <div className={styles.flex}>
          <div className={`${styles.phone} ${styles.tiltcard}`} data-tilt>
            <Image
              src="/app.png"
              alt="Alcher App"
              width={300}
              height={600}
              className={styles.device}
            />
          </div>
        </div>

        {/* These components for mobile screens  */}

        {/* <Feeling_Lost className={styles.feelinglost} />
        <Noneedworry className={styles.noneed}/>
        <Wegotyou className={styles.wegotyou} />
        <Covered className={styles.covered} />
        <Atext className={styles.atext} />
        <B1text className={styles.b1text} />  */}
        {/* /* <Btext className={styles.btext} /> */}

        <Image
          src="./mobile-text.svg"
          alt="mobile-text"
          width={500}
          height={500}
          className={styles.mobileText}
        />

        <Image
          src="./app_text.svg"
          alt="Alcher App"
          width={300}
          height={600}
          className={styles.text}
        />
        {/* <Text className={styles.text} /> */}

        <a href="https://play.google.com/store/apps/details?id=com.alcheringa.alcheringa2022">
          <Image
            src="./app_btn.svg"
            alt="Alcher App"
            width={300}
            height={600}
            className={styles.getAppBtn}
          />
        </a>
        {/* <GetAppBtn className={styles.getAppBtn} />  */}
      </div>
    </div>
  );
};

export default AlcherApp;
