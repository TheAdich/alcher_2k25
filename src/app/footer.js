"use client";

import React from "react";
import styles from "./footer.module.css";
import "./components/stone-slab.css";
import "./components/game-tape.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
const footer = () => {
  const navOptions = [
    { label: "Events", path: "/events" },
    { label: "Competitions", path: "/competitions" },
    { label: "Kartavya", path: "/kartavya" },
    { label: "Merch", path: "/merch" },
    { label: "Team", path: "/teams" },
    { label: "Gallery", path: "/gallery" },
    { label: "Sponsors", path: "/sponsors" },
    { label: "MUN", path: "/mun" },
  ];

  const [isVisible, setIsVisible] = useState(false);

  const creativesPeeps = [
    { name: "Anish Mishra" },
    { name: "Ayush Bahuguna" },
    { name: "Dhruva Ingale" },
    { name: "Sai Sankeerth Veggalam" },
  ];

  const webOpsPeeps = [
    { name: "Arshad Hussain" },
    { name: "Chandan Jyoti Das" },
    { name: "Deval Singhal" },
    { name: "Krish Raj" },
    { name: "Pavan Lokesh" },
    { name: "Valli Sri Atyam" },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const pathh = usePathname();

  return (
    <div>
      <img className="w-full h-20 bg-gray-900 " src="/footUpBG.png" alt="" />
      <div className={styles.mainFooter}>
        <div
          className={styles.eventsSec}
          style={{ fontFamily: "stoneSlab", color: "rgba(255, 235, 211, 1)" }}
        >
          {navOptions.map((option, index) => {
            const isActive =
              option.path === "/"
                ? pathh === option.path
                : pathh.startsWith(option.path);

            return (
              <ul
                key={index}
                className={isActive ? styles["navActive"] : styles["nav"]}
              >
                <Link href={option?.path}>{option.label}</Link>
              </ul>
            );
          })}
        </div>
        <div className={styles.logoDiv}>
          <img className={styles.footerLogo} src="/footLogo.png" alt="" />
        </div>
        <div className={styles.prbheads}>
          <div className={styles.prbname1}>
            <p id={styles.name}>Siddharth Shukla</p>
            <p
              id={styles.phn}
              onClick={() => copyToClipboard("+91 7354647811")}
            >
              +91 7354647811
            </p>
            <a href="mailto:siddharth@alcheringa.in">siddharth@alcheringa.in</a>
          </div>
          <div className={styles.prbname2}>
            <p id={styles.name}>Sudhanshu Raj</p>
            <p
              id={styles.phn}
              onClick={() => copyToClipboard("+91 8292967325")}
            >
              +91 8292967325
            </p>
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
        <div className={styles.followUs}>
          <p className={styles.followtxt}>Follow Us</p>
          <div className={styles.followicons}>
            <ul>
              <Link href="https://www.instagram.com/alcheringaiitg/?hl=en">
                <Image
                  src="/instaicon.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </ul>
            <ul>
              <Link href="https://www.facebook.com/alcheringaiitg/">
                <Image
                  src="/fbicon.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
            </ul>
            <ul>
              <Link href="https://x.com/alcheringaiitg">
                <Image src="/xicon.png" alt="Twitter" width={24} height={24} />
              </Link>
            </ul>
            <ul>
              <Link href="https://www.youtube.com/@alcheringaIITG">
                <Image src="/yticon.png" alt="YouTube" width={24} height={24} />
              </Link>
            </ul>
          </div>
        </div>
        <div className={styles.footDownDes}>
          <img src="/footDownBG.png" alt="" />
        </div>
        <div className={styles.oneline}>
          <div className={styles.lftline}>
            Designed and Developed by
            <div className={styles.alcherCreatives}>
              <p
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
              >
                <u>Alcher Creatives,</u>
              </p>
              <div
                className={`${styles.creativesName} ${
                  isVisible ? styles.visible : ""
                }`}
              >
                <ul>
                  {creativesPeeps.map((option, idx) => (
                    <li key={idx}>{option.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.alcherWebOps}>
              <p>
                <u>Alcher Web Operations</u>
              </p>
              <div className={styles.webOpsName}>
                <ul>
                  {webOpsPeeps.map((option, idx) => (
                    <li key={idx}>{option.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.rgtline}>
            For Business Enquiries
            <a href="mailto:alcheringa@iitg.ac.in">alcheringa@iitg.ac.in</a>
          </div>
        </div>
        <div className={styles.wrapper}>
          <span>
            <img src="./Vector.png" alt="" />
          </span>
          <span>
            <img src="./Vector.png" alt="" />
          </span>
          <span>
            <img src="./Vector.png" alt="" />
          </span>
          <span>
            <img src="./Vector.png" alt="" />
          </span>
          <span>
            <img src="./Vector.png" alt="" />
          </span>
          <span>
            <img src="./Vector.png" alt="" />
          </span>
          <span>
            <img src="./Vector.png" alt="" />
          </span>
          <span>
            <img src="./Vector.png" alt="" />
          </span>
          <span>
            <img src="./Vector.png" alt="" />
          </span>
          <span>
            <img src="./Vector.png" alt="" />
          </span>
          <span>
            <img src="./Vector.png" alt="" />
          </span>
          <span>
            <img src="./Vector.png" alt="" />
          </span>
          <span>
            <img src="./Vector.png" alt="" />
          </span>
          <span>
            <img src="./Vector.png" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default footer;
