import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import InfoSection from './components/info-section/InfoSection'
import InfoSection2 from './components/info-section/InfoSection2'
import CareerSection from './components/career-sect/CarreerSection'
function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Header/>
      </header>

      <InfoSection/>
      <InfoSection2/>
      <CareerSection/>
    </div>
  );
}

export default App;
