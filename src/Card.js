import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card({data}) {

    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
      const handleResize = () => setWindowHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <div className="relative inline-block mx-12">
        <div className="card-container shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <Link to={data.link}>
            <img
              className="card-image rounded-lg"
              src={data.imageURL}
              alt="impressionism"
            />
            <div
              className="absolute top-0 left-0 text-white font-bombay text-[32px] mt-7"
              style={{ left: "-13px" }}
            >
              <p>{data.name}</p>
            </div>
          </Link>
        </div>
      </div>
    );
}

export default Card;
