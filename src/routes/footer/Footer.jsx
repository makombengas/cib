import './footer.scss';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Sponsor from './../../components/sponsor/Sponsor';
import Team from '../team/Team';
const Footer = () => {
  return (
    <div className='footerContainer'>
       <Team/>
       <Sponsor/>
        <footer className="footer">
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <div className="contactInfoContainer">
      <h2>Kontaktiere uns</h2>
      <span>Centrum für Integration und Bildung e. V.</span>
      <p>Langenhof 1 26160 Bad Zwischenahn</p>
   
        <p> Telefon: +49 4403-9165256</p>
        <p>Telefax: +49 4403-9165257</p>
      <p>E-Mail:info@cib-ol.eu</p>
      </div>

   
    <ul className="social-icon">
      <li className="social-icon__item"><Link className="social-icon__link" to="#" target='blank'>
                <FaFacebook />
        </Link></li>
      <li className="social-icon__item"><Link className="social-icon__link" to="#" target='blank'>
                <FaTwitter />
        </Link></li>
      <li className="social-icon__item"><Link className="social-icon__link" to="#" target='blank'>
            <FaLinkedin />
        </Link></li>
      <li className="social-icon__item"><Link className="social-icon__link" to="#" target='blank'>
                <FaInstagram />
        </Link></li>
    </ul>
    <ul className="menu">
      <li className="menu__item"><Link className="menu__link" to="/">Home</Link></li>
      <li className="menu__item"><Link className="menu__link" to="uber-uns">Über uns</Link></li>
      <li className="menu__item"><Link className="menu__link" to="wir-fur-sie">Wir für sie</Link></li>
      <li className="menu__item"><Link className="menu__link" to="projekte">Projekte</Link></li>
      <li className="menu__item"><Link className="menu__link" to="job-angebote">Jobangebote</Link></li>
      <li className="menu__item"><Link className="menu__link" to="kontakt">Kontakt</Link></li>

    </ul>
    <p>&copy;2024 Bernard Ngassa | All Rights Reserved</p>
  </footer>


   
    </div>
  )
}

export default Footer