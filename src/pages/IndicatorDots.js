import React from 'react';

const IndicatorDots = ({ activeIndex}) => {
  return (
    <div className="flex justify-center mb-4 h-5">
      {/* {Array.from({ length: totalDots }, (_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full mx-1 ${
            index === activeIndex ? 'bg-white' : 'bg-gray-400'
          }`}
        />
      ))} */}

      <div
        className={`w-3 h-3 rounded-full mx-1 ${
          activeIndex==1 ? 'bg-white' : 'bg-gray-400'
        }`}
      />
      <div
        className={`w-3 h-3 rounded-full mx-1 ${
          activeIndex==2 ? 'bg-white' : 'bg-gray-400'
        }`}
      />

      <div
        className={`w-3 h-3 rounded-full mx-1 ${
          activeIndex==3 ? 'bg-white' : 'bg-gray-400'
        }`}
      />

      <div
        className={`w-3 h-3 rounded-full mx-1 ${
          activeIndex==4 ? 'bg-white' : 'bg-gray-400'
        }`}
      />
    </div>
  );
};

export default IndicatorDots;