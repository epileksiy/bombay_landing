import React from "react";
import { Link } from "react-router-dom";
import impressionism_full from "../images/Impressionism_1125x2175.jpg"
import back from "../images/back-button 1.png"
import exit from "../images/exit.png"
import coctail from "../images/Impressionism_400x850 1.png"

function Impressionism_coctail() {
    return (
      <div className="w-screen h-screen bg-cyan-400 min-h-screen flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <Link to="/impressionism">
            <img className="h-[30px] mt-5 ml-4" src={back} alt="back-buttom" />
          </Link>
          <p className="text-white text-m font-sapphire mt-5">COCTAIL</p>
          <Link to="/home">
            <img className="h-[30px] mt-5 mr-4" src={exit} alt="exit-buttom" />
          </Link>
        </div>
        <div className="w-3/4 mx-auto flex flex-col items-center">
          <p className="text-center text-white font-bombay text-[32px]">
            IMPRESSIONISM BOMBAY & TONIC
          </p>
          <img src={coctail} className="w-[230px] mt-6 mb-8" alt="coctail" />
          <p className="text-white text-m font-sapphire text-center">
            BOMBAY SAPPHIRE 50 ml <br />
            Premium tonic water 100 ml <br />
            2 pink grapefruit wedges <br />
            2 fresh rosemary sprigs <br />
            Ice
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            to="/"
            className="text-white text-[24px] font-sapphire white border border-white font-medium rounded-full text-lg px-6 py-2.5 text-center mb-4"
          >
            SAVE
          </Link>
        </div>
      </div>
    );
} 

export default Impressionism_coctail;