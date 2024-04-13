
import { carouselBannerPictures } from '../../carouselBannerImage';
import './weForYou.scss';

const WeforYou = () => {
  return (
    <div className='weForYouContainer'>
          <div className="topBanner">
                <img src={carouselBannerPictures.integration} alt="" />
                <div className="bannerImage">
                     <h1>Wir für sie</h1>
                </div>
            </div>
            <div className="weForYouHeader">
               <div className="sectionContainer">
                    <h2>
                        Profitieren Sie von unserer Kompetenz:
                    </h2>
                    <ul>
                        <li>Stetige Arbeitgeber- und Ausbilderkontakte</li>
                        <li>Langjährige Vermittlungs- und Projekterfahrung</li>
                        <li>Umfassende Kenntnisse des SGB II, III und VIII</li>
                        <li>Kompetente Fachkräfte für Integration, Training und Schulung</li>
                    </ul>
               </div>

               <div className="sectionContainer">
                    <h2>
                        Hierbei unterstützen wir Sie konsequent und gewissenhaft:
                    </h2>

                    <ul>
                        <li>Erarbeitung realitätsnaher Bewerbungsstrategien</li>
                        <li>Erstellung von aussagekräftigen Bewerbungsunterlagen</li>
                        <li>Durchführung einer individuellen Arbeitsmarktprüfung</li>
                        <li>Sicherstellung dauerhafter Beschäftigung durch Nachbetreuung</li>
                        <li>Angebot der intensiven Einzelfallbearbeitung</li>
                    </ul>
               </div>

               <div className="sectionContainer">
                    <h2>
                         Konzeptionell unterstützen wir Sie bei der:
                    </h2>

                    <ul>
                        <li>Durchführung einer individuellen Arbeitsmarktprüfung</li>
                        <li>Umfassenden Situationsanalyse</li>
                        <li>Detaillierten Organisation</li>
                        <li>Projektadäquaten Koordination</li>
                        <li>Zielgerichteten Aktion</li>
                        <li>Zuverlässigen Evaluation</li>
                    </ul>
               </div>

               
            </div>
    </div>
  )
}

export default WeforYou