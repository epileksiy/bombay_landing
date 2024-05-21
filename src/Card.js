import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {motion} from "framer-motion";

function Card({data,path,handleAnim}) {

    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
      console.log(path);
      const handleResize = () => setWindowHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navigate = useNavigate();

    const handleClick = () => {
      handleAnim()

      setTimeout(()=>{
        setIsExpanded(!isExpanded);
        // scrollContainerRef.current.children[0].children[cardSt].scrollIntoView({ behavior: 'smooth'});
        setTimeout(()=>{
          navigate('/'+path);
        },300)
      },1000);

    };

    return (
      <motion.div 
        className="relative inline-block mx-8"
        onClick={()=>handleClick('impressionism')}
        animate={{ scale: isExpanded ? 1.9 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="card-container shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
          {/* <Link to={data.link}> */}
            <img
              className="card-image rounded-lg"
              src={data.imageURL}
              alt="impressionism"
            />
            {/* <div
              className="absolute top-0 left-0 text-white font-bombay text-[32px] mt-7"
              style={{ left: "-13px" }}
            >
              <p>{data.name}</p>
            </div> */}
            <div
              className="absolute top-0 left-0 text-white font-bombay text-[32px] mt-7 w-full text-center"
            >
              <p>{data.name}</p>
            </div>
          {/* </Link> */}
        </div>
      </motion.div>
    );
}

export default Card;
