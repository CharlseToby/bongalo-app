import React from 'react'
import styles from './slide.module.scss';
import { ExperienceItem, PlaceItem } from './item'

const Slide = (props:any) => {

  const {cardSize, name, section, stopSlide, startSlide} = props;
  
  

  return (
    <>
      {(name === "places")? (
        <div className={styles["places"]}>
          {section?.map((place:any) => <PlaceItem place={place} key={place.id} cardSize={cardSize} stopSlide={stopSlide} startSlide={startSlide}/>)} 
        </div>) : 
      (name === "experiences")? (
        <div className={styles["experiences"]}>
          {section?.map((experience:any) => <ExperienceItem experience={experience} key={experience.id} cardSize={cardSize}/> )}         
        </div>
      ): null}
    </>
  )
}

export default Slide