import styles from './hero.module.scss'
import logo from '../../assets/logo.svg'
import arrowleft from '../../assets/arrow-left.svg'
import arrowright from '../../assets/arrow-right.svg'
import arrowdown1 from '../../assets/arrow-down1.svg'
import arrowdown2 from '../../assets/arrow-down2.svg'
import arrowdown3 from '../../assets/arrow-down3.svg'
import heroBg from '../../assets/hero-bg.svg'
import arrowdownSearch from '../../assets/arrow-down_search.svg'
import location from '../../assets/location.svg'
import departure from '../../assets/departure.svg'
import guest from '../../assets/guest.svg'
import hamburger from '../../assets/hamburger.svg'
import { useState } from 'react'

const Hero = () => {
  const [showNav, setShowNav] = useState(false);

  const navControl = () => {
    setShowNav(showNav => !showNav);
  }

  return (
    <div className={styles["hero"]}>
      <div className={styles["hero-bg"]}>
        <img src={heroBg} alt="hero-bg" />
      </div>
      <div className={styles["hero-content"]}>
        <div className={styles["hero-content-nav"]}>
          <div className={styles["logo"]}>
            <img className={styles["hamburger-img"]} src={hamburger} alt="hamburger-menu" onClick={navControl}/>
            <img src={logo} alt="logo" />
            <h2>Bongalo</h2>
          </div>
          <div className={styles["nav"]}>
            <ul>
              <li>Home</li>
              <li>List a property</li>
              <li>Blog</li>
              <li>FAQs</li>
            </ul>
            <button className={styles["btn-login"]}>Login</button>
          </div>
        </div>
        <div className={showNav? styles["nav-show"] : styles["nav-hide"]} >
          <p>Home</p>
          <p>List a property</p>
          <p>Blog</p>
          <p>FAQs</p>
        </div>
        <div className={styles["hero-content-text"]}>
          <img className={styles["hero-arrow-left"]} src={arrowleft} alt="arrow-left" />
          <p>Travelling Africa for Business or leisure? <span>Book</span> a place to stay<span>.</span></p>
          <img className={styles["hero-arrow-right"]} src={arrowright} alt="arrow-right" />
          <div className={styles["hero-arrow"]}>
            <img className={styles["hero-arrow-down1"]} src={arrowdown1} alt="arrow-down" />
            <img className={styles["hero-arrow-down2"]} src={arrowdown2} alt="arrow-down" />
            <img className={styles["hero-arrow-down3"]} src={arrowdown3} alt="arrow-down" />
          </div>
        </div>
        <div className={styles["hero-content-search"]}>
          <div className={styles["search-item"]}>
            <img src={location} alt="location-icon" />
            <p>Destination</p>
            <input type="text" defaultValue={"Kigali, Rwanda"}/>
            <img className={styles["search-item-arrow"]} src={arrowdownSearch} alt="" />
          </div>
          <div className={styles["search-item"]}>
            <img className={styles["departure"]} src={departure} alt="departure-icon" />
            <p>Arrival - Departure</p>
            <input type="text" defaultValue={"Wed, Oct 1 - Tue, Dec 10"}/>
            <img className={styles["search-item-arrow"]} src={arrowdownSearch} alt="" />
          </div>
          <div className={styles["search-item"]}>
            <img src={guest} alt="guest-icon" />
            <p>Guest</p>
            <input type="text" defaultValue={"5 Guests"}/>
            <img className={styles["search-item-arrow"]} src={arrowdownSearch} alt="" />
          </div>
          <div>
            <button className={styles["btn-search"]}>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero