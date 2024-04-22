import logo from "../images/logo.png";
import React, { useState } from "react";

function Age() {
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [showMonthInput, setShowMonthInput] = useState(false);
  const [showDayInput, setShowDayInput] = useState(false);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();
  const yearNoAllowed = currentYear - 18;
  const [errorMessage, setErrorMessage] = useState("");

  const handleAgreeClick = () => {
    const birthYearNumber = parseInt(birthYear);
    const birthMonthNumber = parseInt(birthMonth);
    const birthDayNumber = parseInt(birthDay);
    console.log(birthDayNumber);
    console.log(currentDay);

    if (
      birthYearNumber > yearNoAllowed ||
      (birthYearNumber === yearNoAllowed && birthMonthNumber > currentMonth) ||
      (birthYearNumber === yearNoAllowed &&
        birthMonthNumber === currentMonth &&
        birthDayNumber >= currentDay)
    ) {
      setErrorMessage("Unfortunately you are not old enough yet");
      setTimeout(() => {
        console.log("this is the first message");
        window.location.href = "http://responsibledrinking.org/";
      }, 5000);
    } else if (
      birthYearNumber === yearNoAllowed &&
      birthMonthNumber === currentMonth
    ) {
      setShowDayInput(true);
      setErrorMessage("");
    } else if (birthYearNumber === yearNoAllowed) {
      setShowMonthInput(true);
      setErrorMessage("");
    } else {
      console.log("Go next page");
    }
  };

  return (
    <div className="w-screen bg-cyan-400 text-center min-h-screen pt-3 flex flex-col items-center">
      <img src={logo} alt="logo" className="w-64 mt-6 mb-4" />
      <div className="w-full flex justify-center">
        <p className="text-white text-sm font-sapphire font-weight-400 mb-3 w-5/6">
          YOU MUST BE OF LEGAL AGE FOR PURCHASING AND CONSUMING ALCOHOL TO ENTER
          THIS SITE
        </p>
      </div>

      <div className="bg-white rounded-xl p-4 w-5/6 flex flex-col items-center">
        <p className="text-cyan-400 text-[32px] font-bombay leading-none mt-4">
          PLEASE ENTER YOUR YEAR OF BIRTH
        </p>

        <div>
          {showDayInput && (
            <input
              type="text"
              name="day"
              className="text-slate-500 text-[27px] font-bombay my-5 w-2/6 text-center"
              placeholder="DD  /"
              required
              min="1"
              max="31"
              value={birthDay}
              onChange={(e) => {
                setBirthDay(e.target.value);
              }}
            />
          )}
          {showMonthInput && (
            <input
              type="text"
              name="month"
              className="text-slate-500 text-[27px] font-bombay my-5 w-2/6 text-center"
              placeholder="MM  /"
              required
              min="1"
              max="12"
              value={birthMonth}
              onChange={(e) => {
                setBirthMonth(e.target.value);
              }}
            />
          )}
          <input
            type="text"
            name="age"
            className="text-slate-500 text-[32px] font-bombay mt-[42px] mb-[42px] my-5 w-2/6 text-center"
            placeholder="YYYY"
            required
            value={birthYear}
            onChange={(e) => {
              setBirthYear(e.target.value);
            }}
          />
        </div>

        {errorMessage && (
          <p className="text-cyan-400 text-xl font-bombay mb-10">
            {errorMessage}
          </p>
        )}

        <div className="w-full flex justify-center">
          <button
            onClick={handleAgreeClick}
            type="button"
            className="text-cyan-400 font-sapphire white border-[2px] border-cyan-400 font-medium rounded-full text-[24px] pl-11 pr-11 text-center me-2 mb-2"
          >
            GO
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

export default Age;
