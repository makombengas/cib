import { testimonialData } from '../../data/data';
import  './testimonial.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Testimonial = () => {
  return (
    <div className='testimonialContainer'>
        <h1>Erfahrungsberichte</h1>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

{testimonialData.map(testimonial =>(
        <SwiperSlide key={testimonial.id}>
                  <div className="contentContainer" >
             <div id="content">
                <div className="testimonial">
                    <blockquote>
                        {testimonial.text}
                    </blockquote>
                <div>

                </div>
                <p>
                <img src={testimonial.image} alt={testimonial.image} />
                    {testimonial.name} &mdash;{testimonial.city}
                </p>
            </div>
            </div>
       </div>

      
        </SwiperSlide> ))}
      
        
        </Swiper>
        
       <div className="allTestimonialContainer">
       
       </div>
    </div>
  )
}

export default Testimonial