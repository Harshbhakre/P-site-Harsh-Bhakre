import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const Page8 = () => {
  useGSAP(() => {
    gsap.to("#page8img", {
      rotate: "+=6", // Move 6 degrees per tick
      duration: 1, // Time for each tick
      repeat: -1, // Infinite loop
      ease: "power1.inOut",
      yoyo: true,
    });
    gsap.from("#textanimation", {
      opacity: 0,
      duration: 2,
      stagger: 1,
      scrollTrigger: {
        trigger: "#textanimation",
        start: "top 70%",
        end: "top -40%",
        scrub: 3,
      },
    });
    gsap.from(".pageend", {
      opacity: 0,
      duration: 2,
      stagger: 1,
      scrollTrigger: {
        trigger: ".pageend",
        start: "top 80%",
        end: "top -40%",
      },
    });
    gsap.to(".arrow", {
      rotate:-90, 
      scrollTrigger: {
        trigger: ".arrow",
        start: "top 60%",
        end: "bottom 0%",
        scrub:0.1,
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
    <div className="h-[155vh] p-3 relative ">
      <img
        id="page8img"
        src="https://drive.google.com/file/d/1smD-z2bQKxClsatjevfwE9H5lmHkahtr/view?usp=drive_link"
        className="absolute top-[31vw] left-[6vw] h-[30vw]"
      />
      <div className="shadow-lg overflow-hidden  shadow-gray-600 h-full w-full rounded-[30px] bg-black">
        <div className="h-[65vw] flex items-center justify-between px-16 ">
          <div className="h-full w-max mt-[-5vh] relative">
            <h1 className="text-[20vw] uppercase font-[anzo6] tracking-wide">
              right
            </h1>
            <h1 className="text-[20vw] opacity-[60%] uppercase font-[anzo6] tracking-wide leading-[1vw]">
              fit
            </h1>
            <FaCircleArrowUp className="arrow absolute rotate-90 right-[40%] text-[3vw] bottom-[45%]" />
          </div>
          <div className="h-full flex flex-col w-[65%] pl-20 pr-10">
            <div className="h-full w-full mt-[6vw] " id="textanimation">
              <h3 className="uppercase font-[anzo4] opacity-[60%] text-lg leading-6">
                personality
              </h3>
              <h3 className="font-[anzo2] text-lg leading-6">
                Business relationships build on trust and compassion vs how can
                I get more for less +/-
              </h3>
            </div>
            <div className="h-full w-full mt-[1vw] " id="textanimation">
              <h3 className="uppercase font-[anzo4] opacity-[60%] text-lg leading-6">
                approach
              </h3>
              <h3 className="font-[anzo2] text-lg leading-6">
                Full dive into personality, goals and objectives with
                transparency of worq process vs template and unmanageable office
                routine +/-
              </h3>
            </div>
            <div className="h-full w-full mt-[1vw] " id="textanimation">
              <h3 className="uppercase font-[anzo4] opacity-[60%] text-lg leading-6">
                design
              </h3>
              <h3 className="font-[anzo2] text-lg leading-6">
                Design that is actually functional and helps to achieve results
                is design that works +/-
              </h3>
            </div>
            <div className="h-full w-full mt-[1vw ] " id="textanimation">
              <h3 className="uppercase font-[anzo4] opacity-[60%] text-lg leading-6">
                focus
              </h3>
              <h3 className="font-[anzo2] text-lg leading-6">
                How can I help and what can I do solve your problem or objective
                vs how can I sell you more +/-
              </h3>
            </div>
            <div className="h-full w-full mt-[1vw ] " id="textanimation">
              <h3 className="uppercase font-[anzo4] opacity-[60%] text-lg leading-6">
                fit
              </h3>
              <h3 className="font-[anzo2] text-lg leading-6">
                The perfect suit is the one fits you vs the one you can fit in.
                Choose wisely you are investing in yourself! +/-
              </h3>
            </div>
            <div className="h-full w-full mt-[1vw ]" id="textanimation">
              <h3 className="uppercase font-[anzo4] opacity-[60%] text-lg leading-6">
                core values
              </h3>
              <h3 className="font-[anzo2] text-lg leading-6">
                Time, trust and experience are resources we can not buy, yet we
                are sharing them and exchange +/-
              </h3>
            </div>
            <div className="h-full w-full mt-[1vw ] " id="textanimation">
              <h3 className="uppercase font-[anzo4] opacity-[60%] text-lg leading-6">
                to consider
              </h3>
              <h3 className="font-[anzo2] text-lg leading-6">
                Your brand, your personal identity is the reflection of your
                passion and goals on your future; your first online impression
                matters +/-
              </h3>
            </div>
          </div>
        </div>

        <div className=" mt-1 ml-16">
          <h3 className="uppercase font-[anzo4] opacity-[60%] ">
            SOUNDS GOOD?
          </h3>
          <h3 className="pageend font-[anzo2]  leading-3 uppercase text-lg">
            <span className="opacity-[60%] font-[anzo4]">then please</span> {""}
            EMAIL ME
          </h3>
          <FaCircleArrowUp className="arrow2 absolute rotate-90 right-[5%] text-[3vw] bottom-[4%]" />
        </div>
      </div>
    </div>
  );
};

export default Page8;
