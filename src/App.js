import logo from './images/BS_Primary_Signature_White_RGB.png'
import './App.css';
import React, { useState } from "react";




function App() {
  const [birthYear, setBirthYear] = useState("");
  const isAllowed = parseInt(birthYear) < 2003;
  return (
    <div className="w-screen h-screen bg-cyan-400 text-center pt-3 flex flex-col items-center">
      <img src={logo} alt="" className="w-64" />
      <div className="w-full flex justify-center">
        <p className="text-white text-sm font-sapphire font-weight-400 p-2 w-5/6">
          YOU MUST BE OF LEGAL AGE FOR PURCHASING AND CONSUMING ALCOHOL TO ENTER
          THIS SITE
        </p>
      </div>

      <div className="bg-white rounded-xl p-4 w-5/6 flex flex-col items-center m-2">
        <p className="text-cyan-400 text-3xl font-bombay">
          PLEASE ENTER YOUR YEAR OF BIRTH
        </p>
        <input
          type="text"
          name="age"
          className="text-slate-500 text-2xl my-5 w-2/6 text-center"
          placeholder="YYYY"
          required
          value={birthYear}
          onChange={(e) => {
            setBirthYear(e.target.value);
            console.log(birthYear);
          }}
        />

        {!isAllowed &&
          birthYear !== "" && ( // Show message only if birthYear is less than or equal to 2003
            <p className="text-red-500 text-xl font-bold">
              You are not of legal age.
            </p>
          )}

        <p className="text-cyan-400 font-sapphire text-sm mt-2 w-5/6">
          WE USE TRACKING AND OTHER COOKIES
        </p>
        <div>
          <a
            className="text-cyan-400 font-sapphire text-sm mt-2 w-5/6 underline"
            href="https://www.bombaysapphire.com/cookie-policy/"
          >
            COOKIE POLICY
          </a>
          <span className="text-cyan-400 font-sapphire text-sm mt-2 w-5/6">
            {" "}
            &{" "}
          </span>
          <a
            href="#"
            className="text-cyan-400 font-sapphire text-sm mt-2 w-5/6 underline"
          >
            PRIVACY POLICY
          </a>
        </div>
        <p className="text-cyan-400 font-sapphire text-sm mt-6 w-5/6">
          MANAGE COOKIES / ACCEPT ALL COOKIES
        </p>
        <div className="w-full mt-12 flex justify-center">
          <button
            type="button"
            class="text-cyan-400 font-sapphire white border border-cyan-400 font-medium rounded-full text-lg px-6 py-2.5 text-center me-2 mb-2"
          >
            MANAGE
          </button>
          <button
            type="button"
            class="text-white bg-cyan-400 font-sapphire font-medium rounded-full text-lg px-6 py-2.5 text-center me-2 mb-2"
          >
            AGREE
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center flex-col items-center">
        <div className="inline">
          <p className="text-white font-sapphire text-sm p-2 mr-2">
            I ACCEPT THE
            <a
              href="https://www.bombaysapphire.com/terms-and-conditions/"
              className="text-white font-sapphire text-sm p-2 underline"
            >
              TERMS AND CONDITIONS
            </a>
            ENJOY BOMBAY SAPPHIRE RESPONSIBLY. FOR INFORMATION ABOUT ALCOHOL
            RESPONSIBILITY VISIT
            <a
              href="http://responsibledrinking.org/"
              className="text-white font-sapphire text-sm p-2 underline"
            >
              RESPONSIBLEDRINKING.ORG
            </a>
          </p>
        </div>

        <p className="text-white font-sapphire text-[10px] p-2 w-3/4">
          © 2024 BOMBAY, BOMBAY SAPPHIRE. STAR OF BOMBAY AND THEIR RESPECTIVE
          TRADE DRESSES ARE TRADEMARKS.
        </p>
        <a
          className="text-white font-sapphire text-[10px] w-3/4 underline"
          href="https://www.bacardilimited.com"
        >
          BACARDI LIMITED COMPANY INFORMATION
        </a>
      </div>
    </div>
  );
}

export default App;
