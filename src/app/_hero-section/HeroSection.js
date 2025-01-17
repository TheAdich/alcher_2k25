'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './hero.css';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const images = [];
        const imageCount = 51; // Number of images from 0040.jpg to 0090.jpg (inclusive)
        let loadedImages = 0;

        // Load images
        for (let i = 40; i <= 90; i++) {
            const img = new Image();
            img.src = `/jpeg/${i.toString().padStart(4, '0')}.jpg`;
            img.onload = () => {
                loadedImages++;
                if (loadedImages === imageCount) {
                    startAnimation();
                }
            };
            images.push(img);
        }

        const startAnimation = () => {
            ScrollTrigger.create({
                trigger: canvas,
                start: 'top top',
                end: '+=200vh', // Increase the scroll duration
                pin: true,
                scrub: 1,
                ease: 'power4.out',
                onUpdate: (self) => {
                    const progress = self.progress;
                    const index = Math.floor(progress * (images.length - 1));
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(images[index], 0, 0, canvas.width, canvas.height);
                },
            });
        };

        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Cleanup on unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="hero">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
};

export default HeroSection;