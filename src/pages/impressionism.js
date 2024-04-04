import React from "react";
import { Link } from "react-router-dom";
import impressionism_full from "../images/Impressionism_1125x2175.jpg"
import back from "../images/back-button 1.png"
import exit from "../images/exit.png"

function Impressionism() {
    return (
      <div
        className="bg-cover bg-center min-h-screen flex flex-col justify-between"
        style={{ backgroundImage: `url(${impressionism_full})` }}
      >
        <div className="flex justify-between">
          <Link to="/home">
            <img className="h-[30px] mt-5 ml-4" src={back} alt="back-buttom" />
          </Link>
          <Link to="/home">
            <img className="h-[30px] mt-5 mr-4" src={exit} alt="exit-buttom" />
          </Link>
        </div>
        <div>
          <p className="text-center text-white font-bombay text-[32px] mb-[500px]">
            IMPRESSIONISM
          </p>
        </div>
        <div className="flex justify-center">
          <Link to="/impressionism_coctail">
            <img className="h-[30px] mb-3" src={exit} alt="swipe-buttom" />
          </Link>
        </div>
      </div>
    );
} 

export default Impressionism;