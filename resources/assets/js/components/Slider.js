import React from 'react';

/* 
  This component will be refactored, once
  we'll have an ability to choose slider images 
*/

const Slider = () => {
  return (
    <div className="slider">
          <div className="slider-images">
              <img src="{{ asset('images/image.png') }}" alt="" />
              <img src="{{ asset('images/image.png') }}" alt="" />
              <img src="{{ asset('images/image.png') }}" alt="" />
          </div>
          <div className="slider-buttons">
              <span className="slider-dot"></span>
              <span className="slider-dot"></span>
              <span className="slider-dot"></span>
          </div>
      </div>
  );
};

export default Slider;