import  './projekte.scss';
import { carouselBannerPictures } from './../../assets/images/carouselBannerImage';

const Projekte = () => {
  return (
    <div className='projekteContainer'>
        <div className="topBanner">
                <img src={carouselBannerPictures.project} alt="" />
            <div className="bannerImage">
              <h1>Projekte</h1>
            </div>
        </div>

        <div className="projectHeader">
            <h2>
            Maßnahmen zur Heranführung an den Ausbildungs- und Arbeitsmarkt
            </h2>
        </div>

        <div className="projectContentContainer">
            <div className="left">
               <h1>
               Werkakademie <br /> <b>Work First</b>
               </h1>
            </div>
            <div className="right">
                <p>
                nach § 16 Abs. 1 Zweites Buch Sozialgesetzbuch (SGB II), i. V. m.
§ 45 Abs. 1, Satz 1, Nr. 1, 2, 3 und 5 Drittes Buch Sozialgesetzbuch (SGB III)

Erwerbslose Menschen durch gezielte, intensive Unterstützung schnell in Arbeit oder Ausbildung bringen – dies ist das Ziel von WORK FIRST.. Diese Zielsetzung impliziert konzeptionell einen individuellen teilnehmerbezogenen Ansatz, der bei den vorhandenen Kompetenzen und Potenzialen ansetzt, der ganzheitlich ausgerichtet ist und auf einer positiven Wertschätzung der Teilnehmer basiert.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Projekte