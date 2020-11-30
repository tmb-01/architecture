import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./pages/Navbar";
import Header from "./pages/Header";
import Steps from "./pages/Steps";
import AboutUs from "./pages/AboutUs";
import OurVision from "./pages/OurVision";
import DreamHome from "./pages/DreamHome";
import Team from "./pages/Team";
import AboutOurCompany from "./pages/AboutOurCompany";
import GetInTouch from "./pages/GetInTouch";

function App() {
  return (
      <div>
        <Navbar/>
        <Header/>
        <Steps/>
        <AboutUs/>
        <OurVision/>
        <DreamHome/>
        <Team/>
        <AboutOurCompany/>
        <GetInTouch/>
      </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
