"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import "./components/stone-slab.css";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const navOptions = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Competitions", path: "/competitions" },
    { label: "MUN", path: "/mun" },
    { label: "Kartavya", path: "/kartavya" },
    { label: "Gallery", path: "/gallery" },
    { label: "Sponsors", path: "/sponsers" },
    { label: "Merch", path: "/merch" },
    { label: "Team", path: "/teams" },
  ];

  const pathh = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div className={styles.mainnav}>
      <img className={styles.logo} src="/alcherlogo1.png" alt="" />
      <div className={styles.options}>
        <ul>
          {navOptions.map((option, idx) => (
            <li
              key={idx}
              className={
                pathh === option.path ? styles["navActive"] : styles["nav"]
              }
            >
              <Link href={option.path}>{option.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.getcards}>
        <img src="/bgGetcards1.jpg" alt="" className={styles.bggetcards} />
        <img className={styles.desc} src="/3_arrows.png" alt="" onClick={toggleMenu} />
      </div>
      {menuOpen && <div className={styles.backdrop} onClick={closeMenu}></div>}
      <div className={`${styles.sidebar} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.sidebarHeader}>
          <span className={styles.menuTitle}>Menu</span>
          <div className={styles.closeIcon}
            onClick={toggleMenu}>
            <img
              src="/closevector.svg"
              alt="close"

            />
             <img
              src="/closevector.svg"
              alt="close"

            />
          </div>

        </div>
        <ul className={styles.sidebarNav}>
          {navOptions.map((option, idx) => (
            <li
              key={idx}
              className={
                pathh === option.path ? styles.activeNavItem : styles.navItem
              }
            >
              <Link href={option.path}>{option.label}</Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;


