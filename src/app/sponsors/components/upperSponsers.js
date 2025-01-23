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
      url: "./sponsors_img/MCJ LOGO complete-white.png",
    },
    {
      headline: "Educated By",
      url: "./sponsors_img/Combine Logo NERIM.png",
    },
  ];

  const lowerSponsers = [
    {
      url: "./sponsor/unstop.jpg",
      desc: "Unstop",
      partnership: "Exclusive Registrations Partner",
    },
    {
      url: "./sponsor/bigrock.png",
      desc: "BigRock",
      partnership: "Web Hosting Partner",
    },
    // {
    //   url: "./sponsor/safexpress.png",
    //   desc: "Safexpress",
    //   partnership: "Logistics Partner",
    // },
    {
      url: "./sponsor/1stop.png",
      desc: "1Stop",
      partnership: "Live Project Partner",
    },
    // {
    //   url: "./sponsor/aadya.png",
    //   desc: "Aadya",
    //   partnership: "Official Hygiene and CSR Partner",
    // },
    {
      url: "./sponsor/scholarbyte.png",
      desc: "Scholar byte",
      partnership: "Career Development Partner",
    },
    // {
    //   url: "./sponsor/remarkskill.png",
    //   desc: "Remarkskill",
    //   partnership: "Workshop Partner",
    // },
    {
      url: "./sponsor/skilligence.png",
      desc: "Skilligence",
      partnership: "Workshop Partner",
    },
    {
      url: "./sponsor/worldtechnocon.png",
      desc: "World Technocon",
      partnership: "Workshop Partner",
    },
    {
      url: "./sponsor/fixderma.png",
      desc: "Fix Derma",
      partnership: "Skin Care Partner",
    },
    {
      url: "./sponsor/qelica.png",
      desc: "Qelica",
      partnership: "Oral Care Partner",
    },
    {
      url: "./sponsor/cocacola.png",
      desc: "Coca Cola",
      partnership: "Title Sponsor",
    },
    {
      url: "./sponsor/gmda.png",
      desc: "Gmda",
      partnership: "Kartavya In Association With",
    },
    {
      url: "./sponsor/oil.png",
      desc: "OIL",
      partnership: "Golden Sponsor",
    },
    {
      url: "./sponsor/sbi.png",
      desc: "SBI",
      partnership: "Powered By Partner",
    },
    {
      url: "./sponsor/canara.png",
      desc: "CANARA",
      partnership: "Banking Partner",
    },
    {
      url: "./sponsor/mcj.png",
      desc: "MCJ",
      partnership: "Trusted By Partner",
    },
    {
      url: "./sponsor/gail.png",
      desc: "GAIL",
      partnership: "Gold Sponsor",
    },
    {
      url: "./sponsor/mastersunion.png",
      desc: "Masters union",
      partnership: "Case Study Partner",
    },
    {
      url: "./sponsor/spm.png",
      desc: "SPM",
      partnership: "IAS Academy Partner",
    },
    {
      url: "./sponsor/ntpc.png",
      desc: "NTPC",
      partnership: "Platinum Sponsor",
    },
    {
      url: "./sponsor/technoelectric.png",
      desc: "Techno Electric",
      partnership: "Co-Title Sponsor",
    },
    {
      url: "./sponsor/ucobank.png",
      desc: "UCO Bank",
      partnership: "Banking Partner",
    },
    {
      url: "./sponsor/nestle.png",
      desc: "Nestle",
      partnership: "Chocolate Partner",
    },
    {
      url: "./sponsor/reignoftitans.png",
      desc: "Reign of Titans",
      partnership: "Gaming Partner",
    },
    {
      url: "./sponsor/nerim.png",
      desc: "NERIM",
      partnership: "Educated By Partner",
    },
    {
      url: "./sponsor/jiosaavn.png",
      desc: "Jio Saavn",
      partnership: "Official Music Streaming Partner",
    },
    {
      url: "./sponsor/foreschool.png",
      desc: "FORE School of Business",
      partnership: "Knowledge Partner",
    },
    {
      url: "./sponsor/ifmr.png",
      desc: "IFMR Graduate School Business",
      partnership: "B School Partner",
    },
    {
      url: "./sponsor/colorbar.png",
      desc: "Colorbar",
      partnership: "Beauty Partner",
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
