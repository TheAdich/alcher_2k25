"use client"
import { OrbitControls, SpotLight } from '@react-three/drei';
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import './merch_route.css';
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
        <div className='maindiv' style={{ width: '100%', height: '120vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <div className="marquee">
                <div className='marquee1'>
                    <Marquee direction="right" speed={30} >
                        <Image src="./cloudRight.svg" className='cloudRight cloud' width="1000" height="1000" />
                        <Image src="./cloudRight.svg" className='cloudRight cloud' width="1000" height="1000" />
                        <Image src="./cloudRight.svg" className='cloudRight cloud' width="1000" height="1000" />
                    </Marquee>
                </div>
                <div className="marquee2">
                    <Marquee speed={10} >
                        <Image src="./cloudLeft.svg" className='cloudLeft cloud' width="1000" height="1000" />
                        <Image src="./cloudLeft.svg" className='cloudLeft cloud' width="1000" height="1000" />
                        <Image src="./cloudLeft.svg" className='cloudLeft cloud' width="1000" height="1000" />
                    </Marquee>
                </div>
            </div>
            <h1 className='logo' style={{ fontFamily: 'BrickPixel' }}>Alcher Merchandise</h1>
            <div className='box'>
                <Canvas key={current} className="model2">
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                        target={target} // Set the target to the center of the model
                    />

                    {/* {current == 0 && <SpotLight color={'#FE3989'} position={[0, 2.5, 0]} angle={0.7} penumbra={0.5} intensity={2} />}
                    {current != 0 && <ambientLight intensity={0.5} />} */}
                    <ambientLight />


                    {current == 0 && <Hoodie />}
                    {current == 1 && <Regular />}
                    {current == 2 && <Oversized />}

                    {/* 
                    <Model url={model[current].url} setTarget={setTarget} scale={model[current].scale} /> */}
                </Canvas>
            </div>
            <div className="arrowLeft">
                <h3 style={{ fontFamily: 'StoneSlab' }}>Drippin'</h3>
                <p style={{ fontFamily: 'StoneSlab' }}>Lorem ipsum dolor</p>
                <p style={{ fontFamily: 'GameTape' }}>Lorem ipsum, dolor sit amet consectetur<br /> adipisicing elit. Nesciunt aut, aperiam <br />unde sunt ullam ipsa doloribus incidunt!<br /> Magni veritatis cumque provident nam, <br />  voluptatibus minus quam, dolores repellendus<br /> expedita molestias at voluptas similique!</p>
            </div>
            <div className="mobile-merch">
                <h3 style={{ fontFamily: 'StoneSlab' }}>Drippin'</h3>
                <p style={{ fontFamily: 'StoneSlab' }}>Lorem ipsum dolor</p>
                <p style={{ fontFamily: 'GameTape' }}>Lorem ipsum, dolor sit amet consectetur<br /> adipisicing elit. Nesciunt aut, aperiam <br />unde sunt ullam ipsa doloribus incidunt!<br /> Magni veritatis cumque provident nam, <br />  voluptatibus minus quam, dolores repellendus<br /> expedita molestias at voluptas similique!</p>
            </div>
            <a href="">
                <Image src="./btnMerch.svg" className='btnMerch' width="50" height="50" />
            </a>
            <div className="arrowRight">
                <h3 style={{ fontFamily: 'BrickPixel' }}>$ 800</h3>
                <p style={{ fontFamily: 'GameTape' }}>+$80 for delivery</p>
                <Image src="./dash.svg" className='dash' width="30" height="30" />
            </div>
            <div className="mobile-bottom">
                <h3 style={{ fontFamily: 'BrickPixel' }}>$ 800</h3>
                <p style={{ fontFamily: 'GameTape' }}>+$80 for delivery</p>
                <Image src="./dash.svg" className='dash' width="30" height="30" />
            </div>
            <a href="">
                <Image src="./mobile-btn.svg" className='mobile-btn' width="50" height="50" />
            </a>
            <div className="foot"></div>
            <div className="leftBtns">
                <button>
                    <Image src="./arrowleft.svg" className='leftMerchbtn' width="70" height="70" onClick={handleLeft} />
                </button>
                <Image src={tshirts[left]} className='leftTshirt' width="130" height="130" />
            </div>
            <div className="merch-btn">
                <div className={current == 0 ? 'activeBtn merch3d bot' : ' merch3d bot'} onClick={() => setCurrent(0)}>
                    <Image src="./button1.svg" width="150" height="150" />
                </div>
                <div className={current == 1 ? 'activeBtn merch3d bot' : ' merch3d bot'} onClick={() => setCurrent(1)}>
                    <Image src="./button2.svg" width="150" height="150" />
                </div>
                <div className={current == 2 ? 'activeBtn merch3d bot' : ' merch3d bot'} onClick={() => setCurrent(2)}>
                    <Image src="./button3.svg" width="150" height="150" />
                </div>
            </div>
            <div className="rightBtns">
                <Image src={tshirts[right]} className='rightTshirt' width="130" height="130" />
                <button>
                    <Image src="./rightBtn.svg" className='rightMerchbtn' width="70" height="70" onClick={handleRight} />
                </button>
            </div>
        </div>
    );
}