import React, { useEffect, useRef, useState } from 'react';
import Slide from './slide';
import "./carousel.scss";
import arrowRight from '../../assets/places-arrow-right.svg';
import useWindowDimensions from '../../hooks/useWindowsDimensions';


function Carousel(props:any) {
  const { width: windowWidth = 1443} = useWindowDimensions();
  let slideCount = 4;

  if (windowWidth <= 1000) {
    slideCount = 3;
  } 

  
  const {type, cardSize, name} = props;
  // console.log(type);
  const slideInterval:{current: NodeJS.Timer | null} = useRef(null);
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }
  }
  
  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, [type]);

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide >= type.length/slideCount - 1)? 0 : currentSlide + 1)
    }, 3000);
  }


  const next = () => {
    startSlideTimer();
    currentSlide < type.length/4 - 1 ? setCurrentSlide(currentSlide => currentSlide + 1) : setCurrentSlide(0);
  }

  const prev = () => {
    startSlideTimer();
    currentSlide > 0 ? setCurrentSlide(currentSlide => currentSlide - 1) : setCurrentSlide(type.length/4);
  }


  return (
    <div className='carousel'>
      <div className='carousel-container' style={{transform: `translateX(${-currentSlide/4 * 100}%)`}}>
        <Slide section={type} cardSize={cardSize} name={name} stopSlide={stopSlideTimer}  startSlide={startSlideTimer}/>
      </div>
      <div className='arrowLeft' onClick={prev}>
        <img src={arrowRight} alt="arrowRight" />
      </div>
      <div className="arrowRight" onClick={next}>
        <img src={arrowRight} alt="arrowRight" />
      </div>
    </div>
  )
}

export default Carousel