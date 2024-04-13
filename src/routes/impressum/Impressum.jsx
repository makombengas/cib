
import { carouselBannerPictures } from '../../carouselBannerImage';
import  './impressum.scss';

const Impressum = () => {
  return (
    <div className='impressumContainer'>
            <div className="topBanner">
                    <img src={carouselBannerPictures.impressum} alt="" />
                <div className="bannerImage">
                     <h1>Impressum</h1>
                </div>
            </div>
            <div className="impressumContent">
                <div className="topContent">
                    <h1>
                    Vorstand:
                    </h1>
                    <ul>
                        <li> <b>Vorsitzender:</b> Ulrich Stöcker</li>
                        <li> <b>Vorsitzender:</b> Alexandra Janssen</li>
                    </ul>
                </div>
                <div className="bottomContent">
                    <p> <b>Registriergericht: </b> Amtgericht Oldenburg </p>
                    <p> <b>Registernummer:</b> VR 201110 </p>
                    <p> <b>Haftungshinweis:</b> Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.  </p>
                </div>
            </div>
    </div>
  )
}

export default Impressum