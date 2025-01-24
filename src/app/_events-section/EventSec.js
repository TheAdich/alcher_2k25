"use client"

import styles from "./events.module.css";
import Link from 'next/link';
import rect from "./_components/rectangle.png";
import event2 from "./_components/event2.png";
import Fimg1 from "./_components/Fimg1.png";
import Fimg2 from "./_components/Fimg2.png";
import Fimg3 from "./_components/Fimg3.png";
import Fimg4 from "./_components/Fimg4.png";
import proImg from "./_components/proImg.png";
import pshows from "./_components/pshows1.png";
import evbtn from "./_components/evbtn.png";

import compbtn from "./_components/compbtn.png";
import competitionbutton from "./_components/competitionbutton.svg";
import eventbtn from "./_components/eventbtn.svg";
import dashline from "./_components/dashline.svg";
import arrow from "./_components/arrow.png";

import Image from "next/image";

const EventSec = () => {
  const handleMM = (e, cardRef) => {
    const rectangle = cardRef.getBoundingClientRect();
    const x = e.clientX - rectangle.left; 
    const y = e.clientY - rectangle.top; 
    const centerX =rectangle.width / 3;
    const centerY = rectangle.height / 3;
    const rotateX = ((y - centerY) / centerY) * -15; 
    const rotateY = ((x - centerX) / centerX) * 15; 

    cardRef.style.setProperty("--rotateX", `${rotateX}deg`);
    cardRef.style.setProperty("--rotateY", `${rotateY}deg`);
    cardRef.classList.add(styles.tilt);
  };
  const handleML = (cardRef) => {
    cardRef.style.setProperty("--rotateX", "0deg");
    cardRef.style.setProperty("--rotateY", "0deg");
    cardRef.classList.remove(styles.tilt);
  };

  return (
    <div className={styles.events}>
      <div className={styles.heading}>
        <div className={styles.headersection}>
          <div className={styles.intro}>
            <h1 className={styles.inst1}>How about we </h1>
            <Image src={rect} alt="line" className={styles.underline} />
            <h1 className={styles.inst2}>
              have a <span>Look</span>
            </h1>
            <Image src={rect} alt="line" className={styles.underline2} />
            <div className={styles.high}>
              <h1 className={styles.inst3}>
                at the <span className={styles.highlight}>Highlights  </span>
              </h1>
              <Image src={arrow} alt="arrow" className={styles.arrow}/>
            </div>
            <Image src={rect} alt="line" className={styles.underline3} />
          </div>
          <div className={styles.randomtextcontainer}>
            <span className={`${styles.randomtext} ${styles.rndtext1}`} >
              [a] What is this about?
            </span>
            <span className={`${styles.randomtext} ${styles.rndtext2}`} >
              (b-1) Intereting.... right?
            </span>
            <span className={`${styles.randomtext} ${styles.rndtext3}`}>
              [0] Game is on
            </span>
          </div>
        </div>
      </div>

      <div className={styles.cardssection}>
      <div className={styles.evcard}>
        <div
          className={styles.eventcard}
          // onMouseMove={(e) => handleMM(e, e.currentTarget)}
          // onMouseLeave={(e) => handleML(e.currentTarget)}
        >
          <Image src={Fimg1} alt="Pronites" />
        </div>
        <div
          className={styles.eventcard}
          // onMouseMove={(e) => handleMM(e, e.currentTarget)}
          // onMouseLeave={(e) => handleML(e.currentTarget)}
        >
          <Image src={proImg} alt="Proshows" />
        </div>
        </div>

        {/* Text and Button for First Pair */}
        <div className={`${styles.eventstext} ${styles.eventcrd}`} id="event-crd">
          <div className={styles.eventcontainer}>
            <Image src={dashline} alt="ff" className={styles.lines} />
            <h2 className={styles.usual}>
              <span>This year, we’ll be </span>
              <br />
              <span>celebrating the magic of</span>
              <br />
              <span id="concerts">music, art, and more!</span>
              <br />
            </h2>
            <h2 className={styles.resp}>
             <span>This year, we’ll be celebrating the magic of music, art, and more!</span> 
              
            
              
              
            </h2>
            <Image src={dashline} alt="ff" className={styles.lines} />
            <p>
            Alcheringa features thrilling live concerts, energetic dance and music competitions, literary events, sports challenges, and hands-on workshops. With flagship events like Pronites, Proshows, and Creators Camp, it promises unforgettable experiences for participants and audiences alike.
            </p>
            <Link href="/events" passHref>
            <button className={styles.eventsbutton}>
              <Image src={eventbtn} alt="ff" className={styles.evebtn}/>
            </button></Link>
          </div>
        </div>
      </div>

      <div  className={`${styles.cardssection} ${styles.evText}`} >
      <div className={styles.eventstext} >
          <Image src={dashline} className={styles.lines}  alt="dashline"/>
          <h2 className={styles.usual}>
            <span>Compete, connect, and </span>
            <br />
            <span>celebrate your talent in </span>
            <br />
            <span className={styles.concerts}>vibrant contests!</span>
            <br />
          </h2>

          <h2 className={styles.resp}>
             <span>Compete, connect, and celebrate your talent in vibrant contests!</span>  
            </h2>
          <Image src={dashline} className={styles.lines} alt="dashline"/>
          <p>
          Alcheringa hosts a diverse range of competitions, offering a platform for talent across music, dance, art, literature, and more. From high-energy group battles to solo showcases, participants get a chance to shine, compete, and win big. Whether you’re a performer or a spectator, the excitement is unmatched!
          </p>
          <Link href="/competitions" passHref>
           
          <button className={styles.eventsbutton}>
            <Image src={competitionbutton} alt=""  className={styles.evebtn}/>
          </button>
          </Link>
        </div>
        <div className={styles.evcard}>
        <div
          className={styles.eventcard}
          // onMouseMove={(e) => handleMM(e, e.currentTarget)}
          // onMouseLeave={(e) => handleML(e.currentTarget)}
        >
          <Image src={Fimg3} alt="Pronites" />
        </div>
        <div
          className={styles.eventcard}
          // onMouseMove={(e) => handleMM(e, e.currentTarget)}
          // onMouseLeave={(e) => handleML(e.currentTarget)}
        >
          <Image src={Fimg4} alt="Proshows" />
        </div>
       
        </div>
      </div>
    </div>
  );
};
export default EventSec;
