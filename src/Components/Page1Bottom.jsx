import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

const Page1Bottom = () => {
  const rotateRef = useRef(null)



  return (
    <div className='absolute bottom-5 left-16 w-full flex items-end justify-between'>
      <div className='pb-5'>
      <h2 className='text-lg font-[anzo3]'>BRAND DESIGN | WEBSITE DESIGN</h2>
      <h3 className='text-lg font-[anzo4] text-gray-400 leading-3'>BESPOKE FREELANCE</h3>
      </div>
    
    </div>
  )
}

export default Page1Bottom
