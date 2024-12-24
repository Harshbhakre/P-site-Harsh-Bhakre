import React from 'react'
import { CgMenuGridO } from "react-icons/cg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  useGSAP(()=>{
    gsap.to("#button",{
      scale:1.07,
      repeat:-1,
      duration:0.8,
      yoyo: true,  
      ease: "power1.inOut",
    })
  })
  return (
    <div className='fixed flex items-center justify-end w-full z-10 py-16 '>
      <button id='button' className='bg-black border-4 text-sm hover:bg-gray-400 px-12 py-3 rounded-full'>Hire Me</button>
      <CgMenuGridO  className='text-4xl mx-3 opacity-[20%] cursor-pointer'/>
    </div>
  )
}

export default Header
