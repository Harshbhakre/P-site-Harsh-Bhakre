import React from 'react'

const Page6 = () => {
  return (
    <div className='h-screen relative p-3'>
      <div className=" shadow-lg overflow-hidden shadow-gray-600 h-full w-full rounded-[30px] bg-black">
        <video className='w-full h-full bg-center object-cover' autoPlay loop muted src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4"></video>
        <h1 className='font-[anzo6] top-0 left-20 absolute uppercase tracking-wide text-[41vw] '>About</h1>
      </div>
    </div>
  )
}

export default Page6

