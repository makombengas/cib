import  './contact.scss';
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { carouselBannerPictures } from '../../assets/images/carouselBannerImage';
const Contact = () => {
  return (
    <div className='contactContainer'>
         <div className="topBanner">
                    <img src={carouselBannerPictures.call} alt="" />
                <div className="bannerImage">
                     <h1>Uns Kontaktieren</h1>
                </div>
            </div>
        <div className="topContact">
                <div className="phone">
                    <FaPhoneAlt className='contactIcon' />
                    <h2>Telefon</h2>
                    <span><b>Telefon:</b> +49 4403-9165256</span>
                    <span><b>Telefax:</b> +49 4403-9165257</span>
                </div>
                <div className="location">
                    <FaLocationArrow className='contactIcon' />
                    <h2>Standort</h2>
                    <p>Natürlich beraten wir Sie auch gerne in einem persönlichen Gespräch zu Ihren persönlichen Weiterbildungsmöglichkeiten und informieren Sie über eventuelle Fördermöglichkeiten.</p>
                    <span>Langenhof 1, 26160 Bad Zwischenahn</span>
                </div>
                <div className="email">
                    <MdOutlineEmail className='contactIcon' />
                    <h2>Email</h2>
                    <p>Natürlich beraten wir Sie auch gerne in einem persönlichen Gespräch zu Ihren persönlichen Weiterbildungsmöglichkeiten und informieren Sie über eventuelle Fördermöglichkeiten.</p>
                    <span><b>E-Mail:</b> info@cib-ol.eu</span>
                </div>
        </div>

        <div className="contactFormContainer">
           <div className="formContainer">
                <form action="#">
                        <label htmlFor="gender">Geschlecht</label>
                        <select id="gender" name="gender">
                        <option value="herr">Herr</option>
                        <option value="frau">Frau</option>
                        </select>
                        <label htmlFor="fname">Ihr Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Ihr Name..."/>

                        <label htmlFor="email">Ihre Email</label>
                        <input type="text" id="email" name="email" placeholder="Ihre E-Mail.."/>



                        <label htmlFor="subject">Ihre Nachricht</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>

                        <input type="submit" value="Absenden"/>
                    </form>
            </div>

            <div className="mapContainer">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d613134.41823854!2d7.752234828441877!3d53.109181106754875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47b6e3a4078e9745%3A0x305b83378e10f121!2sLangenhof%201%2C%2026160%20Bad%20Zwischenahn!3m2!1d53.1813735!2d7.9985705!5e0!3m2!1sfr!2sde!4v1712864524188!5m2!1sfr!2sde"   allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Contact