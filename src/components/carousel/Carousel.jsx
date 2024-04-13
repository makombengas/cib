
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Link } from 'react-router-dom';
import { sliderData } from '../../data/data';


const  Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderData.map(slide =>(
            <SwiperSlide key={slide.id}>
                <div className="sliderContainer">
                    <div className="imageContainer">
                        <img src={slide.image} alt="" />
                    <div className="textContainer">
                        <h1>{slide.text} </h1>
                        <p>{slide.subText} </p>
                        <Link to={slide.readLink}>
                          <button>Mehr lesen</button>
                        </Link>
                    </div>
                    </div>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
     
      
    </>
  );
}

export default Carousel