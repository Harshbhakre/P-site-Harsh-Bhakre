import React from 'react'

const Page6 = () => {
  return (
    <div className='h-screen relative p-3'>
      <div className=" shadow-lg overflow-hidden shadow-gray-600 h-full w-full rounded-[30px] bg-black">
        <video className='w-full h-full bg-center object-cover' autoPlay loop muted src="/src/assets/file2.mp4"></video>
        <h1 className='font-[anzo6] top-0 left-20 absolute uppercase tracking-wide text-[41vw] '>About</h1>
      </div>
    </div>
  )
}

export default Page6

