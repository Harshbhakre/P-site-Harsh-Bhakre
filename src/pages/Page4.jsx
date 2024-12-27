import React from "react";

const Page4 = () => {
  return (
    <div className="h-[105vh] p-3 ">
      <div className="shadow-lg overflow-hidden  shadow-gray-600 h-full w-full rounded-[30px] bg-black">
    
          <div className="h-[35vw] flex items-center justify-between">
          <div className="h-full w-1/2 mt-[-5vh] ml-16">
            <h1 className="text-[20vw] opacity-[60%] uppercase font-[anzo6] tracking-wide">what</h1>
            <h1 className="text-[20vw] uppercase font-[anzo6] tracking-wide leading-[1vw]">i do</h1>
          </div>
          <div className="h-full w-1/2">
          <video className='w-full h-full object-cover' autoPlay loop muted src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4"></video>
          </div>
          </div>
          <div className="mt-10 ml-16">
          <h3 className="uppercase font-[anzo1] text-lg leading-5">i design and develop</h3>
          <h3 className="uppercase font-[anzo4] opacity-[60%] text-lg leading-5">MODERN, IMPACTFUL AND LUXURIOUS</h3>
          <h3 className=" font-[anzo1] text-lg leading-5">websites that seamlessly bridge your goals with needs of your clients.</h3>
          </div>
      </div>
    </div>
  );
};

export default Page4;
