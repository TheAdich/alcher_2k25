

"use client"
import { useState } from "react";
import styles from "./kartavya.module.css"; 
import Image from "next/image";
import dashline from "./dashline.svg";
import preImage from "./preImage.png";
import preImage2 from "./preImage2.svg";
import img1 from "./akyam1.png";
import img2 from "./img2.svg";
import frame1 from "./frame1.svg";
import frame2 from "./frame2.svg";

const initiatives = [
  {
    title: "AIKYAM",
    description:
      "Aikyam's main aim is to sensitize people about how communal violence and hatred is still a burning topic in India and to promote the idea of unity by delivering programs, performances, panel discussions, and fund-raisers.",
    image: img2, 
  },
  {
    title: "AIKYAM",
    description:
      "Aikyam's main aim is to sensitize people about how communal violence and hatred is still a burning topic in India and to promote the idea of unity by delivering programs, performances, panel discussions, and fund-raisers.",
    image:  img2, 
  },
  {
    title: "AIKYAM",
    description:
      "Aikyam's main aim is to sensitize people about how communal violence and hatred is still a burning topic in India and to promote the idea of unity by delivering programs, performances, panel discussions, and fund-raisers.",
    image: img2, 
  },
  {
    title: "AIKYAM",
    description:
      "Aikyam's main aim is to sensitize people about how communal violence and hatred is still a burning topic in India and to promote the idea of unity by delivering programs, performances, panel discussions, and fund-raisers.",
    image:  img2, 
  },
  {
    title: "AIKYAM",
    description:
      "Aikyam's main aim is to sensitize people about how communal violence and hatred is still a burning topic in India and to promote the idea of unity by delivering programs, performances, panel discussions, and fund-raisers.",
    image:  img2, 
  },{
    title: "AIKYAM",
    description:
      "Aikyam's main aim is to sensitize people about how communal violence and hatred is still a burning topic in India and to promote the idea of unity by delivering programs, performances, panel discussions, and fund-raisers.",
    image:  img2, 
  }
  
  
];
const headtitle= "Exciting Events - Performances, Talks and Concerts..."
const desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique purus eu libero egestas, sed bibendum felis tincidunt. Proin ultricies viverra mollis. Nullam vel quam tortor. Duis egestas libero velit, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique purus eu libero egestas, sed bibendum felis tincidunt. Proin ultricies viverra mollis. Nullam vel quam tortor. Duis egestas libero velit, "
const Kartavya = () => {
  const [udaanImage, setUdaanImage] = useState(preImage2); 
  const [description,setDescription]=useState(desc);
  const[subheading,setSubheading] = useState(headtitle)

  const handleCardClick = (image,head,des) => {
    setUdaanImage(image);
    setSubheading(head);
    setDescription(des)

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
          <div className={`${styles.mainImage2} ${
        udaanImage === preImage2 ? styles.specialMainImage2 : ""
      }`}>
    <Image src={udaanImage} alt="Udaan" className={styles.udaanImage} />
  </div>
  <Image src={frame1} className={styles.frame1} alt="frame1" />

</div>
{/* <div className={styles.mainImage}>

<div  className={styles.mainImage2}>
<Image src={udaanImage} alt="Udaan" className={styles.udaanImage} />
</div>

</div> */}


          <div className={styles.intro}>
          <Image src={dashline} className={styles.lines} alt="dashline"/>
          <div  className={styles.subhead}>
            <h2 className={styles.subHeading}>{subheading}</h2></div>
            <Image src={dashline} className={styles.lines} alt="dashline"/>
            <p className={styles.description}>
          {description}
            </p>
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
              onClick={() => {handleCardClick(initiative.image,initiative.title,initiative.description);
               
                
              }}
              onChange={e=>e.target.value}
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
              <Image src={dashline} className={styles.lines} alt="dashline"/>
              <h3 className={styles.cardTitle}>{initiative.title}</h3>
              <Image src={dashline} className={styles.lines} alt="dashline"/>
              <p className={styles.cardDescription}>{initiative.description}</p>
              
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Kartavya;