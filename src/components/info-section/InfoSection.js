import React from 'react';
import './InfoSection.css'


const InfoSection = () => {
    return (
        <div className="info-wrapper-section">
        <div id="first-section">
            <div className="info-softuni">
                <h3>About SoftUni</h3>

                <p>SoftUni (Software University) is a worldwide respected and award winning educational IT institution,<br/>
                    provviding training and career support in the field of software engineering.
                </p>
                <br></br>
                <p>Founded in 2013,SoftUni is rapodly becoming a market leader and today organizes hundreds of <br></br>
                training programs, free courses and seminars,events and other educational initiatives that<br/>
                provide quality eduaction to hundreds of thousends of people all over the world in the IT and Digital<br/>
                technologies.</p>
                <br></br>
                <p>
                    SoftUni not only provides training and educates people, but turns absolute beginners into real <br/>
                    professionals,completely prepared to start their career in the field of IT.SoftUni is unique with its<br/>
                    educational methodology of "learning by doing",achieving tremendous seccess rate of 97%<br/>
                    successfully hired graduates in the software industry.
                </p>
            </div>
        </div>
           
    <div className="success-rate">
     <a href="https://imgbb.com/">
         <img src="https://i.ibb.co/VQdQHXF/Screenshot-2020-02-20-at-11-38-00.png" alt="Screenshot-2020-02-20-at-11-38-00" border="0"/>
         </a>
     </div>
        </div>
    );
}

export default InfoSection;
