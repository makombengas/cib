

import { carouselBannerPictures } from '../../carouselBannerImage';
import './jobAngebote.scss';

const JobAngebote = () => {
  return (
    <div className='jobAngeboteContainer'>
            <div className="topBanner">
                    <img src={carouselBannerPictures.jobFind} alt="" />
                <div className="bannerImage">
                     <h1>Jobangebote</h1>
                </div>
            </div>

            <div className="jobHeader">
                
               <div className="scrollContainer">
                    <h2>Wir sind auf die suche nach ein Sozialsassistent_in für vollzeit Job!     Bitte ihre Bewerbung anschreibe und Lebenslauf per Mail zuschicken lassen.</h2>
               </div>

               <div className="scrollContainer">
                    <h2>Wir sind auf die suche nach ein Sozialsassistent_in für vollzeit Job!     Bitte ihre Bewerbung anschreibe und Lebenslauf per Mail zuschicken lassen.</h2>
               </div>

        
             
            
            </div>

            <div className="teamContentContainer">
                <h1>
                    Werden Sie Teil unseres Teams!
                </h1>
                <div className="teamContent">
                  <h1>W</h1>
                  <p>
                      ir bieten Ihnen interessante und vielfältige Aufgaben mit individuellen Gestaltungsspielräumen.
                      Auf den folgenden Seiten können Sie sich über die aktuellen Einstiegsmöglichkeiten in unserem Unternehmen informieren. Sie werden sehen, das Centrum für Integration und Bildung e.V. bietet eine Vielzahl an spannenden Beschäftigungsfeldern.
                  </p>
                </div>
              
             </div>
    </div>
  )
}

export default JobAngebote