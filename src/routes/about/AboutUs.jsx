import './aboutUs.scss';

// import { FaPlay } from "react-icons/fa";
import { useState } from 'react';
import { carouselBannerPictures } from '../../carouselBannerImage';
const AboutUs = () => {
    const [openVideo, setOpenVideo] = useState(false);
    // const handleVideo =()=>{
    //     setOpenVideo(true);
    // }
  return (
    <div className='aboutUsContainer'>
        <div className="topBanner">
                <img src={carouselBannerPictures.aboutUs} alt="" />
            <div className="bannerImage">
              <h1>Über uns</h1>
            </div>
        </div>
        <div className="aboutHeader">
            <h2>
                Auf den folgenden Seiten können Sie näheres zu dem <br /> Centrum für Integration und Bildung e.V. erfahren.
            </h2>
        </div>
        <div className="contentContainer">
        <div className="left">
             <img src={carouselBannerPictures.aboutUs} alt="" />
             {/* <div className="textIcon">
                <FaPlay onClick={handleVideo} className='aboutVideoPlay' />
             </div> */}
        </div>
        
        <div className="right">
            <div className="rightOne">
              
               <h1>
               Zwei Grundsätze prägen die Identität des CIB e. V. Unsere besondere Arbeitsmarktnähe und unser  Selbstverständnis als kundenorientiertes Dienstleistungsunternehmen.
               </h1>

                <h3>
                Diese ergänzen und konkretisieren sich in
                </h3>

                <div className="checkContent">
                    <ul>
                        <span>&#10003;</span>  <li> einem differenzierten und vielfältigen Lehrgangsangebot, das den unterschiedlichen Qualifizierungsinteressen der Teilnehmerinnen und Teilnehmer Rechnung trägt,</li>
                    </ul>

                    <ul>
                        <span>&#10003;</span> <li> der Entwicklung innovativer und der Anpassung bestehender Lehrgangskonzeptionen an die sich wandelnden Anforderungen der Kunden und Partner sowie des Arbeitsmarktes,</li>
                    </ul>

                    <ul>
                        <span>&#10003;</span> <li> einer flexiblen und kontinuierlich angelegten Bildungsarbeit,</li>
                    </ul>
                    <ul>
                        <span>&#10003;</span> <li> der Berücksichtigung der unterschiedlichen Lebenssituationen von Frauen und Männern.</li>
                    </ul> 

                    <ul>
                        <span>&#10003;</span> <li> dem Aspekt der beruflichen und sozialen Notwendigkeit des lebenslangen Lernens,</li>
                    </ul>  

                    <ul>
                        <span>&#10003;</span> <li> der Verlässlichkeit und Seriosität unseres Unternehmens und dem hohen Qualitätsstandard unserer Arbeit.</li>
                    </ul> 
               </div>

               <p>
                  Als professioneller Anbieter von Weiterbildungsmaßnahmen verfügen wir über umfangreiche Kompetenzen bei der Planung, Konzeption und der Durchführung von Schulungen. Nehmen auch Sie unser umfangreiches Bildungsangebot in Anspruch!

                  Wir können Ihnen eine optimale individuelle Förderung in den grundlegenden allgemeinbildenden Fächern bieten. Darüber hinaus finden Sie in unserem Angebot stets innovative Bildungsangebote. Aktualisieren Sie beispielsweise Ihre persönlichen Methoden- und Medienkompetenzen in den angebotenen Kursen zu Informationstechniken und Neuen Medien.

                  Informieren Sie sich vorab auf unseren Internet-Seiten in Ruhe über unser Kursangebot.

                  Natürlich beraten wir Sie auch gerne in einem persönlichen Gespräch zu Ihren persönlichen Weiterbildungsmöglichkeiten und informieren Sie über eventuelle Fördermöglichkeiten.

               </p>
               
            </div>

        </div>
        </div>
            {openVideo && <div className="videoBanner">
                <span onClick={()=>setOpenVideo(false)}>X</span>
               <section>
               <iframe width="560" height="315" src="https://www.youtube.com/embed/IukfzmhiC5g?si=eNApRIFOUZKv_Z3Z" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
               </section>
            </div>}
    </div>
  )
}

export default AboutUs