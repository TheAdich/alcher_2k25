import Image from "next/image";
import SlotCounter from "react-slot-counter";
import styles from "./components.module.css";
const CloudSection = () => {
  return (
    <section className={styles.bgset}>
      <section className="clouds">
        <div>
          <Image
            src="/cloud1u.png"
            alt="cloud"
            width={100}
            height={100}
            className="fu cloud "
          />
          <Image
            src="/cloud1b.png"
            alt="cloud"
            width={100}
            height={100}
            className="fb cloud "
          />
        </div>
        <div>
          <Image
            src="/cloud2u.png"
            alt="cloud"
            width={100}
            height={100}
            className="su cloud "
          />
          <Image
            src="/cloud2d.png"
            alt="cloud"
            width={100}
            height={100}
            className="sd cloud "
          />
        </div>
        <div>
          <Image
            src="/cloud3.png"
            alt="cloud"
            width={100}
            height={100}
            className="tu  cloud "
          />
        </div>
        <div>
          <Image
            src="/cloudlu.png"
            alt="cloud"
            width={100}
            height={100}
            className="lu cloud "
          />
          <Image
            src="/cloudlb.png"
            alt="cloud"
            width={100}
            height={100}
            className="lb cloud "
          />
        </div>
      </section>
      <div className={styles.header}>
        <p className={styles.title}>Our Partners</p>
      </div>
    </section>
  );
};

export default CloudSection;
