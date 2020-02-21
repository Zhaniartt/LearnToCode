import React from 'react'
import './StudentInfo.css'

function QuoteBox(props) {
    return (
        <div>
               <div className="quote-box">
            <div className="descript-sect">
                <p className="the-quote">
                    {props.quote}
                </p>
            </div>
        
        </div>
        <div className="quote-info-bottom">
        <div className="photo-student" style={{width:"100px"}}>
                <img src={props.image} style={{borderRadius:"50%" , width:"100px", height:"100px"}}></img>
            </div>
            <div className="student-name" >
                <p>{props.name}</p>
            </div>
        </div>
        </div>
     
        
    )
}

export default QuoteBox
