import React, { useEffect, useState } from 'react';
import Slide from './slide';
import "./carousel.scss";


function Carousel(props:any) {
  const {type, cardSize, name} = props;
  // console.log(type);
  

  const [currentSlide, setCurrentSlide] = useState(0);
  

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide >= type.length/4 - 1)? 0 : currentSlide + 1)
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [type ])


  return (
    <div className='carousel-container' style={{transform: `translateX(${-currentSlide/4 * 100}%)`}}>
      <Slide section={type} cardSize={cardSize} name={name}/>
    </div>
  )
}

export default Carousel