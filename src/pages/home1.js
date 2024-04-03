import React, { useState, useEffect } from "react";
import backgroundImage from "../images/background.png";
import logo from "../images/logo.png";
import gif from "../images/01-Swipe left.gif";
import Card from "../Card";
import "./home.css";
import impressionism from "../images/Impresseonism.png";

function Home() {
  const data = [
    { name: "IMPRESSIONISM", imageURL: impressionism },
    { name: "SUPREMATISM", imageURL: impressionism },
    { name: "ART NOUVEAU", imageURL: impressionism },
    { name: "CLASSICISM", imageURL: impressionism },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const [image, setImage] = useState(gif);

useEffect(() => {
  const handleScroll = () => {
    const position = window.scrollX;
    console.log("Scroll position:", position);
    setScrollPosition(position);
  };

  console.log("Adding scroll event listener"); 
  window.addEventListener("scroll", handleScroll);

  return () => {
    console.log("Removing scroll event listener");
    window.removeEventListener("scroll", handleScroll);
  };
}, [scrollPosition]);


  useEffect(() => {
    // Assuming you want to change the image when scroll position exceeds a certain value
    if (scrollPosition > 100) {
      setImage(logo);
    } else {
      setImage(gif);
    }
  }, [scrollPosition]);

  return (
    <div
      className="flex flex-col m-auto p-auto bg-cover bg-center min-h-screen justify-between"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="w-52 mt-5" />
      </div>

      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 items-center">
          <div className="inline-block px-3">
            <p className="text-white font-bombay text-[58px] leading-none text-center mr-5 w-[294px]">
              CHOOSE INSPIRING ART AND GET YOUR COCKTAILE RECIPE
            </p>
          </div>

          {data.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <img src={image} alt="gif" className="w-10 mb-3.5" />
      </div>
    </div>
  );
}

export default Home;
