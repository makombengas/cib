import ArbeitsJobBanner from '../../components/arbeitsJob/ArbeitsJobBanner';
import BannerCarousel from '../../components/bannerCarousel/BannerCarousel';
import Carousel from '../../components/carousel/Carousel';
import Testimonial from '../../components/testimonial/Testimonial';
import AboutUsHome from './aboutUsHome/AboutUsHome';

import './home.scss';

const Home = () => {
  return (
    <div className='homeContainer'>
        <Carousel/>
        <div className="carouselContainer">
          <BannerCarousel/>
       </div>
       <AboutUsHome/>
       <ArbeitsJobBanner/>
       <Testimonial/>
    </div>
  )
}

export default Home