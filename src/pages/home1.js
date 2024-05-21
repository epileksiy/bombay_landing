import React, { useState, useRef, useCallback, useEffect } from "react";
import backgroundImage from "../images/background.png";
import logo from "../images/logo.png";
import gif from "../images/01-Swipe left.gif";
import Card from "../Card"; 
import impressionism from "../images/Impressionism banner.png";
import suprematism from "../images/Suprematism banner.png";
import artnov from "../images/Art Nouveau banner.png";
import classicism from "../images/Classicism banner.png";
import VisibilitySensor from "react-visibility-sensor";
import IndicatorDots from './IndicatorDots'
import { isVisible } from "@testing-library/user-event/dist/utils";
import videoBackground from '../images/bgvideo.mp4';

function Home() {

  const [cardView, setcardView] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cardRefs = useRef([]);
  const suprematismRef = useRef([]);
  

  const scrollContainerRef = useRef(null);

  const data = [
    { name: "IMPRESSIONISM", imageURL: impressionism , link:"/impressionism"},
    { name: "SUPREMATISM", imageURL: suprematism , link:"/suprematism"},
    { name: "ART NOUVEAU", imageURL: artnov , link:"/artnouveau"},
    { name: "CLASSICISM", imageURL: classicism , link:"/classicism"},
  ];

  function onChange (isVisible, index) {
    // console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    setcardView(isVisible);
    if (isVisible) {
      setActiveCardIndex(index);
      // console.log(index);
    }
  }

  const letsGoScroll = () => {
    // Scroll to the third card
    if (scrollContainerRef.current) {
      refsArr[cardSt].scrollIntoView();
      cardSt+=1;
    }
  };

  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = {37: 1, 38: 1, 39: 1, 40: 1};

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: function () { supportsPassive = true; } 
    }));
  } catch(e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

  // call this to Disable
  function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }

  // call this to Enable
  function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }

  let refsArr = [];
  let cardSt = 1;
  let checksc = true;

  useEffect(() => {

    // disableScroll();

    for(let i=0; i<6; i++){
      refsArr.push(scrollContainerRef.current.children[0].children[i])
    }
  }, []);

  // const handleScroll = (event) => {
  //   // Отлавливаем события горизонтального скролла
  //   disableScroll();
  //   let scrollProgress = scrollContainerRef.current.scrollLeft;

  //   setTimeout(()=>{
  //     scrollContainerRef.current.children[0].children[cardSt].scrollIntoView({ behavior: 'smooth'});
  //     setTimeout(()=>{
  //       cardSt = cardSt + 1;
  //       console.log(cardSt);
  //       if(cardSt>4){
  //         cardSt=0;
  //       }
  //       enableScroll();
  //     },1000)
  //   },100)
  // };

  // useEffect(() => {

  //   const scrollContainer = scrollContainerRef.current;
  //   if (scrollContainer && checksc) {
  //     checksc = false;
  //     scrollContainer.addEventListener('scroll', handleScroll, { passive: false });
  //   }
  // }, []);

  const handleClickAnim = (num) => {
    scrollContainerRef.current.children[0].children[num].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
 }


  return (
    <div
      id="cardsBlock"
      className="flex flex-col bg-cover bg-center min-h-dvh justify-between overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline
          className="w-full h-full object-cover"
          src={videoBackground} type="video/mp4; codecs='avc1.42E01E, mp4a.40.2'"
        />
      </div>
      
      <div className="z-10 flex justify-center fixed w-full">
        <img src={logo} alt="logo" className="w-52 mt-5" />
      </div>

      <div className="flex z-50 overflow-x-scroll pb-10 hide-scroll-bar h-screen w-full relative top-6" ref={scrollContainerRef}>
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 items-center">

          <VisibilitySensor onChange={(isVisible) => onChange(isVisible, 0)}>
            <div className="inline-block">
              <p className="text-white font-bombay text-[58px] leading-none text-center mr-5 w-[294px]">
                CHOOSE<br />INSPIRING<br />ART AND<br />GET YOUR<br />COCKTAILE<br />RECIPE
              </p>
            </div>
          </VisibilitySensor>

          <VisibilitySensor onChange={(isVisible) => onChange(isVisible, 1)}>
            <Card data={data[0]} path='impressionism' index={0} handleAnim={()=>handleClickAnim(1)}/>
          </VisibilitySensor>

          <VisibilitySensor onChange={(isVisible) => onChange(isVisible, 2)}>
            <Card data={data[1]} path='suprematism' index={1} ref={suprematismRef} handleAnim={()=>handleClickAnim(2)}/>
          </VisibilitySensor>

          <VisibilitySensor onChange={(isVisible) => onChange(isVisible, 3)}>
            <Card data={data[2]} path='artnouveau' index={2} handleAnim={()=>handleClickAnim(3)}/>
          </VisibilitySensor>

          <VisibilitySensor onChange={(isVisible) => onChange(isVisible, 4)}>
            <Card data={data[3]} path='classicism' index={3} handleAnim={()=>handleClickAnim(4)}/>
          </VisibilitySensor>

        </div>
      </div>

      <div className="flex justify-center mb-12 h-14 z-30 fixed bottom-0 w-full">
        {activeCardIndex>0
          ? <IndicatorDots activeIndex={activeCardIndex}/>
          : <img src={gif} alt="gif" className="w-14 h-full" />
        }
      </div>

    </div>
  );
}

export default Home;
