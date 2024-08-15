import { Link } from 'react-router-dom';

import './arbeitsJobBanner.scss';
import { carouselBannerPictures } from '../../carouselBannerImage';

const ArbeitsJobBanner = () => {
  return (
    <div className="arbeitsJobBannerContainer">
        <div className="left">
            <div className="imageContainer">
                <img src={carouselBannerPictures.worker} alt="worker.jpg" />
            <Link to="wir-fur-sie">
                <div className="textContainer">
                    <h2> Jobangebote in Stellenangebote</h2>
                </div>
            </Link>
            </div>
        </div>
        <div className="right">
            <Link to="job-angebote">
                <div className="imageContainer">
                    <img src={carouselBannerPictures.jobSearch} alt="jobSearch.jpg" />
                    <div className="textContainer">
                        <h2>Jobangebote</h2>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default ArbeitsJobBanner