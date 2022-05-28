import styles from './footer.module.scss'
import digitalOcean from '../../assets/digitalOcean.svg'
import twilo from '../../assets/twilo.svg'
import google from '../../assets/google.svg'
import nkp from '../../assets/nkp.svg'
import logo from '../../assets/logo.svg'
import emailIcon from '../../assets/mailIcon.svg'
import youtube from '../../assets/youtube.svg'
import twitter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import mastercard from '../../assets/mastercard.svg'
import visa from '../../assets/visa.svg'



const Footer = () => {


  return(
    <div className={styles["footer"]}>
      <div className={styles["footer_powered"]}>
        <h1>powered by</h1>
        <div className={styles["affiliates"]}>
          <div className={styles["affiliate"]}>
            <img src={digitalOcean} alt="digitalOcean" />
          </div>
          <div className={styles["affiliate"]}>
            <img src={twilo} alt="twilio" />
          </div>
          <div className={styles["affiliate"]}>
            <img src={google} alt="google Cloud" />
          </div>
          <div className={styles["affiliate"]}>
            <img src={nkp} alt="nkap" />
          </div>
        </div>
      </div>
      <div className={styles["footer_main"]}>
        <div className={styles["footer-subscribe"]}>
          <div className={styles["footer-subscribe_logo"]}>
            <img src={logo} alt="Bongalo" />
            <h2>Bongalo</h2>
          </div>
          <div className={styles["footer-subscribe_input"]}>
            <label htmlFor="email">Enter your email to subscribe to our newsletter</label>
            <div>
              <input type="email" id='email' placeholder='Enter Email Address' />
              <img src={emailIcon} alt="email-Icon" />
              <button className={styles["btn-subscribe"]}>Subscribe</button>
            </div>
          </div>
        </div>
        <div className={styles["footer-navigations"]}>
          <div className={styles["nav-item"]}>
            <h2>about bongalo</h2>
            <ul>
              <li>About us</li>
              <li>Company</li>
              <li>Career</li>
              <li>Press Release</li>
            </ul>
          </div>
          <div className={styles["nav-item"]}>
            <h2>Links</h2>
            <ul>
              <li>Blog</li>
              <li>Privacy policy</li>
              <li>terms &amp; conditions</li>
            </ul>
          </div>
          <div className={styles["nav-item"]}>
            <h2>contact</h2>
            <p>4th floor, fairview building KG 622 St, kigali, Rwanda</p>
            <p>6th floor CamCull Building Comm Ave, Bamenda, Cameroon <br /> info@bongalo.co</p>
          </div>
          <div className={styles["nav-item-socials"]}>
            <h2>join us on</h2>
            <div className={styles["icons"]}>
              <img src={youtube} alt="youtube" /><img src={twitter} alt="twitter" /><img src={facebook} alt="facebook" /><img src={instagram} alt="instagram" />
            </div>
          </div>
        </div>
        <div className={styles["footer-copyright"]}>
          <div className={styles["copyright"]}>
            <p>Copyright &copy; 2021 Bongalo.co. All rights reserved</p>
          </div>
          <div className={styles["payment"]}>
            <h3>payment methods</h3>
            <img className={styles["master-img"]} src={mastercard} alt="mastercard" />
            <img className={styles["visa-img"]} src={visa} alt="visa" />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Footer