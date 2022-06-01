import React from 'react'
import styles from './slide.module.scss';
import { ExperienceItem, PlaceItem } from './item'

const Slide = (props:any) => {

  const {cardSize, name, section} = props;
  
  

  return (
    <>
      {(name === "places")? (
        <div className={styles["places"]}>
          {section?.map((place:any) => <PlaceItem place={place} key={place.key} cardSize={cardSize}/>)} 
        </div>) : 
      (name === "experiences")? (
        <div className={styles["experiences"]}>
          {section?.map((experience:any) => <ExperienceItem experience={experience} key={experience.key} cardSize={cardSize}/> )}         
        </div>
      ): null}
    </>
  )
}

export default Slide