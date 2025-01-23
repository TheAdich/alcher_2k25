"use client";
import { useState } from "react";
import styles from "./kartavya.module.css";
import Image from "next/image";
import dashline from "./dashline.svg";

import preImage2 from "./preImage2.svg";

import img2 from "./img2.svg";
import img3 from "./img3.svg";
import img4 from "./img4.svg";
import img5 from "./img5.svg";
import img6 from "./img6.svg";
import img1 from "./img1.svg";
import frame1 from "./frame1.svg";
import frame2 from "./frame2.svg";

const initiatives = [
  {
    title: "AIKYAM",
    description:
      "Aikyam's main aim is to sensitise people about how communal violence and hatred is still a burning issue in India and to promote the idea of 'unity in diversity' through performances, panel discussions and fundraisers",
    image: img1,
  },
  {
    title: "Manshakti",
    description:
      "Manshakti is Alcheringa's mental health awareness campaign where we strive to address the wide variety of mental health issues that people suffer from, while reducing stigma and promoting a culture of care and understanding.",
    image: img2,
  },
  {
    title: "Safher",
    description:
      "Acknowledging the sad reality of violence against women and lack of women safety in India, SafHer, through a variety of workshops and other programmes highlights that women raise their voice against misconduct and get perpetrators to justice.",
    image: img3,
  },

  {
    title: "Prithvi",
    description:
      "As the name suggests, Prithvi aims at taking active steps to save our planet from climate change and promotes environmental protectionism right from the grassroot level through a variety of programmes to involve the people around us.",
    image: img4,
  },
  {
    title: "Northeast Unvield",
    description:
      "It is held annually to celebrate North East India’s cultural diversity through performances, regional art, and handicrafts, while addressing social issues and exploring solutions.",
    image: img5,
  },

  {
    title: "Sanrakshan",
    description:
      "Sanrakshan is a dual-purpose campaign tackling AIDS awareness and substance abuse, fostering a socially responsible community that is aware of safe practices and at the same time eliminating the stigma surrounding these issues.",
    image: img6,
  },
];
const headtitle =
  "Empowering Underprivileged Students to Dream Big and Soar High";
const desc =
  " Udaan, launched as ‘Bachpan’ in 2011, aimed at empowering underprivileged students through the joy of learning. With initiatives like career counseling, workshops, and creative activities, Udaan inspires young minds to dream big and achieve their true potential. Join us in spreading wings of hope and opportunity—because every child deserves to soar high with Udaan! ";
const Kartavya = () => {
  const [udaanImage, setUdaanImage] = useState(preImage2);
  const [description, setDescription] = useState(desc);
  const [subheading, setSubheading] = useState(headtitle);

  const handleCardClick = (image, head, des) => {
    setUdaanImage(image);
    setSubheading(head);
    setDescription(des);
  };

  return (
    <div className={styles.container}>
      <section className={styles.udaanSection}>
        <h1 className={styles.heading}>Udaan</h1>
        <div className={styles.udaanContent}>
          {/* <div className={styles.mainImage}>
           
              
              <Image src={frame1} className={styles.frame1}/>
          <Image
            src={udaanImage}
            alt="Udaan"
            className={styles.udaanImage}
          />
          
         
          </div> */}
          <div className={styles.mainImage}>
            <div
              className={`${styles.mainImage2} ${
                udaanImage === preImage2 ? styles.specialMainImage2 : ""
              }`}
            >
              <Image
                src={udaanImage}
                alt="Udaan"
                className={styles.udaanImage}
              />
            </div>
            <Image src={frame1} className={styles.frame1} alt="frame1" />
          </div>
          {/* <div className={styles.mainImage}>

<div  className={styles.mainImage2}>
<Image src={udaanImage} alt="Udaan" className={styles.udaanImage} />
</div>

</div> */}

          <div className={styles.intro}>
            <Image src={dashline} className={styles.lines} alt="dashline" />
            <div className={styles.subhead}>
              <h2 className={styles.subHeading}>{subheading}</h2>
            </div>
            <Image src={dashline} className={styles.lines} alt="dashline" />
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </section>

      <section className={styles.initiativesSection}>
        <h2 className={styles.heading}>Initiatives</h2>
        <div className={styles.cardContainer}>
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className={styles.card}
              onClick={() => {
                handleCardClick(
                  initiative.image,
                  initiative.title,
                  initiative.description
                );
              }}
              onChange={(e) => e.target.value}
            >
              {/* <div className={styles.part}>
                <Image src={frame2} className={styles.frames2} />
              <Image
                src={initiative.image}
                alt={initiative.title}
                className={styles.cardImage}
              />
              </div> */}
              <div className={styles.part}>
                <div className={styles.frameWrapper}>
                  <Image src={frame2} className={styles.frames2} alt="Frame" />
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    className={styles.cardImage}
                  />
                </div>
              </div>

              <div className={styles.contents}>
                <Image src={dashline} className={styles.lines} alt="dashline" />
                <h3 className={styles.cardTitle}>{initiative.title}</h3>
                <Image src={dashline} className={styles.lines} alt="dashline" />
                <p className={styles.cardDescription}>
                  {initiative.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Kartavya;
