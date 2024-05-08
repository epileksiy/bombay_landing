import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import impressionism_full from "../images/spreme.png";
import back from "../images/back-button 1.png";
import exit from "../images/exit.png";
import scrolldown from "../images/arrow.gif";
import coctail from "../images/Suprematism glass.png";

function Suprematism() {
  // const coctailRef = useRef(null);
  const firstDivRef = useRef(null);

  const [buttonVisible, setButtonVisible] = useState(true); 
 
  const [cocktailVisible, setCocktailVisible] = useState(false); 

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    // Replace 'image.jpg' with the actual URL or path to your image
    const imageUrl = 'Card suprematism.png';

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'card_bombaySaphire_suprematism.jpg'; // Set the desired file name

    // Append the link to the document body
    document.body.appendChild(link);

    // Simulating a click event on the link to trigger the download
    link.click();

    // Clean up by removing the temporary link from the document
    document.body.removeChild(link);
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
            SUPREMATISM
          </p>
        </div>

        <div className="flex justify-center">
          {buttonVisible && (
            <button>
              <img className="h-[30px] mb-3" src={scrolldown} alt="swipe-button" />
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
          <a
            onClick={handleDownload}
            className="text-white text-[24px] font-sapphire white border border-white font-medium rounded-full text-lg px-6 py-2.5 text-center mb-4"
          >
            SAVE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Suprematism;