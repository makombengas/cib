
import { logosSlider } from '../../carouselBannerImage';
import './sponsor.scss';

const Sponsor = () => {
  return (
    <div className= 'sponsorContainer'>
    <h1>Gefördert durch</h1>
        <div className="animationContainer">
            <div className="logoSlide">
                {
                    logosSlider.map( slide =>(
                        <img key={slide.id} src={slide.image} alt="" />
                    ))
                }
            </div> 
            
        </div> 

    </div>
  )
}

export default Sponsor