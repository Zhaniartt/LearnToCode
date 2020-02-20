import React from 'react';

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import './CareerSection.css'


class CarreerSection extends React.Component {
   items = [
    'https://pngimage.net/wp-content/uploads/2018/06/it-company-logo-png-4.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cd92ae64585009.5ad72a5a5e9e7.jpg',
    'https://image.freepik.com/free-vector/travel-agency-logo_10250-4135.jpg',
    'https://www.logolynx.com/images/logolynx/8f/8f96d2fa0f5e3b8c313c5e023c9288bd.jpeg',
    'https://i.ya-webdesign.com/images/travel-logo-png-2.png'
  ]
  
  state = {
    galleryItems: this.items.map((i) => <img src={i} style={{width:"100px", height:"80px"}}></img>),
  }
 
  thumbItem = (item, i) => (
    <span key={item} onClick={() => this.Carousel.slideTo(i)}>
      *{' '}

    </span>
  )
 
  render() {
   let responsive = {
      0: { items: 1 },
      512: { items: 4 },
    }
   
    return (
      <div className="the-whole-wrapper">
              <div className="carousel-wrapper">
        <h3>Start your career in:</h3>
        <button style={{color:"black"}} onClick={() => this.Carousel.slidePrev()}> {"<"} </button>
       <div className="alice-container">
       <AliceCarousel
          dotsDisabled={true}
          responsive={responsive}
          buttonsDisabled={true}
          items={this.state.galleryItems}
          ref={(el) => (this.Carousel = el)}
        />
       </div>
       
      
        <button style={{color:"black"}}  onClick={() => this.Carousel.slideNext()}>{">"}</button>
      </div>
      </div>
    )
  }
}
export default CarreerSection;
