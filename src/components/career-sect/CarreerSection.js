import React from 'react';
import { Slide } from 'react-slideshow-image';

import './CareerSection.css'

const slideImages = [
    'https://pngimage.net/wp-content/uploads/2018/06/it-company-logo-png-4.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cd92ae64585009.5ad72a5a5e9e7.jpg',
    'https://image.freepik.com/free-vector/travel-agency-logo_10250-4135.jpg',
    'https://www.logolynx.com/images/logolynx/8f/8f96d2fa0f5e3b8c313c5e023c9288bd.jpeg',
    'https://i.ya-webdesign.com/images/travel-logo-png-2.png'
]

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }



const CarreerSection = () => {

    return (
        <div className="career-sect-wrapper">
            <section className="career-section">
                <div className="container-career">
                    <div className="carreer-section-row">
                        <div className="career-item">
                        <h5>Start your career in:</h5>
                        </div>
                        <div className="career-item">
                        <div className="slideshow-container">
                             <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div className="logo-image" style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div className="logo-image" style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div className="logo-image" style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>SPAN</span>
            </div>
          </div>
          <div className="each-slide">
            <div className="logo-image" style={{'backgroundImage': `url(${slideImages[3]})`}}>
              <span>SPAN</span>
            </div>
          </div>
          <div className="each-slide">
            <div className="logo-image" style={{'backgroundImage': `url(${slideImages[4]})`}}>
              <span>SPAN</span>
            </div>
          </div>
        </Slide>
      </div>
                        </div>
       
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CarreerSection;
