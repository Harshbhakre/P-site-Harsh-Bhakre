import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Page5 = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        gsap.from(".page5rotatetext",{
            transform:"rotateX(-80deg)",
            duration:1,
            opacity:0,
            stagger:1,
            
            scrollTrigger:{
                trigger:'.page5rotatetext',
                start:'top 90%',
                end:'top -300%',
                scrub:2,
              
            }
        })
    })

  return (
    <div className='section3 bg-white text-center px-10 pt-10 text black mb-[-10px]'>
        <div className='page5rotatetext pt-14'>
            <h1 className=' text-black text-[41vw] font-[anzo6] leading-[33vw]'>HELPING</h1>
        </div>
        <div className='page5rotatetext'>
            <h1 className='text-black text-[41vw] font-[anzo6] leading-[33vw] opacity-[40%]'>MY</h1>
        </div>
        <div className='page5rotatetext'>
            <h1 className='text-black text-[41vw] font-[anzo6] leading-[33vw]'>CLIENTS</h1>
        </div>
        <div className='page5rotatetext'>
            <h1 className='text-black text-[41vw] font-[anzo6] leading-[33vw]'>TO ACHIEVE</h1>
        </div>
        <div className='page5rotatetext'>
            <h1 className='text-black text-[41vw] font-[anzo6] leading-[33vw] opacity-[40%]'>THEIR</h1>
        </div>
        <div className='page5rotatetext'>
            <h1 className='text-black text-[41vw] font-[anzo6] leading-[33vw] ml-20'>DREAMS!</h1>
        </div>
    </div>
  )
}

export default Page5
