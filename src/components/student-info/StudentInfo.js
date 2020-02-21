import React, { Component } from 'react'
import QuoteBox from './QuoteBox'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './StudentInfo.css'

export class StudentInfo extends Component {
    items = [
            <QuoteBox quote={"I decided to get into programming becouse I thinkg the profession is extremely interesting and offers a lot of challenges.WHat I like about it is that I must constantly develop and learn new things."} name={"Pavel Petrov"} image={"https://image.shutterstock.com/image-photo/confident-handsome-student-holding-books-260nw-366568778.jpg"} />,
            <QuoteBox quote={"Education is the first step for people to gain the knowledge, critical thinking, empowerment and skills they need to make this world a better place.It’s important to seize the day, but always make time to go deeper and wider in your learning."} name={"Ivana Ivanova"} image={"https://m.netinfo.bg/media/images/39957/39957519/991-ratio-student.jpg"}/>,
            <QuoteBox quote={"Education requires costly resources, like time and money, which are often hard to find. But those who do invest these resources, often end up richer – not just because they often improve their financial situation, but because their minds are richer too."} name={"Maria Kostova"} image={"https://files.profiprekladatel.cz/gy56ingkqg18/student_570.jpg"}/>,
            <QuoteBox quote={"There are many ways you can make an impact on the world. But there is no greater impact that you can make than spreading education, and empowering people who’ll empower and teach people, who, in turn, will empower and teach more."} name={"Martin Kovachev"} image={"https://disshelp.ru/blog/wp-content/uploads/2019/04/student-in-sub.jpg"}/>

      ]
      
      state = {
        galleryItems: this.items.map((i) => <div>{i}</div>),
      }
     
      thumbItem = (item, i) => (
        <span key={item} onClick={() => this.Carousel.slideTo(i)}>
          *{' '}
    
        </span>
      )
     
      render() {
       let responsive = {
          0: { items: 1 },
          540: { items: 3 },
        }
       
        return (
          <div className="the-student-wrapper">
                  <div className="student-carousel-wrapper">
           <div className="alice-container-student">
           <AliceCarousel
              dotsDisabled={true}
              responsive={responsive}
              buttonsDisabled={true}
              items={this.state.galleryItems}
              ref={(el) => (this.Carousel = el)}
            />
           </div>
          
          </div>
          </div>
        )
      }
}

export default StudentInfo

