"use client";
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
      url: "./sponsors_img/techno.png",
    },
    {
      headline: "Connected By",
      url: "./sponsors_img/gplus.png",
      link: "https://www.guwahatiplus.com",
    },
    {
      headline: "In Association With",
      url: "./sponsors_img/pragg.png",
      link: "https://pragnews.com/",
    },
    {
      headline: "Trusted By",
      url: "./sponsors_img/MCJ LOGO complete-white.png",
    },
    {
      headline: "Educated By",
      url: "./sponsors_img/nerim.png",
    },
    // {
    //   headline: "Powered By",
    //   url: "./sponsors_img/sbi.png",
    // },
  ];
  const mediaSponsors = [
    {
      url: "./sponsors_img/pureOdisha.png",
      desc: "Pure Odisha",
      partnership: "Digital Media Partner",
      link: "https://www.instagram.com/pure_odisha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },

    {
      url: "./sponsors_img/justAssThings.png",
      desc: "Just Assamese Things",
      partnership: "Digital Media Partner",
      link: "https://www.instagram.com/justassamthings.exe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },

    {
      url: "./sponsors_img/mirchi.png",
      desc: "Radio Mirchi",
      partnership: "Official Radio Partner",
    },

    {
      url: "./sponsors_img/globalHues.png",
      desc: "Global Hues",
      partnership: "Digital Media Partner",
      link: "https://theglobalhues.com/",
    },

    {
      url: "./sponsors_img/GT.png",
      desc: "Guwahati Times",
      partnership: "Digital Media Partner",
      link: "https://www.instagram.com/guwahatitimes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },

    {
      url: "./sponsors_img/siliconIndia.png",
      desc: "Silicon India",
      partnership: "Digital Media Partner",
      link: "https://www.siliconindia.com/",
    },
    {
      url: "./sponsors_img/assam.png",
      desc: "Assam Unofficial",
      partnership: "Digital Media Partner",
      link: "https://www.instagram.com/assam.unofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },

    {
      url: "./sponsors_img/physioTimes.png",
      desc: "Physio Times",
      partnership: "Magazine Partner",
      link: "https://www.physiotimes.com/",
    },
    {
      url: "./sponsors_img/blogadda.png",
      desc: "Blog Adda",
      partnership: "Blog Partner",
      link: "https://www.blogadda.com/",
    },
    {
      url: "./sponsors_img/poo.jpeg",
      desc: "ED Times",
      partnership: "Blog Partner",
      link: "https://edtimes.in/",
    },
    {
      url: "./sponsors_img/knowFest.jpeg",
      desc: "Know Fest",
      partnership: "Digital Magazine Partner",
      link: "https://www.knowafest.com/",
    },
    {
      url: "./sponsors_img/dib_uoff.png",
      desc: "Dibrugarh Unofficial",
      partnership: "Digital Media Partner",
      link: "https://www.instagram.com/dibrugarh.unofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      url: "./sponsors_img/times.png",
      desc: "Campus Times",
      partnership: "Digital Media Partner",
      link: "https://www.campustimespune.com/",
    },
    {
      url: "./sponsor/assamese_memes.jpg",
      desc: "The Assamese Memes",
      partnership: "Digital Media Partner",
      link: "https://www.instagram.com/the.assamese.memes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      url: "./sponsor/djschool.png",
      desc: "Rave DJ School",
      partnership: "Digital Media Partner",
    },

    {
      url: "./sponsors_img/youthIncorpo.png",
      desc: "Youth Incorporated",
      partnership: "Digital Media Partner",
      link: "https://youthincmag.com/",
    },
    {
      url: "./sponsors_img/womanEra.jpeg",
      desc: "Woman's Era",
      partnership: "Digital Media Partner",
      link: "https://womansera.com/",
    },
    {
      url: "./sponsors_img/sacchiShiksha.png",
      desc: "Sacchi Shiksha",
      partnership: "Digital Media Partner",
      link: "https://sachishiksha.com/?srsltid=AfmBOoqxoliBsE3hKLvvwFgcIEeSRF0AGT7WqFsXeTpKsoCpOND0pMDA",
    },
    {
      url: "./sponsors_img/du.jpeg",
      desc: "DU India",
      partnership: "Digital Media Partner",
      link: "https://www.instagram.com/du__india?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      url: "./sponsors_img/blaze.png",
      desc: "Blaze Music",
      partnership: "Digital Media Partner",
    },
    {
      url: "./sponsors_img/ghyTimes.png",
      desc: "Guwahati Times",
      partnership: "Digital Media Partner",
      link: "https://www.instagram.com/guwahatitimes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      url: "./sponsors_img/assam1.png",
      desc: "Assam Beatbox",
      partnership: "Community Partner",
      link: "https://www.instagram.com/assambeatbox?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
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
    {
      url: "./sponsor/1stop.png",
      desc: "1Stop",
      partnership: "Live Project Partner",
    },
    {
      url: "./sponsor/aadya.jpg",
      desc: "Aadya",
      partnership: "Official Hygiene and CSR Partner",
    },
    {
      url: "./sponsor/scholarbyte.jpg",
      desc: "Scholar byte",
      partnership: "Career Development Partner",
    },

    
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
      url: "./sponsor/fixderma.jpg",
      desc: "Fix Derma",
      partnership: "Skincare Partner",
    },
    {
      url: "./sponsor/qelica.png",
      desc: "Qelica",
      partnership: "Oral Care Partner",
    },
    {
      url: "./sponsor/krafton.png",
      desc: "Krafton",
      partnership: "Mobile Gaming Partner",
    },
    {
      url: "./sponsor/gmda.jpg",
      desc: "Gmda",
      partnership: "Kartavya In Association With Partner",
    },
    {
      url: "./sponsor/oil.png",
      desc: "OIL India",
      partnership: "Gold Sponsor",
    },
    {
      url: "./sponsor/canara.png",
      desc: "CANARA",
      partnership: "Banking Partner",
    },
    {
      url: "./sponsor/gail.png",
      desc: "GAIL ( India ) Ltd",
      partnership: "Gold Sponsor",
    },
    {
      url: "./sponsor/mastersunion.jpg",
      desc: "Masters' Union",
      partnership: "Case Study Partner",
    },
    {
      url: "./sponsor/spm.jpg",
      desc: "SPM IAS Academy",
      partnership: "IAS Academy Partner",
    },
    {
      url: "./sponsor/ntpc.jpg",
      desc: "NTPC",
      partnership: "Platinum Sponsor",
    },
    {
      url: "./sponsor/ucobank.jpg",
      desc: "UCO Bank",
      partnership: "Banking Partner",
    },
    {
      url: "./sponsor/nestle.png",
      desc: "Nestle",
      partnership: "Chocolate Partner",
    },
    {
      url: "./sponsor/ROT.png",
      desc: "Reign of Titans",
      partnership: "Gaming Partner",
    },
    {
      url: "./sponsor/jiosaavn.jpg",
      desc: "Jio Saavn",
      partnership: "Official Music Streaming Partner",
    },
    {
      url: "./sponsor/Safexpress Logo.png",
      desc: "Safexpress",
      partnership: "Official Supply Chain Partner",
    },
    {
      url: "./sponsor/sketcher.png",
      desc: "Skechers",
      partnership: "Athleisure Partner",
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
            <div
              className={styles.imgMainSponser}
              onClick={() => option.link && window.open(option.link)}
            >
              <img className={styles.imggg} src={option.url} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.lowerSponsers}>
        {lowerSponsers.map((option, key) => (
          <div className={styles.lowEachSpons}>
            <div
              className={styles.imgLowSpons}
              onClick={() => option.link && window.open(option.link)}
            >
              <img className={styles.imggg} src={option.url} alt="" />
            </div>
            <div className={styles.descc}>
              <p>{option.desc}</p>
              <p>{option.partnership}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.markysec}>
        <p className={styles.headmarky}>Media Sponsors</p>
        <div className={styles.marky}>
          {mediaSponsors.map((option, key) => (
            <div className={styles.lowEachSpons}>
              <div
                className={styles.imgLowSpons}
                onClick={() => option.link && window.open(option.link)}
              >
                <img className={styles.imggg} src={option.url} alt="" />
              </div>
              <div className={styles.descc}>
                <p>{option.desc}</p>
                <p>{option.partnership}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default upperSponsers;
