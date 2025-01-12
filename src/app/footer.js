import React from "react";
import styles from "./footer.module.css";
import "./components/stone-slab.css";
import "./components/game-tape.css";
import Link from "next/link";
import Marquee from "react-fast-marquee";
const footer = () => {
  const navOptions = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Competitions", path: "/competitions" },
    { label: "MUN", path: "/mun" },
    { label: "Kartavya", path: "/kartavya" },
    { label: "Gallery", path: "/gallery" },
    { label: "Sponsors", path: "/sponsers" },
    { label: "Merch", path: "/merch" },
    { label: "Team", path: "/team" },
  ];

  return (
    <div>
      <img className="w-full h-20 bg-gray-900 " src="/footUpBG.png" alt="" />
      <div className={styles.mainFooter}>
        <div
          className={styles.eventsSec}
          style={{ fontFamily: "stoneSlab", color: "rgba(255, 235, 211, 1)" }}
        >
          {navOptions.map((option) => (
            <ul>
              <Link href={option.path}>{option.label}</Link>
            </ul>
          ))}
        </div>
        <div className={styles.logoDiv}>
          <img className={styles.footerLogo} src="/footLogo.png" alt="" />
        </div>
        <div className={styles.prbheads}>
          <div className={styles.prbname1}>
            <p id={styles.name}>Siddharth Shukla</p>
            <p>+91 7354647811</p>
            <a href="mailto:siddharth@alcheringa.in">siddharth@alcheringa.in</a>
          </div>
          <div className={styles.prbname2}>
            <p id={styles.name}>Sudhanshu Raj</p>
            <p>+91 8292967325</p>
            <a href="mailto:sudhanshu@alcheringa.in">sudhanshu@alcheringa.in</a>
          </div>
        </div>
        <div className={styles.design}>
          <div className={styles.designleft}>
            <img src="/name1.png" alt="" />
          </div>
          <div className={styles.designright}>
            <img src="/name2.png" alt="" />
          </div>
        </div>

        <div className={styles.oneline}>
          <div className={styles.lftline}>
            Designed and Developed by <br />
            <p className={styles.alcherCreatives}>Alcher Creatives,</p>
            <p className={styles.alcherWebOps}>Alcher Web Operations</p>{" "}
          </div>
          <div className={styles.creativesName}>
            <ul>
              <li>Name1</li>
              <li>Name2</li>
              <li>Name3</li>
            </ul>
          </div>
          <div className={styles.rgtline}>
            For Business Enquiries{" "}
            <a href="mailto:alcheringa@iitg.ac.in">alcheringa@iitg.ac.in</a>
          </div>
        </div>

        <div className={styles.followUs}>
          <p className={styles.followtxt}>Follow Us</p>
          <div className={styles.followicons}>
            <ul>
              <a href="https://www.instagram.com/alcheringaiitg/?hl=en">
                <img src="/instaicon.png" alt="" />
              </a>
            </ul>
            <ul>
              <a href="https://www.facebook.com/alcheringaiitg/">
                <img src="/fbicon.png" alt="" />
              </a>
            </ul>
            <ul>
              <a href="https://x.com/alcheringaiitg">
                <img src="/xicon.png" alt="" />
              </a>
            </ul>
            <ul>
              <a href="https://www.youtube.com/@alcheringaIITG">
                <img src="/yticon.png" alt="" />
              </a>
            </ul>
          </div>
        </div>
        <div className={styles.retroleft}>
          <img src="/txtretroleft.png" alt="" />
          <img src="/txtretroleft.png" alt="" />
        </div>
        <div className={styles.retroright}>
          <img src="/txtretroright.png" alt="" />
          <img src="/txtretroright.png" alt="" />
        </div>

        <div className={styles.globecir}>
          <img src="/globe.png" alt="" />
        </div>

        <div className={styles.globecir2}>
          <img src="/globe2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default footer;
