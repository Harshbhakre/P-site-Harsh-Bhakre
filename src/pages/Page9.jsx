import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page9 = () => {

useGSAP(()=>{
  gsap.to("#softtext", {
    y: 200, 
    scrollTrigger: {
      trigger: "#softtext",
      start: "top 60%",
      end: "bottom 0%",
      scrub:0.01,
    },
  });
  gsap.to("#astoman",{
   transform:"rotate(10deg)",
    duration:5,
    repeat:-1,
    yoyo:true,
    ease:"linear"
  
  })
  gsap.to("#astoman", {
    y: 100, 
    scrollTrigger: {
      trigger: "#astoman",
      start: "top 60%",
      end: "bottom 0%",
      scrub:0.01,
    },
  });
})



  return (
    <>
   <div className="h-[55vw] w-full relative flex justify-center ">
    <h1 id='softtext' className='absolute left-20 top-32 text-[10vw] font-[anzo6] uppercase text-black z-[10]'>soft</h1>
        <img
          className="sticky h-[100vh] top-[0%] z-[-1]"
          src="https://static.wixstatic.com/media/f1c650_f865c88a32be4d4985a0119fb5268017~mv2.jpg/v1/fill/w_881,h_647,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f1c650_f865c88a32be4d4985a0119fb5268017~mv2.jpg"
          alt=""
        />
        <img
          className="absolute h-max z-[1]"
         src='https://static.wixstatic.com/media/f1c650_a15cf84ef5d546bd980d228833ef2f8e~mv2.png/v1/fill/w_1349,h_762,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Subtract%20(1).png'
          alt=""
        />
        <img id='astoman' className='absolute z-[12] top-28 h-[30vw] w-auto' src="/src/assets/astoman.png" alt="" />
      </div>
    <div className="h-[100vh] p-3 relative">
    <div className="shadow-lg overflow-hidden shadow-gray-600 h-full w-full rounded-[30px] bg-[url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1856,h_861,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg)] bg-cover">
    <video className='w-full h-full bg-center object-cover'  autoPlay loop muted src="/src/assets/file3.mp4"></video>
    <video className='absolute top-10 right-[10%]' autoPlay loop muted src="/src/assets/file2.mp4" ></video>
    <div className='flex items-center justify-center absolute h-full w-full top-4 flex-col'>
        <div className='text-center'>
        <h1 className='text-[12vw] tracking-wide font-[anzo6] leading-[6vw]'>PERSONAL</h1>
        <h6 className='leading-[5vw] text-lg opacity-[60%]'>Intuition, Imagination, Discipline</h6>
        </div>
        <div className='text-center my-10'>
        <h1 className='text-[12vw] tracking-wide font-[anzo6] leading-[6vw]'>PROFESSIONAL</h1>
        <h6 className='leading-[5vw] text-lg opacity-[60%]'>Time Management, Multitasking, Creativity</h6>
        </div>
        <div className='text-center'>
        <h1 className='text-[12vw] tracking-wide font-[anzo6] leading-[6vw]'>
        ADDITIONAL</h1>
        <h6 className='leading-[5vw] text-lg opacity-[60%]'>3D, Animation, AI Tools</h6>
        </div>
       
    </div>
    </div>
  </div>
    </>
  )
}

export default Page9
