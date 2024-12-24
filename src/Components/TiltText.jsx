import React from "react";

const TiltText = (props) => {
  return (
    <>
    <div id="tiltdiv" ref={props.abc} className="mt-32">
          <h1 className="text-[4.2vw] leading-[5vw] font-[anzo3]">
            I AM{" "}
            <span className="text-black">
              DARK MODE <span className="text-white ml-[-1vw]">™</span>
            </span>
          </h1>
          <h1 className="text-[8.3vw] leading-[6vw] font-[anzo1]">DESIGNER</h1>
          <h1 className="text-[4.2vw] leading-[5vw] font-[anzo3]">TO HIRE</h1>
        </div>
    </>
  );
};

export default TiltText;
