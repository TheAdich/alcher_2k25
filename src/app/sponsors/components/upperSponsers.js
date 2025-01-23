import React from "react";
import styles from "./upperSponsers.module.css";
const upperSponsers = () => {
  const mainSponsers = [
    {
      headline: "Title Sponsor",
      url: "https://www.coca-cola.com/content/dam/onexp/us/en/homepage/CocaColalogor.png",
    },
    {
      headline: "Co-Title Sponsor",
      url: "https://www.techno.co.in/public/images/logo.png",
    },
    {
      headline: "In Associate With",
      url: "./connectedby.png",
    },
    {
      headline: "Trusted By",
      url: "./sponsors_img/MCJ LOGO complete-white.png",
    },
    {
      headline: "Educated By",
      url: "./sponsors_img/Combine Logo NERIM.png",
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
