import React from 'react';
import './SoftwareProgram.css'

const SoftwareProgram = () => {
    return (
        <div className="software-program-wrapper">
            <div className="bg">
                
            </div>
            <div>
                <h4 style={{color:"white"}}>Explore our Software Engineering Program</h4>                
            </div>
            <div>
                <p style={{color:"white"}}>
                    Start with a free Programming Basic training, begin your career in the IT sector and graduate as a full stack developer
                </p>
            </div>
            <div className="header-section-buttons">
                    <div className="secondary-button"><button>APPLY</button></div>
                    <span style={{color:"white"}} className="breakLine">|</span>
                    <div className="secondary-button"><button>CURRICULUM</button></div>
                </div>
        </div>
    );
}

export default SoftwareProgram;
