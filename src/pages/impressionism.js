import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import impressionism_full from "../images/Impressionism_1125x2175.jpg";
import back from "../images/back-button 1.png";
import exit from "../images/exit.png";
import coctail from "../images/Impressionism_400x850 1.png";

function Impressionism() {
  // const coctailRef = useRef(null);
  const firstDivRef = useRef(null);

  const [buttonVisible, setButtonVisible] = useState(true); 
 
const [cocktailVisible, setCocktailVisible] = useState(false); 

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div>
        <div className="fixed top-5 left-5">
          {cocktailVisible ? (
            <button onClick={() => handleClick(firstDivRef)}>
              <img
                className="h-[30px]"
                src={back}
                alt="back-button-scroll"
              />
            </button>
          ) : (
            <Link to="/home">
              <img className="h-[30px]" src={back} alt="back-button" />
            </Link>
          )}
        </div>
        <div className="fixed top-5 right-5">
          <Link to="/home">
            <img className="h-[30px]" src={exit} alt="exit-button" />
          </Link>
        </div>
      </div>
      <div
        ref={firstDivRef}
        className="bg-cover bg-center min-h-screen flex flex-col items-center justify-between"
        style={{ backgroundImage: `url(${impressionism_full})` }}
      >
        <div>
          <p className="text-center text-white font-bombay text-[32px] mt-[118px]">
            IMPRESSIONISM
          </p>
        </div>

        <div className="flex justify-center">
          {buttonVisible && (
            <button>
              <img className="h-[30px] mb-3" src={exit} alt="swipe-button" />
            </button>
          )}
        </div>
      </div>

      <div
        // ref={coctailRef}
        className="w-screen min-h-screen bg-cyan-400 flex flex-col justify-between"
      >
        <VisibilitySensor
          onChange={(isVisible) => {
            console.log(
              "Cocktail Element is now %s",
              isVisible ? "visible" : "hidden"
            );
            setButtonVisible(!isVisible);
            setCocktailVisible(isVisible);
          }}
          partialVisibility={true}
        >
          <p className="text-white text-m text-center font-sapphire mt-[25px]">
            COCKTAIL
          </p>
        </VisibilitySensor>
        <div className="w-3/4 mx-auto flex flex-col items-center">
          <p className="text-center text-white font-bombay text-[32px]">
            IMPRESSIVE BOMBAY & TONIC
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
    </div>
  );
}

export default Impressionism;
