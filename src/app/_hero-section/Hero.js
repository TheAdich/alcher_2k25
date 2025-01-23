'use client'

import { useRef, useState } from 'react';
import styles from './hero.module.css';
import Marquee from "react-fast-marquee";
import Image from 'next/image';


const Hero = () => {
    const videoRef = useRef(null);
    const [buttonOpacity, setButtonOpacity] = useState(1);
    const [showAnchor, setShowAnchor] = useState(false);
    const [boom, setBoom] = useState(1);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
        setButtonOpacity(0);
        setBoom(0);
    };

    const handleEnded = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = videoRef.current.duration;
        }
        setShowAnchor(true);
    };

    return (
        <div className={styles.heroll}>
            {/* <h1>Hero Section</h1> */}
            <video ref={videoRef} loop={false} muted className={styles.video} onEnded={handleEnded} onClick={handlePlay} style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src="./herovid.mp4" type="video/mp4" />
            </video>
            {/* <button 
                onClick={handlePlay} 
                className={styles.herobtn} 
                style={{ opacity: buttonOpacity, transition: 'opacity 0.5s' }}
            >
                Click Me !!
            </button> */}

                {boom == 1 &&<Marquee speed={250} className={styles.hehe}  >
                <div className={styles.click}  onClick={handlePlay}>
                    <h1 >CLICK TO PLAY</h1>
                    <Image src="/warning.png" alt="hero" width={50} className={styles.danger} height={50}  />
                    <h1 >CLICK TO PLAY</h1>
                    <Image src="/warning.png" alt="hero" width={50} className={styles.danger} height={50}  />
                    <h1 >CLICK TO PLAY</h1>
                    <Image src="/warning.png" alt="hero" width={50} className={styles.danger} height={50}  />
                    <h1 >CLICK TO PLAY</h1>
                    <Image src="/warning.png" alt="hero" width={50} className={styles.danger} height={50}  />
                    <h1 >CLICK TO PLAY</h1>
                    <Image src="/warning.png" alt="hero" width={50} className={styles.danger} height={50}  />
                    <h1 >CLICK TO PLAY</h1>
                    <Image src="/warning.png" alt="hero" width={50} className={styles.danger} height={50}  />
                    <h1 >CLICK TO PLAY</h1>
                    <Image src="/warning.png" alt="hero" width={50} className={styles.danger} height={50}  />
                </div>
                </Marquee> }

{/* 


                // <Marquee speed={250} className={styles.hehe} >
                // <div className={styles.click}>
                //     <h1 >CLICK TO PLAY</h1>
                //     <Image src="/warning.png" alt="hero" width={50} className={styles.danger} height={50}  />
                //     <h1 >CLICK TO PLAY</h1>
                //     <Image src="/warning.png" alt="hero" width={50} className={styles.danger} height={50}  />
                //     <h1 >CLICK TO PLAY</h1>
                //     <Image src="/warning.png" alt="hero" width={50} className={styles.danger} height={50}  />
                //     <h1 >CLICK TO PLAY</h1>
                //     <Image src="/warning.png" alt="hero" width={50} className={styles.danger} height={50}  />
                //     <h1 >CLICK TO PLAY</h1>
                //     <Image src="/warning.png" alt="hero" width={50} className={styles.danger} height={50}  />
                //     <h1 >CLICK TO PLAY</h1>
                //     <Image src="/warning.png" alt="hero" width={50} className={styles.danger} height={50}  />
                //     <h1 >CLICK TO PLAY</h1>
                //     <Image src="/warning.png" alt="hero" width={50} className={styles.danger} height={50}  />
                // </div>
                // </Marquee> */}

           
            {showAnchor && (
                <div className="all">
                    <a href="https://8bit.alcheringa.in" className={styles.heroAnchor}></a>
                </div>
            )}
        </div>
    );
};

export default Hero;