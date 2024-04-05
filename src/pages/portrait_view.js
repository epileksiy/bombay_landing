import React from "react";
import turn from "../images/Group 21.png"

const PortraitContent = () => {
  return (
    <div className="w-screen h-screen bg-cyan-400 min-h-screen flex flex-col justify-center items-center">
      <img className="w-[133px] h-[133px]" src={turn} alt="phone" />
      <p className="text-white text-m font-sapphire mt-3">
        PLEASE TURN YOUR DEVICE
      </p>
    </div>
  );
}; 

export default PortraitContent;