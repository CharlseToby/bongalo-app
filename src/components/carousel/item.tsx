import styles from './item.module.scss';
import Card from '../Card/card';
import placesBed from '../../assets/places-bed.svg'
import placesShower from '../../assets/places-shower.svg'
import experienceLocate from '../../assets/experience-location.svg'

export const PlaceItem = (props:any) => {

  const {name, image, label, bedCount, showerCount, price, id } = props.place;
  const cardSize = props.cardSize;

    return(
      <div className={styles["place"]} key={id}>
        <Card height={cardSize?.smallCardHeight} width={cardSize?.smallCardWidth} bdRadius='5px'>
          <img className={styles["place-img"]} src={image} alt={label} />
        </Card>
        <div className={styles["place-details"]}>
          <div className={styles["place-details_left"]}>
            <h2>{label}</h2>
            <h3>${price}<span>/night</span></h3>
          </div>
          <div className={styles["place-details_right"]}>
            <p>{name}</p>
            <div>
              <p>{bedCount} <img src={placesBed} alt="bed" /></p>
              <p>{showerCount} <img src={placesShower} alt="shower" /></p>
            </div>
          </div>
        </div>
      </div>
    )
}


export const ExperienceItem = (props:any) => {

  const { name, label, id, image} = props.experience;
  const cardSize = props.cardSize;

    return (
      <div className={styles["experience"]} key={id}>
        <Card height={cardSize?.smallCardHeight} width={cardSize?.smallCardWidth} bdRadius='5px'>
          <img className={styles["experience-img"]} src={image} alt="experience" />
        </Card>
        <div className={styles["experience_details"]}>
          <h2>{name}</h2>
          <p><img src={experienceLocate} alt={label}/> {label}</p>
        </div>
      </div>
    )
}