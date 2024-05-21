import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import impressionism_full from "../images/classss.png";
import back from "../images/back-button 1.png";
import exit from "../images/exit.png";
import scrolldown from "../images/arrow.gif";
import coctail from "../images/Classicism glass.png";
import {motion} from "framer-motion";

function Classicism() {
  // const coctailRef = useRef(null);
  const firstDivRef = useRef(null);

  const [buttonVisible, setButtonVisible] = useState(true); 
 
  const [cocktailVisible, setCocktailVisible] = useState(false); 

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    // Replace 'image.jpg' with the actual URL or path to your image
    const imageUrl = 'Card classicism.png';

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'card_bombaySaphire_classicism.jpg'; // Set the desired file name

    // Append the link to the document body
    document.body.appendChild(link);

    // Simulating a click event on the link to trigger the download
    link.click();

    // Clean up by removing the temporary link from the document
    document.body.removeChild(link);
  };

  const handleMainClick = () => {
    if(cocktailVisible){
      setCocktailVisible(false);
    }else{
      setCocktailVisible(true);
    }
  }

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   window.addEventListener('scroll', ()=>{console.log('aaaa')});
  // });

  return (
    <div>
      <div className="z-40 fixed">
        <div className="fixed top-5 left-5">
          {cocktailVisible ? (
            <button onClick={handleMainClick}>
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
{/* //////////////////////////////////////       */}
      <div
        ref={firstDivRef}
        className="bg-cover bg-center h-screen flex flex-col items-center justify-between "
        style={{ backgroundImage: `url(${impressionism_full})` }}
        onClick={handleMainClick}
      >
        <div>
          <p className="text-center text-white font-bombay text-[36px] mt-20">
            CLASSICISM
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
{/* ////////////////////////////////////// */}
{
  cocktailVisible &&

    <motion.div
    // ref={coctailRef}
    initial={{ opacity: 0 }}
    animate={{ opacity: cocktailVisible ? 1 : 0 }}
    transition={{ duration: 1 }}
    className="w-screen h-screen bg-cyan-400 flex flex-col justify-between py-14 z-10 fixed top-0 left-0"
    onClick={handleMainClick}
  >
    <VisibilitySensor
      // onChange={(isVisible) => {
      //   console.log(
      //     "Cocktail Element is now %s",
      //     isVisible ? "visible" : "hidden"
      //   );
      //   setButtonVisible(!isVisible);
      //   setCocktailVisible(isVisible);
      // }}
      // partialVisibility={true}
    >
      <p className="text-white text-m text-center font-sapphire mt-[25px]">
        COCKTAIL
      </p>
    </VisibilitySensor>
    <div className="w-3/4 mx-auto flex flex-col items-center justify-between h-full mb-3">
      <p className="text-center text-white font-bombay text-3xl md:text-4xl mt-10">
        CLASSIC <br /> BOMBAY & TONIC
      </p>
      <img src={coctail} className="recptimg" alt="coctail" />
      <p className="text-white text-m font-sapphire text-center mb-10">
        BOMBAY SAPPHIRE 50 ml<br />
        Premium tonic water 100 ml<br />
        Lime wedge<br />
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
  </motion.div>
}

    </div>
  );
}

export default Classicism;
