import React from 'react';
import './Steps.css'


const StepBox = (props) => {
    return (
        <div className="box-item1" style={{height:props.height}}>
        <header style={{backgroundColor:"white", borderRadius:"7px 7px 0px 0px" }} className="header-sect" >
          <p >
              {props.title}
          </p>
          </header>  
          <div className="description-sect" style={{backgroundColor:props.color ,borderRadius:"0px 0px 7px 7px" }}>
              <p style={{color:"white" }}>
                  {props.description}
              </p>
          </div>
          {
              props.footer ? (<div className="footer-sect" style={{backgroundColor:props.color , filter:"brightness(85%)", borderRadius:"0px 0px 7px 7px" , color:"white", borderTop:"3px solid white" }}><p>{props.footer}</p></div>) : null
          }
      </div>
    );
}

export default StepBox;
