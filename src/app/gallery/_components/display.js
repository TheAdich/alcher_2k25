

"use client";

import { useEffect, useState } from "react";
import styles from "./display.module.css";
import Image from "next/image";
import gal1 from "./gal1.png";
import gal2 from "./gal2.png";
import gal3 from "./gal3.png";
import gal4 from "./gal4.png";
import gal5 from "./gal5.png";
import gal6 from "./gal6.png";
import gal7 from "./gal7.png";
import gal8 from "./gal8.png";
import gal9 from "./gal9.png";
import gal10 from "./gal10.png";
import frame1 from "./frame1.png";
import frame2 from "./frame2.png";
import frame3 from "./frame3.png";
import frame5 from "./frame5.png";
import frame4 from "./frame4.png";
import gal17 from "./gal17.png";
import gal19 from "./gal19.png";
import gal16 from "./gal16.png";
import gal20 from "./gal20.png";
import gal18 from "./gal18.png";
import GalleryPopup from "./galleryPopup";
import GalleryCloud from "./galleryCloud";

const New=()=>{
  const [flippingIndex,setFlippingIndex] = useState(null);
  useEffect(() => {
    const flipRandomImage = () => {
      const totalImages = 9;
        const randomIndex = Math.floor(Math.random() * totalImages);
 
      setFlippingIndex(randomIndex);
     console.log(randomIndex);
      setTimeout(() => {
        setFlippingIndex(null);
      }, 1000);
    };    const interval = setInterval(flipRandomImage, 3000);
    return () => clearInterval(interval);
  },[])
return (
<div className={styles.container}>
      <div className={styles.grid_con}>
        <div className={`${styles.grid__item} ${styles.grid1} ${styles.card}  ${flippingIndex === 1 ? styles.flip : ""}`}>
        <div className={styles.cardFront}>
        <Image 
      className={styles.image}
      src={gal1}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal1}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div>            
          {/* <div className={styles.cardBack}>
          <Image className={`${styles.image}`}  src={gal1} alt="Gallery 1" width={130} height={130} /></div>                                                                               <Image className={`${styles.image}`} src={gal1} alt="Gallery 1" width={130} height={130} />  */}
        </div>
        <div className={`${styles.grid__item} ${styles.grid2} ${styles.card} ${flippingIndex === 2 ? styles.flip : ""}`}>
        <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal10}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal10}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        



<div className={`${styles.grid__item} ${styles.grid5} ${styles.card} ${flippingIndex === 5 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal7}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal7}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
<div className={`${styles.grid__item} ${styles.grid4} ${styles.card} ${flippingIndex === 4 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal8}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal8}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        
        {/* <div className={`${styles.grid__item} ${styles.grid6} ${styles.fImg1}`}>
          <Image className={styles.image} src={gal2} alt="Gallery 2" width={130} height={130}/>
        </div> */}

<div className={`${styles.grid__item} ${styles.grid6} ${styles.card} ${flippingIndex === 6 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal2}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal2}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        
          <div className={`${styles.grid__item} ${styles.grid7} ${styles.card} ${flippingIndex === 7 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal3}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal3}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
       
        <div className={`${styles.grid__item} ${styles.grid10} ${styles.card} ${flippingIndex === 10 ? styles.flip : ""}`}>
        
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal9}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal9}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
<div className={`${styles.grid__item} ${styles.grid9} ${styles.card} ${flippingIndex === 9 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal6}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal6}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
       
      </div>
     

<div className={styles.grid_con}>
        <div className={`${styles.grid__item} ${styles.grid1} ${styles.card}  ${flippingIndex === 2 ? styles.flip : ""}`}>
        <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal17}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal17}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div>            
          {/* <div className={styles.cardBack}>
          <Image className={`${styles.image}`}  src={gal1} alt="Gallery 1" width={130} height={130} /></div>                                                                               <Image className={`${styles.image}`} src={gal1} alt="Gallery 1" width={130} height={130} />  */}
        </div>
        <div className={`${styles.grid__item} ${styles.grid2} ${styles.card} ${flippingIndex === 4 ? styles.flip : ""}`}>
        <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal18}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal18}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
       

<div className={`${styles.grid__item} ${styles.grid4} ${styles.card} ${flippingIndex === 8 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={frame5}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={frame5}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        <div className={`${styles.grid__item} ${styles.grid5} ${styles.card} ${flippingIndex === 10 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal16}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal16}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
       

<div className={`${styles.grid__item} ${styles.grid6} ${styles.card} ${flippingIndex === 1 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal19}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal19}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        
          <div className={`${styles.grid__item} ${styles.grid7} ${styles.card} ${flippingIndex === 3 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal20}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal20}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        

<div className={`${styles.grid__item} ${styles.grid9} ${styles.card} ${flippingIndex === 7 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={frame4}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={frame4}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
       
          <div className={`${styles.grid__item} ${styles.grid10} ${styles.card} ${flippingIndex === 9 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={frame3}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={frame3}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
      </div>

    </div>

)
}


const Display = () => {
  const [flippingIndex, setFlippingIndex] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Monitor screen width
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  
  useEffect(() => {
    const flipRandomImage = () => {
      const totalImages = 9;
        const randomIndex = Math.floor(Math.random() * totalImages);
 
      setFlippingIndex(randomIndex);
     console.log(randomIndex);
      setTimeout(() => {
        setFlippingIndex(null);
      }, 1000);
    };    const interval = setInterval(flipRandomImage, 3000);
    return () => clearInterval(interval);
  },[])

  if (isSmallScreen) {
    return <New />;
  }
  return (


    <div className={styles.container}>
      <div className={styles.grid_con}>
        <div className={`${styles.grid__item} ${styles.grid1} ${styles.card}  ${flippingIndex === 1 ? styles.flip : ""}`}>
        <div className={styles.cardFront}>
        <Image 
      className={styles.image}
      src={gal1}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal1}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div>            
          {/* <div className={styles.cardBack}>
          <Image className={`${styles.image}`}  src={gal1} alt="Gallery 1" width={130} height={130} /></div>                                                                               <Image className={`${styles.image}`} src={gal1} alt="Gallery 1" width={130} height={130} />  */}
        </div>
        <div className={`${styles.grid__item} ${styles.grid2} ${styles.card} ${flippingIndex === 2 ? styles.flip : ""}`}>
        <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal10}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal10}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        {/* <div className={`${styles.grid__item} ${styles.grid3}`}>
          <Image className={styles.image} src={gal4} alt="Gallery 4" width={130} height={130} />
        </div> */}
          <div className={`${styles.grid__item} ${styles.grid3} ${styles.card} ${flippingIndex === 3 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal4}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal4}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        {/* <div className={`${styles.grid__item} ${styles.grid4}`}>
          <Image className={styles.image} src={gal8} alt="Gallery 8" width={130} height={130} />
        </div> */}

<div className={`${styles.grid__item} ${styles.grid4} ${styles.card} ${flippingIndex === 4 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal8}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal8}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        <div className={`${styles.grid__item} ${styles.grid5} ${styles.card} ${flippingIndex === 5 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal7}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal7}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        {/* <div className={`${styles.grid__item} ${styles.grid6} ${styles.fImg1}`}>
          <Image className={styles.image} src={gal2} alt="Gallery 2" width={130} height={130}/>
        </div> */}

<div className={`${styles.grid__item} ${styles.grid6} ${styles.card} ${flippingIndex === 6 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal2}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal2}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        {/* <div className={`${styles.grid__item} ${styles.grid7}`}>
          <Image className={styles.image} src={gal3} alt="Gallery 3" width={130} height={130}/>
        </div> */}
          <div className={`${styles.grid__item} ${styles.grid7} ${styles.card} ${flippingIndex === 7 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal3}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal3}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        {/* <div className={`${styles.grid__item} ${styles.grid8}`}>
          <Image className={styles.image} src={gal5} alt="Gallery 5" width={130} height={130} />
        </div> */}
          <div className={`${styles.grid__item} ${styles.grid8} ${styles.card} ${flippingIndex === 8 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal5}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal5}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        {/* <div className={`${styles.grid__item} ${styles.grid9}`}>
          <Image className={styles.image} src={gal6} alt="Gallery 6" width={130} height={130}/>
        </div> */}

<div className={`${styles.grid__item} ${styles.grid9} ${styles.card} ${flippingIndex === 9 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal6}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal6}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        {/* <div className={`${styles.grid__item} ${styles.grid10}`}>
          <Image className={styles.image} src={gal9} alt="Gallery 9" width={130} height={130} />
        </div> */}
          <div className={`${styles.grid__item} ${styles.grid10} ${styles.card} ${flippingIndex === 10 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal9}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal9}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
      </div>
      
<div className={styles.grid_con}>
        <div className={`${styles.grid__item} ${styles.grid1} ${styles.card}  ${flippingIndex === 2 ? styles.flip : ""}`}>
        <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal17}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal17}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div>            
          {/* <div className={styles.cardBack}>
          <Image className={`${styles.image}`}  src={gal1} alt="Gallery 1" width={130} height={130} /></div>                                                                               <Image className={`${styles.image}`} src={gal1} alt="Gallery 1" width={130} height={130} />  */}
        </div>
        <div className={`${styles.grid__item} ${styles.grid2} ${styles.card} ${flippingIndex === 4 ? styles.flip : ""}`}>
        <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal18}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal18}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        
          <div className={`${styles.grid__item} ${styles.grid3} ${styles.card} ${flippingIndex === 6 ? styles.flip : ""}`}>
         
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={frame1}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={frame1}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        

<div className={`${styles.grid__item} ${styles.grid4} ${styles.card} ${flippingIndex === 8 ? styles.flip : ""}`}>
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={frame5}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={frame5}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        <div className={`${styles.grid__item} ${styles.grid5} ${styles.card} ${flippingIndex === 10 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal16}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal16}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        

<div className={`${styles.grid__item} ${styles.grid6} ${styles.card} ${flippingIndex === 1 ? styles.flip : ""}`}>
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal19}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal19}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
       
          <div className={`${styles.grid__item} ${styles.grid7} ${styles.card} ${flippingIndex === 3 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={gal20}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={gal20}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        {/* <div className={`${styles.grid__item} ${styles.grid8}`}>
          <Image className={styles.image} src={gal5} alt="Gallery 5" width={130} height={130} />
        </div> */}
          <div className={`${styles.grid__item} ${styles.grid8} ${styles.card} ${flippingIndex === 5 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={frame2}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={frame2}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        {/* <div className={`${styles.grid__item} ${styles.grid9}`}>
          <Image className={styles.image} src={gal6} alt="Gallery 6" width={130} height={130}/>
        </div> */}

<div className={`${styles.grid__item} ${styles.grid9} ${styles.card} ${flippingIndex === 7 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={frame4}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={frame4}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
        {/* <div className={`${styles.grid__item} ${styles.grid10}`}>
          <Image className={styles.image} src={gal9} alt="Gallery 9" width={130} height={130} />
        </div> */}
          <div className={`${styles.grid__item} ${styles.grid10} ${styles.card} ${flippingIndex === 9 ? styles.flip : ""}`}>
          {/* <Image className={styles.image} src={gal7} alt="Gallery 7"width={130} height={130} /> */}
          <div className={styles.cardFront}>
        <Image
      className={styles.image}
      src={frame3}
      alt="Gallery 1"
      layout="fill" 
    />
          </div>    
          <div className={styles.cardBack}>
        <Image
      className={styles.image}
      src={frame3}
      alt="Gallery 1"
      layout="fill"
      
    />
          </div> 
        </div>
      </div>

    </div>
  );
};


function page() {
  return (
    <>
    <GalleryCloud/>
    <Display/>
      
    </>
  )
}

export default page


