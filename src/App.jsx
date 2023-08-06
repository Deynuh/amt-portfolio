import { useState } from 'react'
import './App.css'
import SpeedDial from './components/SpeedDial'
import Signature from './media/signature.png'
import Photo from './media/ovalPhotoEdited.png'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import BlueDemo from './media/blueDemo.mp4'
import Song from './media/song.mp3'
import LitCalcImg from './media/litCalc.png'
import WhatsCookin from './media/whatsCookin.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link href="https://fonts.cdnfonts.com/css/cute" rel="stylesheet"></link>
      <link href="https://fonts.cdnfonts.com/css/preahvihear" rel="stylesheet"></link>
                
      <div className="containers">
        

          <div className="title">
            <img className="signature" src={Signature} alt="signature"></img>
            <h1 className="label">PORTFOLIO</h1>
          </div>

          <img className="photo" src={Photo} alt="Photo"></img>

          
          <h1 className="scrollDown">scroll to see my work</h1>
          <div className="scroll">
            <KeyboardDoubleArrowDownIcon style={{ fill: '#3d3c3c'}}></KeyboardDoubleArrowDownIcon>
          </div>


          <div className="projects">
            <div className="blue">
              <h1>"Blue"</h1>
              <p class="projDesc">An audio-reactive mesh created using MaxMSP. The culmination of hours of research and learning in MUSC320!</p>
              <video className="blueVideo" src={BlueDemo} playsinline muted loop autoplay controls></video>
              <a href="./media/Blue.zip" className="downloadBlue"><b>Download Blue</b></a>
            </div>
            
            <div className="song">
              <h1>"I Kinda Wrote a Song About You"</h1>
              <p class="projDesc">A song I wrote in the Summer of 2022! I have been writing songs on and off for years, and this was the second one I decided to share with people.</p>
              <audio className="firstSong" src={Song} controls></audio>
            </div>
            
            <div className="litCalc">
              <h1>"Litigation Checklist Calculator"</h1>
              <p class="projDesc">A website application project I completed for my mom to use in her work as a law clerk and paralegal for Harris & Company LLP. </p>
              <img className="litCalcImg" src={LitCalcImg} alt="litCalcImg"></img>
              <a href="https://deynuh.github.io/Litigation-Checklist-Calculator/"><b>Link to Website</b></a>
            </div>

            <div className="javaApp">
              <h1>"What's Cookin?"</h1>
              <p class="projDesc">A Java application that helps indecisive users decide what to eat! Created in CPSC 210</p>
              <img className="whatsCookin" src={WhatsCookin} alt="whatsCookin"></img>
              <a href="https://github.com/Deynuh/WhatsCookin"><b>Github Link</b></a>
            </div>
          </div>


          <div id="about" className="cloud">
            <h1 className="cloudTitle">Hi! I'm Dana :)</h1>
            <p className="cloudText">
              I was born in Toronto and grew up in the Philippines.
              I'm an incoming third-year student at the University of British Columbia and I'm pursuing a Bachelor of Arts with a Cognitive Systems: Cognition and Brain major.
              I am eager to continue working with the Applied Music Technology instructors to hone my skills in programming and composition in the AMT minor.
              <br></br>
              <br></br>
              Thank you for taking the time to look at my portfolio!
              <br></br>
              <br></br>
              Hope you liked it!
            </p>
          </div>
        </div>

    </div>
  )
}

export default App
