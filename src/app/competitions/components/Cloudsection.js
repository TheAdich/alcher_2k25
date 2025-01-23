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
        “Unleash Your Talent, Conquer the Stage – Where Legends Compete!“
        </p>
      </div>
      <div className={styles.content}>
        <p>
        Step into the spotlight with Alcheringa's thrilling competitions! From captivating performances to mind-bending challenges, this is your chance to showcase your skills, compete with the best, and create unforgettable memories. With a wide array of events across music, dance, arts, and more, the stage is set for you to shine. Are you ready to make your mark?
        </p>
      </div>
    </section>
  );
};

export default CloudSection;
