import React from "react";
import styles from "./components.module.css";
import Image from "next/image";
const page = () => {
  const workshops = [
    {
      name: "Data Science",
      date: "31st Jan 2025",
    },
    {
      name: "ChatGPT Mastery for Everyone",
      date: "31st Jan 2025",
    },
    {
      name: "Robotics IoT",
      date: "31st Jan 2025",
    },
    {
      name: "User Experience (UX) Design",
      date: "31st Jan 2025",
    },
    {
      name: "Digital Marketing Mastery with Instagram Google Ads/SEO",
      date: "1st Feb 2025",
    },
    {
      name: "Artificial Intelligence & Machine Learning",
      date: "1st Feb 2025",
    },
    {
      name: "Ethical Hacking & Cyber Security",
      date: "1st Feb 2025",
    },
    {
      name: "Generative AI",
      date: "1st Feb 2025",
    },
    {
      name: "Entrepreneurship Essentials:From Idea to Launch",
      date: "1st Feb 2025",
    },
    {
      name: "Quantum Computing Basics",
      date: "2nd Feb 2025",
    },
    {
      name: "Game Development with Unity",
      date: "2nd Feb 2025",
    },
    {
      name: "ChatGPT & Ai Tools for Healthcare Professionals",
      date: "2nd Feb 2025",
    },
    {
      name: "Fashion Design & Entrepreneurship",
      date: "2nd Feb 2025",
    },
    {
      name: "Quadcopter Drone & UAV",
      date: "2nd Feb 2025",
    },
  ];
  return (
    <div className={styles.mainPage}>
      <div className={styles.header}>
        <div className={styles.title}>World Technocon Workshops</div>
        <div className={styles.logo}>
          <Image
            src="/sponsor/technocon.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className={styles.workshops}>
        {workshops.map((workshop, idx) => (
          <div key={idx} className={styles.eachWorkshop}>
            <div className={styles.content}>
              <div className={styles.workshopName}>{workshop.name}</div>
              <div className={styles.workshopDate}>{workshop.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
