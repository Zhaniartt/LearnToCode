import React from 'react';
import Navbar from '../Navbar'
import YoutubeVideo from '../react-youtube/YoutubeVideo'
import './Header.css'
import Benefits from '../benefit-sect/Benefit-sect'

const Home = () => {

  
    return (
      <div className="home-section">
        <Navbar/>
        <br></br>
        <br></br>
        <br></br>

        <div className="info-div-section">
            <header className="header-section">
                <div className="section-one">
                <div className="header-section-headings">
                    <h1 className="">
                    Become a Software Developer
                    <br/>
                    Learn to code and start your career
                    </h1>
                    <div className="sub-heading container">
                            <h4 style={{fontSize:"20px"}}>
                              Enroll in our end-to-end program.Start now with a free course
                            </h4>

                    </div>
                </div>
                <div className="header-section-buttons">
                    <div className="secondary-button"><button>APPLY</button></div>
                    <span className="breakLine">|</span>
                    <div className="secondary-button"><button>CURRICULUM</button></div>
                </div>
                </div>


               <div  className="section-one">
               <YoutubeVideo 
               showCaptions/>
               </div>
               
            </header>
            <Benefits/>
        </div>
      </div>
    
    );
}

export default Home;
