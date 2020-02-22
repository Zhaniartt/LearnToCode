import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import InfoSection from './components/info-section/InfoSection'
import InfoSection2 from './components/info-section/InfoSection2'
import CareerSection from './components/career-sect/CarreerSection'
import Steps from './components/steps-sect/Steps'
import StudentInfo from './components/student-info/StudentInfo'
import AwardCarousel from './components/award-sect/AwardCarousel'
import SoftwareProgram from './components/software-program/SoftwareProgram'
function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Header/>
      </header>

      <InfoSection/>
      <Steps/>
      <InfoSection2/>
      <CareerSection/>
      <StudentInfo/>
      <AwardCarousel/>
      <SoftwareProgram/>
    </div>
  );
}

export default App;
