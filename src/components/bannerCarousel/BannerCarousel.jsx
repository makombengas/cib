import './bannerCarousel.scss';

import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { carouselBannerPictures } from '../../carouselBannerImage';

const BannerCarousel = () => {
    useGSAP(()=>{
        gsap.from("#left", {
            trigger:'#left', 
            start:'20% top',
            opacity:0,
            y:-1.5,
            duration:2,
            ease:"power2.inOut",
        })

    },[])
  return (
    <div className='bannerCarouselContainer' id='left'>
        <div className="sectionContainer">
            <section>
            <img src={carouselBannerPictures.calendar} alt="calendar.svg" />
            </section> 
            <h3>5</h3>
            <p>Jahre Gründung</p>
        </div>
        <div className="sectionContainer">
            <section>
            <img src={carouselBannerPictures.student} alt="student.svg" />
            </section>
            <h3>2500</h3>
            <p>Students in 2024</p>
        </div>
        <div className="sectionContainer">
        <section>
        <img src={carouselBannerPictures.staff} alt="staff.svg" />
            </section>
            <h3>1500</h3>
            <p>Staff</p>
        </div>
        <div className="sectionContainer">
        <section>
        <img src={carouselBannerPictures.alumni} alt="alumni.svg" />
            </section>
            <h3>3000</h3>
            <p>Alummi</p>
        </div>
        <div className="sectionContainer">
        <section>
        <img src={carouselBannerPictures.partner} alt="partner.svg" />
            </section>
            <h3>600</h3>
            <p>Partner</p>
        </div>
    </div>
  )
}

export default BannerCarousel