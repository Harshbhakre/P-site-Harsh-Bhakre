import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const page7 = () => {
  useGSAP(() => {
    gsap.to("#icon1", {
      rotate: 360,
      duration: 6,
      repeat: -1,
      ease: "linear",
      yoyo: true,
    });
    gsap.to("#icon2", {
      transform: "rotateY(180deg)",
      duration: 5,
      repeat: -1,
      ease: "linear",
      yoyo: true,
    });
    gsap.to("#icon3", {
      scale: 1.1,
      duration: 1,
      repeat: -1,
      ease: "power.in",
      yoyo: true,
    });
    gsap.from("#bgimg", {
      rotate: -50,
      duration: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: "#bgimg",
        scrub: 0.2,
        start: "top 50%",
        end: "top -60%",
      },
    });
    gsap.to(".arrow2", {
      rotate:-90, 
      scrollTrigger: {
        trigger: ".arrow2",
        start: "top 80%",
        end: "bottom 0%",
        scrub:0.1,
      },
    });
  });

  return (
    <div className="h-[155vh] p-3 ">
      <img
        id="bgimg"
        className="absolute left-[20%] mt-28 bg-cover bg-center bg-no-repeat opacity-[60%]"
        src="https://static.wixstatic.com/media/f1c650_e5c1c4b281ea418a8663a17e66f283f1~mv2.png/v1/fill/w_777,h_668,al_c,q_90,enc_avif,quality_auto/triangle%203.png"
        alt=""
      />
      <div className="shadow-lg overflow-hidden  shadow-gray-600 h-full w-full rounded-[30px] bg-black">
        <div className="h-[35vw] flex items-center justify-between px-16">
          <div className="h-full w-max mt-[-5vh] ">
            <h1 className="text-[20vw] opacity-[60%] uppercase font-[anzo6] tracking-wide">
              how
            </h1>
            <h1 className="text-[20vw] uppercase font-[anzo6] tracking-wide leading-[1vw]">
              can
            </h1>
          </div>
          <div className="h-full w-max ml-6">
            <h1 className="text-[20vw] uppercase font-[anzo6] tracking-wide">
              i help
            </h1>
            <h1 className="text-[20vw] uppercase font-[anzo6] tracking-wide leading-[1vw] ml-28">
              you
            </h1>
          </div>
        </div>
        <div className="h-[20vw] w-full flex items-center justify-evenly p-12 mt-10">
          <div className="h-full relative">
            <h1 className="font-[anzo1] m-4 leading-5 ">
              <span className="opacity-[60%]">
                I am a self-taught web and brand designer with a passion for
                creating unique and timeless
              </span>{" "}
              masterpieces for ambitious professionals, entrepreneurs, artists,
              and boutique businesses.
            </h1>
            <h1 className="font-[anzo1] m-4 leading-5">
              Bespoke Freelance for agencies.
            </h1>
            <FaCircleArrowUp className="arrow2 absolute rotate-90 right-[5%] text-[2vw] bottom-[4%]" />
            <div className="flex h-[5vw]  font-[anzo6] ml-16 ">
              <img
                id="icon1"
                src="https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_86,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SUN.png"
                alt=""
              />
              <h1 className="uppercase ml-4 text-[4vw]">design</h1>
              <p className="uppercase font-[anzo1] mt-10">01</p>
            </div>
          </div>
          <div className="h-full ">
            <h1 className="font-[anzo1] m-4 leading-5 px-10">
              <span className="opacity-[60%]">
                {" "}
                With a background in strategic marketing and acknowledged
                expertise in web development,
              </span>{" "}
              I aim to minimize my client's resources spent on macro and
              micro-management, marketing research, and hiring a whole team of a
              larger agency.
            </h1>
            <div className="flex h-[5vw]  mt-8 font-[anzo6] ml-16">
              <img
                id="icon2"
                src="https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EARTH.png"
                alt=""
              />
              <h1 className="uppercase ml-6 text-[4vw] ">development</h1>
              <p className="uppercase font-[anzo1] mt-10">02</p>
            </div>
          </div>
          <div className="h-full">
            <h1 className="font-[anzo1] m-4 leading-5 px-10">
              My mission is to drive exceptional growth for my clients by
              increasing their brand appearance,{" "}
              <span className="opacity-[60%]">
                defining their identity, and engaging customers through
                captivating black-and-white aesthetics with a modern, luxurious,
                and minimalistic touch.
              </span>
            </h1>
            <div className="flex justify-center h-[5vw]  mt-8 font-[anzo6] ml-16">
              <img
                id="icon3"
                src="https://static.wixstatic.com/media/f1c650_b0000fd9a706421aa0ea84da62ae3354~mv2.png/v1/fill/w_83,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/START%20UP.png"
                alt=""
              />
              <h1 className="uppercase ml-6 text-[4vw]">branding</h1>
              <p className="uppercase font-[anzo1] mt-10">03</p>
            </div>
          </div>
        </div>

        <div className="mt-24 ml-16">
          <h3 className="uppercase font-[anzo4] opacity-[60%] ">
            got a project,
          </h3>
          <h3 className=" font-[anzo2] leading-3 uppercase text-lg">
            <span className="opacity-[60%] font-[anzo4]"> then please</span>{" "}
            contact me
          </h3>
        </div>
      </div>
    </div>
  );
};

export default page7;
