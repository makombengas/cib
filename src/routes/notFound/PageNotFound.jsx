import { carouselBannerPictures } from '../../carouselBannerImage';
import  './notFound.scss';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='notFoundContainer'>

            <div className="topBanner">
                    <img src={carouselBannerPictures.notFound} alt="" />
                <div className="bannerImage">
                     <h1>Page not found</h1>
                </div>
            </div>
            <div className="notFoundContent">
              <h1>Seite nicht gefunden <b> 404</b></h1>
              <h2>Die angeforderte Internetadresse funktioniert nicht.
                  Was jetzt?
              </h2>
              <p> Zur Startseite von <b>CIB </b> <Link to='/'>zurückkehren</Link>.</p>

              <p>Du hast Anmerkungen oder Anregungen? Dann schreib uns eine E-Mail an Hallen@cib-ol.eu.</p>

              <Link to='/'>
                  <button> Zur Starseite</button>
              </Link>
            </div>

    </div>
  )
}
export default PageNotFound