import React, { useRef, useState } from "react";
import TiltText from "../Components/TiltText";
import Page1Bottom from "../Components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const page1 = () => {
  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  
  const mouseMoving = (dets) => {
    
    setXVal((dets.clientX-tiltRef.current.getBoundingClientRect().x-tiltRef.current.getBoundingClientRect().width/6)/20)
    setYVal(-(dets.clientY-tiltRef.current.getBoundingClientRect().y-tiltRef.current.getBoundingClientRect().height/2)/5)
    
    
    
  };

  useGSAP(()=>{
    gsap.to(tiltRef.current,{
      transform :`rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration:5,
      ease:"ease.out"
    })
  },[xVal,yVal])


  return (
    <div
      onMouseMove={(dets) => {
        mouseMoving(dets);
      }}
      className="relative h-screen bg-white px-3 py-3"
    >
      <div id="page-in" className="relative shadow-lg py-12 px-16 shadow-gray-600 h-full w-full rounded-[30px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1320,h_620,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)] bg-right bg-cover">
        <img
          className=""
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png"
          alt=""
        />

        <TiltText abc={tiltRef} />

        <Page1Bottom />
      </div>
    </div>
  );
};

export default page1;
