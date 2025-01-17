import React from "react";
import styles from "./upperSponsers.module.css";
const upperSponsers = () => {
  const mainSponsers = [
    {
      headline: "Connected By",
      url: "./connectedby.png",
      oneline: "shakalaka boom boom",
    },
    {
      headline: "Powered By",
      url: "./connectedby.png",
      oneline: "shakalaka boom boom",
    },
    {
      headline: "In Associate With",
      url: "./connectedby.png",
      oneline: "shakalaka boom boom",
    },
    {
      headline: "Trusted By",
      url: "./connectedby.png",
      oneline: "shakalaka boom boom",
    },
  ];

  const lowerSponsers = [
    {
      url: "./connectedby.png",
      desc: "shakalaka boom boom",
      partnership: "Something Partner",
    },
    {
      url: "./photoo.png",
      desc: "shakalaka boom boom",
      partnership: "Something Partner",
    },
    {
      url: "./connectedby.png",
      desc: "shakalaka boom boom",
      partnership: "Something Partner",
    },
    {
      url: "./connectedby.png",
      desc: "shakalaka boom boom",
      partnership: "Something Partner",
    },
    {
      url: "./connectedby.png",
      desc: "shakalaka boom boom",
      partnership: "Something Partner",
    },
    {
      url: "./connectedby.png",
      desc: "shakalaka boom boom",
      partnership: "Something Partner",
    },
    {
      url: "./connectedby.png",
      desc: "shakalaka boom boom",
      partnership: "Something Partner",
    },
    {
      url: "./connectedby.png",
      desc: "shakalaka boom boom",
      partnership: "Something Partner",
    },
    {
      url: "./connectedby.png",
      desc: "shakalaka boom boom",
      partnership: "Something Partner",
    },
    {
      url: "./connectedby.png",
      desc: "shakalaka boom boom",
      partnership: "Something Partner",
    },
  ];

  return (
    <main>
      <div className={styles.upperSponsers}>
        <img className={styles.cloudlft} src="./cloudl.png" alt="" />
        <img className={styles.cloudrgt} src="./cloudr.png" alt="" />
        <img className={styles.smallCloud} src="./smallcloud.png" alt="" />
        <img className={styles.cloudlft2} src="./cloudl.png" alt="" />
        <img className={styles.cloudrgt2} src="./cloudrgt2.png" alt="" />
        {mainSponsers.map((option, idx) => (
          <div className={styles.eachSponser}>
            <h2 className={styles.headformain}>{option.headline}</h2>
            <div className={styles.imgMainSponser}>
              <img className={styles.imggg} src={option.url} alt="" />
            </div>
            <p>{option.oneline}</p>
          </div>
        ))}
      </div>
      <div className={styles.lowerSponsers}>
        {lowerSponsers.map((option, key) => (
          <div className={styles.lowEachSpons}>
            <div className={styles.imgLowSpons}>
              <img className={styles.imggg} src={option.url} alt="" />
            </div>
            <div className={styles.descc}>
              <p>{option.desc}</p>
              <p>{option.partnership}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default upperSponsers;
