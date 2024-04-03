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

        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
      </div>
    );
}

export default Card;
