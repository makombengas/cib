import './aboutUsHome.scss';
import integration from '../../../assets/images/integration.jpg';
import {Link} from "react-router-dom";
import {gsap} from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger) 
const AboutUsHome = () => {
  useGSAP(()=>{
    gsap.from("#willkomen", {
      ScrollTrigger:{
        trigger: "#willkomen",
        toggleActions:"restart pause reverse pause",
        start:'10% left',
      }, 
        opacity:0,
        x: -200,
        duration:2,
        ease:"power2.inOut",
    })

},[])
  return (
    <div className="aboutUsHomeContainer">
        <div className="left" id='willkomen'>
            <img src={integration} alt="integration.jpg" />
        </div>
        <div className="right">
           <div className="rightContent">
                <h1>Kompetenz in Integration <br /> und Bildung  dafür steht das
                
                </h1>
                <span>
                        Centrum für Integration und <b> Bildung e. V.</b>
                </span>
                <p>
                Unser Ziel ist die Förderung der beruflichen Qualifizierung aus der Erkenntnis, dass der beruflichen Bildung eine entscheidende Rolle bei der Zuteilung sozialer und beruflicher Chancen zukommt. Dies wird insbesondere verwirklicht durch die Entwicklung, Durchführung und Betreuung von geeigneten Bildungsmaßnahmen zur Qualifizierung und Befähigung unserer Teilnehmer zur Wiedereingliederung in den 1. Arbeitsmarkt.
                <br />
                <br />

                Unsere örtlich-regionale Präsenz und unser breitgefächertes Angebot sind Nachweis unserer engagierten, kundenorientierten und qualitativ hochwertigen Bildungsarbeit. Berufliche Bildung ist eine unverzichtbare Chance für diejenigen, die Individuelle Handlungsspielräume erweitern, ihren beruflichen und sozialen Aufstieg planen, ihren sozialen Stand durch Kompetenzerweiterung erhalten, Qualifikationsdefizite beheben oder ihre Vermittlungschancen am Arbeitsmarkt verbessern wollen.
                </p>
                <Link to='/uber-uns'>
                        <button> Mehr Lesen</button>
                </Link>
           </div>

        </div>
    </div>
  )
}

export default AboutUsHome