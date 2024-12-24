import React from "react";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page10 = () => {
  useGSAP(()=>{
    gsap.to("#hardtext", {
      y: 300, 
      scrollTrigger: {
        trigger: "#hardtext",
        start: "top 60%",
        end: "bottom 0%",
        scrub:0.01,
      },
    });
  })
  return (
    <>
      <div className="h-[180vh] w-full relative flex justify-center ">
      <h1 id="hardtext" className='absolute right-20 top-32 text-[10vw] font-[anzo6] uppercase text-black z-[10]'>hard</h1>
        <img
          className="sticky h-[100vh] top-[0%] z-[-1]"
          src="https://static.wixstatic.com/media/f1c650_8b19a36c22b44b04aa056d2f4482aeac~mv2.jpeg/v1/fill/w_879,h_676,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f1c650_8b19a36c22b44b04aa056d2f4482aeac~mv2.jpeg"
          alt=""
        />
        <img
          className="absolute h-[181vh] w-[350vh] z-[1]"
          src="https://static.wixstatic.com/media/f1c650_360814da288f418991547fa9d5e08904~mv2.png/v1/fill/w_879,h_676,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Subtract.png"
          alt=""
        />
      </div>

      <div className="flex justify-center h-max">
        <img
          className="h-max"
          src="https://static.wixstatic.com/media/f1c650_50b3eb1a161343a6a87b1fe48cb27f9a~mv2.png/v1/fill/w_810,h_1210,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Astro%20Me.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Page10;
