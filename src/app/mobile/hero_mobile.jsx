"use client"

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./hero.css"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollImageSequence = () => {

    // Total number of frames in the sequence
    const frameCount = 137;

    // Function to generate image URL
    const currentFrame = (index) =>
        `https://minio.alcheringa.in/alchercamedia/hero_mobile/${index.toString().padStart(4, '0')}.jpg`;

    useEffect(() => {
        // const canvas = document.querySelector('canvas');
        // const context = canvas.getContext('2d');
        // const initial = new Image();
        // initial.src = 'https://minio.alcheringa.in/alchercamedia/hero_mobile/0040.jpg';
        // context.drawImage(initial, 0, 0);
        // canvas.width = 1080;
        // canvas.height = 1920;

        // // const smoother = ScrollSmoother.create({
        // //     content: ".smooth-wrapper",
        // //     smooth: 1,
        // //     effects: true
        // // });

        // // smoother.effects("img", { speed: "auto" });
        // // Preload images
        // const preloadImages = () => {
        //     for (let i = 40; i < frameCount; i++) {
        //         const img = new Image();
        //         img.src = currentFrame(i);
        //     }
        // };

        // // Initial image
        // const img = new Image();
        // img.src = currentFrame(40);
        // img.onload = () => {
        //     context.drawImage(img, 0, 0);
        // };

        // // Create ScrollTrigger animation
        // gsap.to(canvas, {
        //     scrollTrigger: {
        //         trigger: canvas,
        //         start: 'top top',
        //         end: 'bottom bottom',
        //         pin: true,
        //         scrub: true,
        //         markers: true,
        //         onUpdate: (self) => {
        //             const frameIndex = Math.min(
        //                 frameCount - 1,
        //                 Math.ceil(self.progress * frameCount)
        //             );

        //             // Update canvas image
        //             const updateImage = (index) => {
        //                 const currentImg = new Image();
        //                 currentImg.src = currentFrame(index);
        //                 currentImg.onload = () => {
        //                     context.drawImage(currentImg, 0, 0);
        //                     console.log(currentImg);
        //                 };
        //             };

        //             updateImage(frameIndex + 1);
        //         }
        //     }
        // });

        // // Preload images
        // preloadImages();
        // console.log('preloaded');

        const canvas = document.querySelector("#page2>canvas");
        const context = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener("resize", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        });

        const frameCount = 136;
        const currentFrame = (index) =>
            `https://minio.alcheringa.in/alchercamedia/hero_mobile/${index.toString().padStart(4, "0")}.jpg`;

        const images = [];
        const sequence = {
            frame: 0
        };

        for (let i = 40; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            images.push(img);
        }

        gsap.to(sequence, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "power2.inOut",
            scrollTrigger: {
                scrub: 0.05,
                start: `10% top`,
                end: `340% top`,
                trigger: "#page2"
            },
            onUpdate: render
        });

        images[0].onload = render;

        function render() {
            scaleImage(images[Math.min(sequence.frame, 95)], context);
        }

        function scaleImage(img, ctx) {
            var canvas = ctx.canvas;
            var hRatio = canvas.width / img.width;
            var vRatio = canvas.height / img.height;
            var ratio = Math.max(hRatio, vRatio);
            var centerShift_x = (canvas.width - img.width * ratio) / 2;
            var centerShift_y = (canvas.height - img.height * ratio) / 2;
            context.clearRect(0, 0, canvas.width, canvas.height);
            console.log(sequence.frame);
            context.drawImage(
                images[Math.min(sequence.frame, 95)],
                0,
                0,
                img.width,
                img.height,
                centerShift_x,
                centerShift_y,
                img.width * ratio,
                img.height * ratio
            );
        }

        ScrollTrigger.create({
            trigger: "#main",
            pin: true,
            start: `top top`,
            end: `340% 100%`
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        // <div className="sm:hidden h-[200vh] w-full flex flex-col justify-center items-center pointer-events-none">
        //     <div className='w-full h-[100vh]'>heell</div>
        //     <canvas
        //         className="sm:hidden w-[100%] h-[100vh] canvas"
        //     />
        // </div>
        <div class="smooth-wrapper">
            <section class="first">
            </section>
            <div id="main">
                <div id="main2">
                    <div id="page2">
                        <canvas></canvas>
                    </div>
                </div>
            </div>
            <section class="first">
            </section>
        </div>
    );
};

export default ScrollImageSequence;