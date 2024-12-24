import React from 'react'

const Page3 = () => {
  return (
    <div className='relative h-screen bg-white flex items-center justify-center'>
      <img className='absolute h-[79vh] z-20' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_659,h_379,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png" alt="" />
      <video autoPlay loop muted className='z-10 relative h-[70vh] w-[110vh] object-cover' src="/src/assets/file.mp4"></video>
      <div className='z-0 absolute top-[40%] h-[2px] w-[70%] bg-black' ></div>
      <div className='z-0 absolute top-[59%] h-[2px] w-[85%] bg-black' ></div>
      <div className='z-0 absolute top-[77%] h-[2px] w-[100%] bg-black' ></div>
    </div>  
  )
}

export default Page3
