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
              alt="cloud"
            />
            <Image
              src="./cloudRight.svg"
              className="cloudRight cloud"
              width="1000"
              height="1000"
              alt="cloud"
            />
            <Image
              src="./cloudRight.svg"
              className="cloudRight cloud"
              width="1000"
              height="1000"
              alt="cloud"
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
              alt="cloud"
            />
            <Image
              src="./cloudLeft.svg"
              className="cloudLeft cloud"
              width="1000"
              height="1000"
              alt="cloud"
            />
            <Image
              src="./cloudLeft.svg"
              className="cloudLeft cloud"
              width="1000"
              height="1000"
              alt="cloud"
            />
          </Marquee>
        </div>
      </div>
      <div className={styles.header}>
        <p className={styles.title}>Competitions</p>
        <p className={styles.oneline}>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ab?
          Fuga, libero reprehenderit quidem nobis"
        </p>
      </div>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tristique purus eu libero egestas, sed bibendum felis tincidunt. Proin
          ultricies viverra mollis. Nullam vel quam tortor. Duis egestas libero
          velit, vel ullamcorper ipsum condimentum ac. Suspendisse ac porttitor
        </p>
      </div>
    </section>
  );
};

export default CloudSection;
