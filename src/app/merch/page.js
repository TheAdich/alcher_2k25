"use client"
import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRef, useState } from 'react';
import './merch_route.css';
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import Navbar from '../navbar';

function Model({ url }) {
    const gltf = useLoader(GLTFLoader, url);
    const meshRef = useRef(null);

    useFrame(() => {
        if (meshRef.current) {
            // meshRef.current.rotation.y += 0.002;
        }
    });

    return <primitive ref={meshRef} object={gltf.scene} scale={0.05} />;
}

export default function Page() {
    const [current, setCurrent] = useState(1);
    const [tshirts, setTshirts] = useState(["./tshirt1.svg", "./tshirt2.svg", "./tshirt3.svg"]);
    const [model, setModel] = useState(["./model1.glb", "./model2.glb", "./model3.glb"]);
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(2);
    const [center, setCenter] = useState(1);



    const handleRight = () => {
        setCurrent((current+1)%3);
        setLeft((left+1)%3);
        setRight((right+1)%3);

        // setTshirts((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
        // setModel((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
    };

    const handleLeft = () => {
        setCurrent((current+2)%3);
        setLeft((left+2)%3);
        setRight((right+2)%3);
        // setTshirts((prev) => [...prev.slice(1), prev[0]]);
        // setModel((prev) => [...prev.slice(1), prev[0]]);
    };

    // const [model3Class, setModel3Class] = useState('model3 box');
    // const [model1Class, setModel1Class] = useState('model1 box');
    // const [model2Class, setModel2Class] = useState('model2 box');

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
       
       {/* <Image src="./AlcherMerchandise.svg" className='logo' width="200" height="200" /> */}
       <h1 className='logo' style={{ fontFamily: 'BrickPixel' }}>Alcher Merchandise</h1>

            <div className='box'>

            {/* <Canvas className={model1Class}>
                <OrbitControls 
                    // ref={}
                    enableZoom={false} 
                    enablePan={false} 
                    maxPolarAngle={Math.PI / 2} 
                    minPolarAngle={Math.PI / 2} 
                />
                <ambientLight />
                <Model url={model[0]} />
            </Canvas> */}

            <Canvas className="model2">
                <OrbitControls 
                    enableZoom={false} 
                    enablePan={false} 
                    maxPolarAngle={Math.PI / 2} 
                    minPolarAngle={Math.PI / 2} 
                />
                <ambientLight />
                <Model url={model[current]}  />
            </Canvas>
        
            {/* <Canvas className={model3Class}>
                <OrbitControls 
                    enableZoom={false} 
                    enablePan={false} 
                    maxPolarAngle={Math.PI / 2} 
                    minPolarAngle={Math.PI / 2}     
                />
                <ambientLight />
                <Model url={model[2]} />
            </Canvas> */}
            </div>
            

            {/* <Image src="./mobile-merch.svg" className='mobile-merch' width="50" height="50"  /> */}

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
{/* 
            <Image src="./leftText.svg" className='arrowLeft' width="50" height="50" onClick={handleLeft} /> */}
            <a href="">

            <Image src="./btnMerch.svg" className='btnMerch' width="50" height="50"  />
            </a>

            <div className="arrowRight">
                <h3 style={{ fontFamily: 'BrickPixel' }}>$ 800</h3>
                <p style={{ fontFamily: 'GameTape' }}>+$80 for delivery</p>
            <Image src="./dash.svg" className='dash' width="30" height="30"/>
            </div>
            <div className="mobile-bottom">
                <h3 style={{ fontFamily: 'BrickPixel' }}>$ 800</h3>
                <p style={{ fontFamily: 'GameTape' }}>+$80 for delivery</p>
            <Image src="./dash.svg" className='dash' width="30" height="30"/>
            </div>
            {/* <Image src="./textRight.svg" className='arrowRight' width="50" height="50" onClick={handleLeft} /> */}

            {/* <Image src="./mobile-bottom.svg" className='mobile-bottom' width="50" height="50"/> */}
            <a href="">

            <Image src="./mobile-btn.svg" className='mobile-btn' width="50" height="50"/>
            </a>


            <div className="foot">

            </div>

        <div className="leftBtns">
            <button>
                
            <Image src="./arrowleft.svg" className='leftMerchbtn' width="70" height="70"  onClick={handleLeft} />
            </button>
            <Image src={tshirts[left]}  className='leftTshirt'width="130" height="130" />
        </div>
        <div className="merch-btn">
        <button className={current == 0? 'activeBtn merch3d' : ' merch3d'}>
                <Image src="./button1.svg" width="150" height="150" />
            </button>
            <button className={current == 1? 'activeBtn merch3d' : ' merch3d'}> 
                <Image src="./button2.svg" width="150" height="150" />
            </button>
            <button className={current == 2? 'activeBtn merch3d' : ' merch3d'}> 
                <Image src="./button3.svg" width="150" height="150" />
            </button>
        </div>
        

    
        <div className="rightBtns">
            <Image src={tshirts[right]}  className='rightTshirt'width="130" height="130" />
            <button>
            <Image src="./rightBtn.svg" className='rightMerchbtn' width="70" height="70" onClick={handleRight} />
            </button>
        </div>

            {/* <button className='left' onClick={handleLeft}>Left</button>
            <button className='right' onClick={handleRight}>Right</button> */}
        </div>
    );
}