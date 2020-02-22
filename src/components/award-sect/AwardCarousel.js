import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './Award.css'

export class AwardCarousel extends Component {
  items = [
    'https://softuni.bg/Files/UserFiles/ImageGallery/bulgarian-web-awards-logo.png',
    'https://pluspng.com/img-png/logo-aok-png-apk-250.png',
    'https://image.freepik.com/free-vector/travel-agency-logo_10250-4135.jpg',
    'https://www.logolynx.com/images/logolynx/8f/8f96d2fa0f5e3b8c313c5e023c9288bd.jpeg',
    'https://i.ya-webdesign.com/images/travel-logo-png-2.png'
  ]
  
  state = {
    galleryItems: this.items.map((i) => <img src={i} style={{width:"100px", height:"80px"}}></img>),
  }
 autoPlay = true;
 
  thumbItem = (item, i) => (
    <span key={item} onClick={() => this.Carousel.slideTo(i)}>
      *{' '}

    </span>
  )
 
  render() {

   let responsive = {
      0: { items: 1 },
      512: { items: 2 },
    }
   ;
    return (
      <div className="the-whole-award-wrapper">
              <div className="award-carousel-wrapper">
        <h3 style={{fontSize:"19px" , paddingLeft:"560px", paddingTop:"40px" , paddingBottom:"30px"}}>Award Winning Educational Institution</h3>
       <div className="alice-container-award">
       <AliceCarousel
       keysControlDisabled={true}

           duration={400}
           autoPlay={true}
           startIndex = {1}
           fadeOutAnimation={true}
           mouseDragEnabled={true}
           responsive={responsive}
           autoPlayInterval={2000}
           autoPlayDirection="rtl"
           autoPlayActionDisabled={true}
          dotsDisabled={true}
          responsive={responsive}
          buttonsDisabled={true}
          items={this.state.galleryItems}
          ref={(el) => (this.Carousel = el)}
        />

      </div>
      </div>
        <button style={{color:"black"}} onClick={() => this.Carousel.slidePrev()}> {"<"} </button>
        <button style={{color:"black"}}  onClick={() => this.Carousel.slideNext()}>{">"}</button>
      </div>
    )
  }
}

export default AwardCarousel

