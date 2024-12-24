import React from 'react'

const Page11 = () => {
  return (
    <>
    {/* <div  className='flex items-center justify-center h-screen w-full my-28 '>
        <h1 className='text-[42vw] tracking-[2px] text-black uppercase font-[anzo6]'>skills</h1>
    </div> */}
    <div className="h-[100vh] p-3 relative">
    <div className="shadow-lg overflow-hidden shadow-gray-600 h-full w-full rounded-[30px] bg-[url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1856,h_861,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg)] bg-cover">
    <video className='w-full h-full bg-center object-cover'  autoPlay loop muted src="/src/assets/file4.mp4"></video>
    <video className='absolute top-10 right-[10%]' autoPlay loop muted src="/src/assets/file2.mp4" ></video>
    <div className='flex items-center justify-center absolute h-full w-full top-4 flex-col'>
        <div className='text-center'>
        <h1 className='text-[12vw] tracking-wide font-[anzo6] leading-[6vw]'>PERSONAL</h1>
        <h6 className='leading-[5vw] text-lg opacity-[60%]'>Honesty, Communication, Punctuality</h6>
        </div>
        <div className='text-center my-10'>
        <h1 className='text-[12vw] tracking-wide font-[anzo6] leading-[6vw]'>PROFESSIONAL</h1>
        <h6 className='leading-[5vw] text-lg opacity-[60%]'>Photoshop, Wix Studio, Figma</h6>
        </div>
        <div className='text-center'>
        <h1 className='text-[12vw] tracking-wide font-[anzo6] leading-[6vw]'>
        ADDITIONAL</h1>
        <h6 className='leading-[5vw] text-lg opacity-[60%]'>Business Development, Branding, SEO</h6>
        </div>
       
    </div>
    </div>
  </div>
  <div className="h-[125vh] w-full relative flex justify-center ">
    <img className="sticky h-[100vh] top-[0%] z-[-1]" src="https://static.wixstatic.com/media/f1c650_739893a03c1f4a6991c28005e9fd8372~mv2.jpg/v1/fill/w_879,h_676,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f1c650_739893a03c1f4a6991c28005e9fd8372~mv2.jpg" alt="" />
      <img className="absolute h-[125vh] z-[1]" src="https://static.wixstatic.com/media/f1c650_710941ddfbe8422c9739a586a079bbe6~mv2.png/v1/fill/w_1347,h_1036,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Subtract.png" alt="" />
    </div>
    </>
  )
}

export default Page11
