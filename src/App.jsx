import { useState } from 'react'
import './App.css'
import SpeedDial from './components/SpeedDial'
import Signature from './images/signature.png'
import Photo from './images/ovalPhotoEdited.png'
import Flowers from './images/flowers.png'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <link href="https://fonts.cdnfonts.com/css/cute" rel="stylesheet"></link>
      <link href="https://fonts.cdnfonts.com/css/preahvihear" rel="stylesheet"></link>
                

      <div className="containers">
          <img className="photo" src={Photo} alt="Photo"></img>

          <div className="title">
            <img className="signature" src={Signature} alt="signature"></img>
            <h1 className="label">PORTFOLIO</h1>
          </div>

          <h1 className="scrollDown">scroll to see my work</h1>
          <div className="scroll">
            <KeyboardDoubleArrowDownIcon style={{ fill: '#3d3c3c'}}></KeyboardDoubleArrowDownIcon>
          </div>

         
          <div className="cloud">
            <img className="flowers" src={Flowers} alt="flowers"></img>
            <h1 className="cloudTitle">Hi! I'm Dana :)</h1>
            <p className="cloudText">
              I was born in Toronto and grew up in the Philippines.
              I'm an incoming third-year student at the University of British Columbia and I'm pursuing a Bachelor of Arts with a Cognitive Systems: Cognition and Brain major.
              I am eager to continue working with the Music Technology instructors to hone my 
              skills in programming and composition in the AMT minor.
              <br></br>
              <br></br>
              Thank you for taking the time to look at my portfolio!
              <br></br>
              <br></br>
              Hope you like it!
            </p>
          </div>


          <div className="projects">
            <h1 className="projectsTitle">~ PROJECTS ~</h1>
            <div className="blue">
            <a href="./files/Blue.zip" class="download"><i class="download"></i> <b>Download Blue</b></a>
            </div>


          </div>

          <div className="speedDial">
            <SpeedDial></SpeedDial>
          </div>
        </div>
    </div>
  )
}

export default App
