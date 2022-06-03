import styles from './body.module.scss'
import { citiesArray, placesArray, experienceArray } from '../dataset'
import placesBed from '../../assets/places-bed.svg'
import placesShower from '../../assets/places-shower.svg'
import arrowRight from '../../assets/places-arrow-right.svg'
import experienceLocate from '../../assets/experience-location.svg'
import availability from '../../assets/availability.svg'
import client from '../../assets/client.svg'
import support from '../../assets/support.svg'
import Card from '../Card/card';
import useWindowDimensions from '../../hooks/useWindowsDimensions'
import Carousel from '../carousel/Carousel'

export interface dimensions {
  smallCardWidth: string;
  smallCardHeight: string;
  mediumCardWidth: string;
  mediumCardHeight: string;
  lardgeCardWidth: string;
  largeCardHeight: string;
}
const Body = () =>{
  const { width: windowWidth = 1443} = useWindowDimensions();

  let cardSize: dimensions = {
    smallCardWidth: "301.9px",
    smallCardHeight: "256px",
    mediumCardWidth: "421px",
    mediumCardHeight: "347px",
    lardgeCardWidth: "638px",
    largeCardHeight: "348px",
  };

  if (windowWidth <= 800 && windowWidth > 600) {
    cardSize = {
      smallCardWidth: "180px",
      smallCardHeight: "153.6px",
      mediumCardWidth: "190px",
      mediumCardHeight: "160.3px",
      lardgeCardWidth: "290px",
      largeCardHeight: "160.7px",
    };
  } else if (windowWidth <= 1310 && windowWidth > 1000) {
    cardSize = {
      smallCardWidth: "230px",
    smallCardHeight: "200px",
    mediumCardWidth: "320px",
    mediumCardHeight: "260px",
    lardgeCardWidth: "490px",
    largeCardHeight: "270px",
    };
  } else if (windowWidth <= 1000 && windowWidth > 800) {
    cardSize = {
      smallCardWidth: "230px",
    smallCardHeight: "200px",
    mediumCardWidth: "265px",
    mediumCardHeight: "220px",
    lardgeCardWidth: "400px",
    largeCardHeight: "221px",
    };
  } else if (windowWidth <= 600 && windowWidth > 500){
    cardSize = {
      smallCardWidth: "180px",
      smallCardHeight: "153.6px",
      mediumCardWidth: "160px",
      mediumCardHeight: "133.3px",
      lardgeCardWidth: "244px",
      largeCardHeight: "133.7px",
    };
  } else if (windowWidth <= 500){
    cardSize = {
      smallCardWidth: "180px",
      smallCardHeight: "153.6px",
      mediumCardWidth: "125px",
      mediumCardHeight: "102px",
      lardgeCardWidth: "190px",
      largeCardHeight: "104px",
    };
  }


  let citiesTopCards = citiesArray.slice(0,2).map((city:any) => {
    const {cityName, propertyCount, image} = city;

    return(
      <Card width={cardSize.lardgeCardWidth} height={cardSize.largeCardHeight} bdRadius='5px'>
        <div className={styles["city"]} key={cityName}>
          <img src={image} alt={cityName} />
          <div>
            <h2>{cityName}</h2>
            <p>{propertyCount} properties</p>
          </div>
        </div>
      </Card>
    )
  });

  let citiesOtherCards = citiesArray.slice(2,citiesArray.length).map((city:any) => {
    const {cityName, propertyCount, image} = city;

    return(
      <Card width={cardSize.mediumCardWidth} height={cardSize.mediumCardHeight} bdRadius='5px'>
        <div className={styles["cityOthers"]} key={cityName}>
          <img src={image} alt={cityName} />
          <div>
            <h2>{cityName}</h2>
            <p>{propertyCount} properties</p>
          </div>
        </div>
      </Card>
    )
  });

  let placesCards = placesArray.map((place:any) => {
    const {name, image, label, bedCount, showerCount, price, id } = place;

    return(
      <div className={styles["place"]} key={id}>
        <Card height={cardSize.smallCardHeight} width={cardSize.smallCardWidth} bdRadius='5px'>
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
  });

  let experienceCards = experienceArray.map((experience: any) => {
    const { name, label, id, image } = experience;

    return (
      <div className={styles["experience"]} key={id}>
        <Card height={cardSize.smallCardHeight} width={cardSize.smallCardWidth} bdRadius='5px'>
          <img className={styles["experience-img"]} src={image} alt="experience" />
        </Card>
        <div className={styles["experience_details"]}>
          <h2>{name}</h2>
          <p><img src={experienceLocate} alt={label}/> {label}</p>
        </div>
      </div>
    )
  });
  



  return (
    <div className={styles["body"]}>
      <div className={styles["body_featuredCities"]}>
        <h1>featured cities</h1>
        <div className={styles["cities"]}>
          {citiesTopCards}
        </div>
        <div className={styles["otherCities"]}>
          {citiesOtherCards}
        </div>
      </div>
      <div className={styles["body_featuredPlaces"]}>
        <h1>featured places</h1>
        <div className={styles["places"]}>
          <Carousel type={placesArray} cardSize={cardSize} name="places"/>
        </div>
        {/* <div className={styles["places-arrowLeft"]}>
          <img src={arrowRight} alt="arrowRight" />
        </div>
        <div className={styles["places-arrowRight"]}>
          <img src={arrowRight} alt="arrowRight" />
        </div> */}
      </div>
      <div className={styles["body_amazingExperience"]}>
        <h1>some amazing experiences</h1>
        <div className={styles["experiences"]}>
          <Carousel type={experienceArray} cardSize={cardSize} name="experiences"/>
        </div>
        {/* <div className={styles["experiences-arrowLeft"]}>
          <img src={arrowRight} alt="arrowRight" />
        </div>
        <div className={styles["experiences-arrowRight"]}>
          <img src={arrowRight} alt="arrowRight" />
        </div> */}
      </div>
      <div className={styles["body_summary"]}>
        <div>
          <img src={availability} alt="availability" />
          <h2>availability</h2>
          <p>We know how hard it can be finding a perfect home to rent, especially when moving to a new country; so we are available 24/7 for your inquiries about the best places to stay. You'll find the best places to stay on our platform without stress.</p>
        </div>
        <div>
          <img src={client} alt="client" />
          <h2>client satisfaction</h2>
          <p>Whether you are on a budget or travelling for a; conference, seminar, vacation, we got you covered. Plus, you can pay easily with your mobile wallet from any country in Africa in addition to the other payment methods available on our system.</p>
        </div>
        <div>
          <img src={support} alt="support" />
          <h2>support</h2>
          <p>We're available to support you as you book and set out on your trip across the continent. Our experienced support team ensures your esperience stays awesome all the way on your trip and even beyond. Count on us for our 24/7 support service.</p>
        </div>
      </div>
    </div>
  )
}


export default Body