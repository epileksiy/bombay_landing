import React, { useState, useRef } from "react";
import backgroundImage from "../images/background.png";
import logo from "../images/logo.png";
import gif from "../images/01-Swipe left.gif";
import Card from "../Card"; 
import impressionism from "../images/Impresseonism.png";
import VisibilitySensor from "react-visibility-sensor";
import IndicatorDots from './IndicatorDots'
import { isVisible } from "@testing-library/user-event/dist/utils";

function Home() {

  const [cardView, setcardView] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cardRefs = useRef([]);

  const data = [
    { name: "IMPRESSIONISM", imageURL: impressionism },
    { name: "SUPREMATISM", imageURL: impressionism },
    { name: "ART NOUVEAU", imageURL: impressionism },
    { name: "CLASSICISM", imageURL: impressionism },
  ];

  function onChange (isVisible, index) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    setcardView(isVisible);
    if (isVisible) {
      setActiveCardIndex(index);
      console.log(index);
    }
  }

  return (
    <div
      id="cardsBlock"
      className="flex flex-col m-auto p-auto bg-cover bg-center min-h-screen justify-between"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="w-52 mt-5" />
      </div>

      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 items-center">

          <VisibilitySensor onChange={(isVisible) => onChange(isVisible, 0)}>
            <div className="inline-block px-3">
              <p className="text-white font-bombay text-[58px] leading-none text-center mr-5 w-[294px]">
                CHOOSE INSPIRING ART AND GET YOUR COCKTAILE RECIPE
              </p>
            </div>
          </VisibilitySensor>

          <VisibilitySensor onChange={(isVisible) => onChange(isVisible, 1)}>
            <Card data={data[0]} ref={(el) => (cardRefs.current[0] = el)} />
          </VisibilitySensor>

          <VisibilitySensor onChange={(isVisible) => onChange(isVisible, 2)}>
            <Card data={data[1]} ref={(el) => (cardRefs.current[1] = el)} />
          </VisibilitySensor>

          <VisibilitySensor onChange={(isVisible) => onChange(isVisible, 3)}>
            <Card data={data[2]} ref={(el) => (cardRefs.current[2] = el)} />
          </VisibilitySensor>

          <VisibilitySensor onChange={(isVisible) => onChange(isVisible, 4)}>
            <Card data={data[3]} ref={(el) => (cardRefs.current[3] = el)} />
          </VisibilitySensor>

        </div>
      </div>

      <div className="flex justify-center mb-3.5 h-10">
        {activeCardIndex>0
          ? <IndicatorDots activeIndex={activeCardIndex}/>
          : <img src={gif} alt="gif" className="w-10 h-full" />
        }
      </div>

    </div>
  );
}

export default Home;
