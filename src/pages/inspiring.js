import React from "react";
import backgroundImage from "../images/background.png";
import hexagon from "../images/Vector 1.png";
import logo from "../images/logo.png";

function Inspiring() {
  return (
    <div
      className="bg-cover bg-center min-h-screen text-center pt-3 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col h-full justify-center text-center">
        <div className="relative flex flex-col items-center justify-center">
          <img src={hexagon} alt="hexagon" className="w-2/3" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src={logo}
              alt="logo"
              className="w-32 mb-4"
              style={{ display: "inline-block" }}
            />

            <p className="text-white font-bombay text-[48px] p-2 leading-none text-center mb-4">
              SHARE WHAT INSPIRES YOU
            </p>

            <button className="text-white text-[24px] font-sapphire white border border-white font-medium rounded-full text-lg px-6 py-2.5 text-center">
              GO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inspiring;
