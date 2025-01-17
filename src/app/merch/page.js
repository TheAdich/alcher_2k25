"use client"
import { OrbitControls, SpotLight } from '@react-three/drei';
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import styles from './merch_route.module.css';
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import { Regular } from './models3d/Regular';
import { Hoodie } from './models3d/Hoodie';
import { Oversized } from './models3d/Oversized';
import Navbar from '../navbar';

function Model({ url, setTarget, scale }) {
    const gltf = useLoader(GLTFLoader, url, loader => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/draco/'); // Ensure the path is correct
        loader.setDRACOLoader(dracoLoader);
    });
    const modelRef = useRef(null);

    useEffect(() => {
        if (modelRef.current) {
            const box = new THREE.Box3().setFromObject(modelRef.current);
            const center = box.getCenter(new THREE.Vector3());
            setTarget(center);
        }
    }, [gltf, setTarget]);

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.002;
        }
    });

    return <primitive ref={modelRef} object={gltf.scene} scale={scale} />;
}

export default function Page() {
    const [current, setCurrent] = useState(1);
    const [target, setTarget] = useState(new THREE.Vector3(0, 0, 0));
    const tshirts = ["./tshirt1.svg", "./tshirt2.svg", "./tshirt3.svg"];
    const model = [
        { url: "./Hoodie.glb", scale: [19.6, 19.6, 19.6] },
        { url: "./Regular.glb", scale: [9, 9, 9] },
        { url: "./Oversized.glb", scale: [2.9, 2.9, 2.9] }
    ];
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(2);

    const handleRight = () => {
        setCurrent((current + 1) % 3);
        setLeft((left + 1) % 3);
        setRight((right + 1) % 3);
        console.log("Current:", current, "Left:", left, "Right:", right);
    };

    const handleLeft = () => {
        setCurrent((current + 2) % 3);
        setLeft((left + 2) % 3);
        setRight((right + 2) % 3);
        console.log("Current:", current, "Left:", left, "Right:", right);
    };

    return (
        <div className={styles.maindiv} style={{ width: '100%', height: '120vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <div className={styles.marquee}>
                <div className={styles.marquee1}>
                    <Marquee direction="right" speed={30} >
                        <Image src="./cloudRight.svg" className={`${styles.cloudRight} ${styles.cloud}`} width="1000" height="1000" />
                        <Image src="./cloudRight.svg" className={`${styles.cloudRight} ${styles.cloud}`} width="1000" height="1000" />
                        <Image src="./cloudRight.svg" className={`${styles.cloudRight} ${styles.cloud}`} width="1000" height="1000" />
                    </Marquee>
                </div>
                <div className={styles.marquee2}>
                    <Marquee speed={10} >
                        <Image src="./cloudLeft.svg" className={`${styles.cloudLeft} ${styles.cloud}`} width="1000" height="1000" />
                        <Image src="./cloudLeft.svg" className={`${styles.cloudLeft} ${styles.cloud}`} width="1000" height="1000" />
                        <Image src="./cloudLeft.svg" className={`${styles.cloudLeft} ${styles.cloud}`} width="1000" height="1000" />
                    </Marquee>
                </div>
            </div>
            <h1 className={styles.logo} style={{ fontFamily: 'BrickPixel' }}>Alcher Merchandise</h1>
            <div className={styles.box}>
                <Canvas key={current} className={styles.model2}>
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                        target={target} // Set the target to the center of the model
                    />
                    <ambientLight />

                    {current == 0 && <Hoodie />}
                    {current == 1 && <Regular />}
                    {current == 2 && <Oversized />}

                    {/* 
                    <Model url={model[current].url} setTarget={setTarget} scale={model[current].scale} /> */}
                </Canvas>
            </div>

            {current == 0 &&  <div className={styles.arrowLeft}>
                <h3 style={{ fontFamily: 'StoneSlab' }}>Drippin 0'</h3>
                <p style={{ fontFamily: 'StoneSlab' }}>Lorem ipsum dolor</p>
                <p style={{ fontFamily: 'GameTape' }}>Lorem ipsum, dolor sit amet consectetur<br /> adipisicing elit. Nesciunt aut, aperiam <br />unde sunt ullam ipsa doloribus incidunt!<br /> Magni veritatis cumque provident nam, <br />  voluptatibus minus quam, dolores repellendus<br /> expedita molestias at voluptas similique!</p>
            </div>}
            {current == 1 &&  <div className={styles.arrowLeft}>
                <h3 style={{ fontFamily: 'StoneSlab' }}>Drippin 1'</h3>
                <p style={{ fontFamily: 'StoneSlab' }}>Lorem ipsum dolor</p>
                <p style={{ fontFamily: 'GameTape' }}>Lorem ipsum, dolor sit amet consectetur<br /> adipisicing elit. Nesciunt aut, aperiam <br />unde sunt ullam ipsa doloribus incidunt!<br /> Magni veritatis cumque provident nam, <br />  voluptatibus minus quam, dolores repellendus<br /> expedita molestias at voluptas similique!</p>
            </div>}
            {current == 2 &&  <div className={styles.arrowLeft}>
                <h3 style={{ fontFamily: 'StoneSlab' }}>Drippin 2'</h3>
                <p style={{ fontFamily: 'StoneSlab' }}>Lorem ipsum dolor</p>
                <p style={{ fontFamily: 'GameTape' }}>Lorem ipsum, dolor sit amet consectetur<br /> adipisicing elit. Nesciunt aut, aperiam <br />unde sunt ullam ipsa doloribus incidunt!<br /> Magni veritatis cumque provident nam, <br />  voluptatibus minus quam, dolores repellendus<br /> expedita molestias at voluptas similique!</p>
            </div>}

            {current == 0 &&  <div className={styles.mobileMerch}>
                <h3 style={{ fontFamily: 'StoneSlab' }}>Drippin 0'</h3>
                <p style={{ fontFamily: 'StoneSlab' }}>Lorem ipsum dolor</p>
                <p style={{ fontFamily: 'GameTape' }}>Lorem ipsum, dolor sit amet consectetur<br /> adipisicing elit. Nesciunt aut, aperiam <br />unde sunt ullam ipsa doloribus incidunt!<br /> Magni veritatis cumque provident nam, <br />  voluptatibus minus quam, dolores repellendus<br /> expedita molestias at voluptas similique!</p>
            </div> }
            {current == 1 &&  <div className={styles.mobileMerch}>
                <h3 style={{ fontFamily: 'StoneSlab' }}>Drippin 1'</h3>
                <p style={{ fontFamily: 'StoneSlab' }}>Lorem ipsum dolor</p>
                <p style={{ fontFamily: 'GameTape' }}>Lorem ipsum, dolor sit amet consectetur<br /> adipisicing elit. Nesciunt aut, aperiam <br />unde sunt ullam ipsa doloribus incidunt!<br /> Magni veritatis cumque provident nam, <br />  voluptatibus minus quam, dolores repellendus<br /> expedita molestias at voluptas similique!</p>
            </div> }
            {current == 2 &&  <div className={styles.mobileMerch}>
                <h3 style={{ fontFamily: 'StoneSlab' }}>Drippin 2'</h3>
                <p style={{ fontFamily: 'StoneSlab' }}>Lorem ipsum dolor</p>
                <p style={{ fontFamily: 'GameTape' }}>Lorem ipsum, dolor sit amet consectetur<br /> adipisicing elit. Nesciunt aut, aperiam <br />unde sunt ullam ipsa doloribus incidunt!<br /> Magni veritatis cumque provident nam, <br />  voluptatibus minus quam, dolores repellendus<br /> expedita molestias at voluptas similique!</p>
            </div> }

            {current == 0 &&  <a href="">
                <Image src="./btnMerch.svg" className={styles.btnMerch} width="50" height="50" />
            </a>}
            {current == 1 &&  <a href="">
                <Image src="./btnMerch.svg" className={styles.btnMerch} width="50" height="50" />
            </a>}
            {current == 2 &&  <a href="">
                <Image src="./btnMerch.svg" className={styles.btnMerch} width="50" height="50" />
            </a>}

            {current == 0 &&
            <div className={styles.arrowRight}>
                <h3 style={{ fontFamily: 'BrickPixel' }}>$ 800</h3>
                <p style={{ fontFamily: 'GameTape' }}>+$80 for delivery</p>
                <Image src="./dash.svg" className={styles.dash} width="30" height="30" />
            </div>}
            {current === 1 &&
            <div className={styles.arrowRight}>
                <h3 style={{ fontFamily: 'BrickPixel' }}>$ 800 </h3>
                <p style={{ fontFamily: 'GameTape' }}>+$81 for delivery</p>
                <Image src="./dash.svg" className={styles.dash} width="30" height="30" />
            </div>}
            {current == 2 &&
            <div className={styles.arrowRight}>
                <h3 style={{ fontFamily: 'BrickPixel' }}>$ 800</h3>
                <p style={{ fontFamily: 'GameTape' }}>+$82 for delivery</p>
                <Image src="./dash.svg" className={styles.dash} width="30" height="30" />
            </div>}

            {current == 0 &&     <div className={styles.mobileBottom}>
                <h3 style={{ fontFamily: 'BrickPixel' }}>$ 800</h3>
                <p style={{ fontFamily: 'GameTape' }}>+$80 for delivery</p>
                <Image src="./dash.svg" className={styles.dash} width="30" height="30" />
            </div>}
            {current == 1 &&<div className={styles.mobileBottom}>
                <h3 style={{ fontFamily: 'BrickPixel' }}>$ 800</h3>
                <p style={{ fontFamily: 'GameTape' }}>+$81 for delivery</p>
                <Image src="./dash.svg" className={styles.dash} width="30" height="30" />
            </div>}
            {current == 2 &&     <div className={styles.mobileBottom}>
                <h3 style={{ fontFamily: 'BrickPixel' }}>$ 800</h3>
                <p style={{ fontFamily: 'GameTape' }}>+$82 for delivery</p>
                <Image src="./dash.svg" className={styles.dash} width="30" height="30" />
            </div>}

            {current == 0 &&  <a href="">
                <Image src="./mobile-btn.svg" className={styles.mobileBtn} width="50" height="50" />
            </a>}
            {current == 1 &&  <a href="">
                <Image src="./mobile-btn.svg" className={styles.mobileBtn} width="50" height="50" />
            </a>}
            {current == 2 &&  <a href="">
                <Image src="./mobile-btn.svg" className={styles.mobileBtn} width="50" height="50" />
            </a>}

            <div className={styles.foot}></div>
            <div className={styles.leftBtns}>
                <button>
                    <Image src="./arrowleft.svg" className={styles.leftMerchbtn} width="70" height="70" onClick={handleLeft} />
                </button>
                <Image src={tshirts[left]} className={styles.leftTshirt} width="130" height="130" />
            </div>
            <div className={styles.merchBtn}>
                <div className={current == 0 ? `${styles.activeBtn} ${styles.merch3d} ${styles.bot}` : `${styles.merch3d} ${styles.bot}`} onClick={() => setCurrent(0)}>
                    <Image src="./button1.svg" width="150" height="150" />
                </div>
                <div className={current == 1 ? `${styles.activeBtn} ${styles.merch3d} ${styles.bot}` : `${styles.merch3d} ${styles.bot}`} onClick={() => setCurrent(1)}>
                    <Image src="./button2.svg" width="150" height="150" />
                </div>
                <div className={current == 2 ? `${styles.activeBtn} ${styles.merch3d} ${styles.bot}` : `${styles.merch3d} ${styles.bot}`} onClick={() => setCurrent(2)}>
                    <Image src="./button3.svg" width="150" height="150" />
                </div>
            </div>
            <div className={styles.rightBtns}>
                <Image src={tshirts[right]} className={styles.rightTshirt} width="130" height="130" />
                <button>
                    <Image src="./rightBtn.svg" className={styles.rightMerchbtn} width="70" height="70" onClick={handleRight} />
                </button>
            </div>
        </div>
    );
}