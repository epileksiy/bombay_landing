import React from "react";
import backgroundImage from "../images/background.png";
import logo from "../images/logo.png";
import gif from "../images/01-Swipe left.gif"
import Card from "../Card";
import "./home.css"

function Home() {
  return (
    <div
      className="bg-cover bg-center min-h-screen text-center pt-3 flex flex-col items-center justify-between"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <img src={logo} alt="logo" className="w-52 mb-5" />

      

      {/* <div className="w-full scroll-container flex overflow-x-auto">
        <p className="text-white font-bombay text-[58px] p-2 leading-none text-center mb-4 w-80">
          CHOOSE INSPIRING ART AND GET YOUR COCKTAILE RECIPE
        </p>
        <Card />
      </div> */}



      <img src={gif} alt="gif" className="w-10 mb-3.5" />
    </div>
  );
}

export default Home;
