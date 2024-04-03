import React from "react";
import impressionism from "./images/Impresseonism.png";


function Card({data}) {

    return (
      <div className="relative inline-block mr-5">
        <div className="w-[310px] h-[470px] max-w-xs overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <a href="#">
            <img
              className="rounded-xl"
              src={data.imageURL}
              alt="impressionism"
            />
            <div
              className="absolute top-0 left-0 text-white font-bombay text-[32px] mt-7"
              style={{ left: "-13px" }}
            >
              <p>{data.name}</p>
            </div>
          </a>
        </div>
      </div>
    );
}

export default Card;
