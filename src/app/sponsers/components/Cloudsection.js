import Image from "next/image";
import SlotCounter from "react-slot-counter";
import styles from "./components.module.css";
import Marquee from "react-fast-marquee";
const CloudSection = () => {
  return (
    <section className={styles.bgset}>
      <div className="marquee">
        <div className="marquee1">
          <Marquee direction="right" speed={30}>
            <Image
              src="./cloudRight.svg"
              className="cloudRight cloud"
              width="1000"
              height="1000"
            />
            <Image
              src="./cloudRight.svg"
              className="cloudRight cloud"
              width="1000"
              height="1000"
            />
            <Image
              src="./cloudRight.svg"
              className="cloudRight cloud"
              width="1000"
              height="1000"
            />
          </Marquee>
        </div>
        <div className="marquee2">
          <Marquee speed={10}>
            <Image
              src="./cloudLeft.svg"
              className="cloudLeft cloud"
              width="1000"
              height="1000"
            />
            <Image
              src="./cloudLeft.svg"
              className="cloudLeft cloud"
              width="1000"
              height="1000"
            />
            <Image
              src="./cloudLeft.svg"
              className="cloudLeft cloud"
              width="1000"
              height="1000"
            />
          </Marquee>
        </div>
      </div>
      <div className={styles.header}>
        <p className={styles.title}>Our Partners</p>
      </div>
    </section>
  );
};

export default CloudSection;
