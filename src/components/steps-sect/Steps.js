import React from 'react'

import './Steps.css'
import StepBox from './StepBox'


export default function Steps() {
    return (
        <div>
            <div className="box-wrapper">
                <div className="box-section">

                  <StepBox title={"APPLY AND START LEARNING"} description={"Free two-month entry course"} color={"#3e4c5d"} height={"200px"}/>
                  <StepBox title={"ENTRY EXAM"} description={"Pass the exam and enroll in the software engineering program"} color={"#fc4a4f"} height={"250px"}/>
                  <StepBox title={"BUILD THE FOUNDATION"} description={"Acquire fundamental set of skills and  knowledge"} footer={"Fundamentals Module - 4 months"} color={"#9c5cc7"} height={"300px"}/>
                  <StepBox title={"ACQUIRE PROFESSION"} description={"C# Web Dev Java Web Dev JavaScript Web Dev Python Web Dev"} footer={"Professional Modules 8-16 months"} color={"#ffa100"} height={"350px"}/>
                  <StepBox title={"START A CAREER"} description={"Access our career center,receive career support and start your dream job"} color={"#1ec05d"} height={"400px"}/>
                  <StepBox title={"GRADUATION"} description={"Receive a diploma recognized by the industry industry and issued by SoftUni"} color={"#42abf8"} height={"450px"}/>
                  
                </div>
            </div>
        </div>
    )
}
