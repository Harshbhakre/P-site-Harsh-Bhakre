import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Pageend= () => {
  useGSAP(()=>{
    gsap.to("#reacticon",{
        rotate:360,
        duration:6,
        repeat:-1,
        ease:"linear"
    })
      gsap.from(".endtext",{
        opacity:0,
        duration:2,
        stagger:1,
        scrollTrigger:{
          trigger:".endtext",
          start:"top 90%",
          end:"top -40%"
        }
      })
      gsap.from(".endmidtext",{
        opacity:0,
        duration:2,
        stagger:1,
        scrollTrigger:{
          trigger:".endmidtext",
          start:"top 70%",
          end:"top -40%"
        }
      })
 
  })


  return (
    <>
    <div className="h-[100vh] p-3 relative">
    <div className="shadow-lg overflow-hidden  shadow-gray-600 h-full w-full rounded-[30px] bg-[url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1856,h_861,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg)] bg-cover">
  
        <div className="h-[35vw] flex items-center">
        <div className="h-full w-max mt-[-5vh] ml-16">
          <h1 className="text-[20vw]  uppercase font-[anzo6] tracking-wide">got <span className='opacity-[60%]'>an</span></h1>
          <h1 className="text-[20vw] uppercase font-[anzo6] tracking-wide leading-[1vw]">idea</h1>
        </div>
        <div className="h-full flex items-end justify-center ml-10">
        <img id='reacticon' className='h-20' src="https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_128,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/World%20Contact.png" alt="" />
        <span className='h-20 bg-white w-[2px] mx-10'></span>
        <div className='endmidtext mb-3'>
          <h3 className='font-[anzo4] text-lg leading-5 opacity-[60%]'>WORLD SERVICE</h3>
          <h3 className='font-[anzo2] text-lg leading-5'>I CAN COME TO WHEREVER YOU ARE.</h3>
          <h3 className='font-[anzo4] text-lg leading-5 opacity-[60%]'>+31 68 4564137</h3>
        </div>
        </div>
        </div>
        <div className="endtext mt-14 ml-16">
        <h3 className="uppercase font-[anzo4] opacity-[60%] leading-5">IT IS NOT JUST ABOUT SOLVING THE PROBLEM</h3>
        <h3 className=" font-[anzo2] text-lg leading-5"> <span className='font-[anzo4] opacity-[60%]'>But</span> OFFERING THE TRANSFORMATION!</h3>
        <h6 className='absolute right-14 bottom-12 tracking-tight font-[anzo0] text-sm'>© 2024 Anzo.Studio™</h6>
        </div>
    </div>
  </div>
  <h1 className='text-black font-[anzo2] text-lg text-center underline'><span className='opacity-[60%] text-black'>BY</span> HarshB</h1>
    </>
    
  )
}

export default Pageend
