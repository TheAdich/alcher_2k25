"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import "./components/stone-slab.css";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const navOptions = [
    { label: "Events", path: "/events" },
    { label: "Competitions", path: "/competitions" },
    { label: "Kartavya", path: "/kartavya" },
    { label: "Merch", path: "/merch" },
    { label: "Team", path: "/teams" },
    { label: "Gallery", path: "/gallery" },
    { label: "Sponsors", path: "/sponsors" },
    { label: "MUN", path: "https://iitgmun.alcheringa.in/" },
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
    <main className={styles.navm}>
      <div className={styles.bgnav}></div>
      <div className={styles.mainnav}>
        <img
          onClick={() => {
            window.location.href = "/";
          }}
          className={styles.logo}
          src="/alcherlogo1.png"
          alt=""
        />
        <div className={styles.options}>
          <ul>
            {navOptions.map((option, idx) => {
              const isActive =
                option.path === "/"
                  ? pathh === option.path
                  : pathh.startsWith(option.path);
              const ne = pathh === option.path;
              return (
                <li
                  key={idx}
                  className={isActive ? styles["navActive"] : styles["nav"]}
                >
                  <Link href={option.path}>
                    <p>{option.label}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.getcards}>
          <Link href="https://card.alcheringa.in">
            <img src="/bgGetcards2.png" alt="" className={styles.bggetcards} />
          </Link>
          <img
            className={styles.desc}
            src="/3_arrows.png"
            alt=""
            onClick={toggleMenu}
          />
        </div>
        {menuOpen && (
          <div className={styles.backdrop} onClick={closeMenu}></div>
        )}
      </div>
      <div className={`${styles.sidebar} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.sidebarHeader}>
          <span className={styles.menuTitle}>Menu</span>
          <div className={styles.closeIcon} onClick={toggleMenu}>
            <img src="/closevector.svg" alt="close" />
            <img src="/closevector.svg" alt="close" />
          </div>
        </div>
        <ul className={styles.sidebarNav}>
          {navOptions.map((option, idx) => (
            <li
              onClick={closeMenu}
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
    </main>
  );
};

export default Navbar;
