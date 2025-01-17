import Image from "next/image";
import SlotCounter from "react-slot-counter";
import styles from "./kartavyaCloud.module.css";
import Marquee from "react-fast-marquee";

const KartavyaCloud = () => {
  return (
    // <div className={styles.marquee_kartavya}>

    //         <div className={styles.marquee2_kartavya}>
    //             <Marquee speed={10} >
    //                 <Image src="./cloudLeft.svg" className={`${styles.cloudLeft_kartavya} ${styles.cloud_kartavya}`} width="1000" height="1000" />
    //                 <Image src="./cloudLeft.svg" className={`${styles.cloudLeft_kartavya} ${styles.cloud_kartavya}`} width="1000" height="1000" />
    //                 <Image src="./cloudLeft.svg" className={`${styles.cloudLeft_kartavya} ${styles.cloud_kartavya}`} width="1000" height="1000" />
    //             </Marquee>
    //         </div>
    //         <div className='marquee1_kartavya'>
    //             <Marquee direction="right" speed={30} >
    //                 <Image src="./cloudRight.svg" className={`${styles.cloudRight_kartavya} ${styles.cloud_kartavya}`} width="1000" height="1000" />
    //                 <Image src="./cloudRight.svg" className={`${styles.cloudRight_kartavya} ${styles.cloud_kartavya}`} width="1000" height="1000" />
    //                 <Image src="./cloudRight.svg" className={`${styles.cloudRight_kartavya} ${styles.cloud_kartavya}`} width="1000" height="1000" />
    //             </Marquee>
    //         </div>

    //         </div>

    <section>
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
        <p className={styles.title}>Kartavya</p>
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

export default KartavyaCloud;