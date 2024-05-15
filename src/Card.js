import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => setWindowHeight(window.innerHeight);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative inline-block mx-2.5">
            <div className="card-container relative shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Link to={data.link}>
                    <img
                        className="card-image rounded-lg w-full h-auto"  
                        src={data.imageURL}
                        alt={data.name}  
                    />
                    <div
                        className="absolute inset-0 justify-center"  
                       
                    >
                        <p className="text-white font-bombay text-[36px] text-center mt-5">
                            {data.name}
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Card;



