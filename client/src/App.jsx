import React, { useState } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import NetworkCellIcon from '@mui/icons-material/NetworkCell';
import LtePlusMobiledataIcon from '@mui/icons-material/LtePlusMobiledata';
import PhoneIcon from '@mui/icons-material/Phone';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MessageIcon from '@mui/icons-material/Message';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';

import './App.scss';

function App() {
  const [draw, setDraw] = useState(true);
  const [cam,setCam] = useState(false);
  const date = new Date();
  const clickHandler = () => {
    if (draw) {
      document.getElementById("ad").style.transform = "translate(0,0%)";
      setDraw(!draw);
      return;
    }
    document.getElementById("ad").style.transform = "translate(0,100%)";
    setDraw(!draw);
    return;
  }
  const cameraHandler = () => {
    setCam(true);
    document.getElementById("app-bar").style.display = "none";
  }
  return (
    <main>
      <div className="body">
        <div className="top"></div>
        <div className="screen">
          <div className="notification">
            <div className="time">{date.toLocaleTimeString().split(" ")[0]}</div>
            <div className="bat-per">
              <LtePlusMobiledataIcon sx={{ fontSize: "1rem" }} />
              <NetworkCellIcon sx={{ fontSize: "1rem" }} />
              <NetworkCellIcon sx={{ fontSize: "1rem" }} />
              100% <BatteryFullIcon sx={{ fontSize: "1rem" }} />
            </div>
          </div>
          <div className="window">
            { !cam && <AppDraw />}
            { cam && <Camera />}
          </div>
          <div className="app-bar" id="app-bar">
            <PhoneIcon sx={{ fontSize: "2.5rem" }} />
            <PermContactCalendarIcon sx={{ fontSize: "2.5rem" }} />
            <span onClick={clickHandler}>
              <AppsIcon sx={{ fontSize: "2.5rem" }} />
            </span>
            <MessageIcon sx={{ fontSize: "2.5rem" }} />
            <span onClick={cameraHandler}>
              <CameraAltIcon sx={{ fontSize: "2.5rem" }} />
            </span>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </main>
  );
}

export default App;


const AppDraw = () => {

  return (
    <div className="app-draw" id="ad">
      <div className="recent">
        <WhatsAppIcon sx={{ fontSize: "3rem" }} />
        <InstagramIcon sx={{ fontSize: "3rem" }} />
        <FacebookIcon sx={{ fontSize: "3rem" }} />
        <LinkedInIcon sx={{ fontSize: "3rem" }} />
      </div>
    </div>
  );
}

const Camera = () => {
  return (
    <div className="camera">
      <div className="opt"></div>
      <div className="mid"></div>
      <div className="bttm">
        <div className="switch"></div>
        <div className="shutter-c">
          <div className="gal pa"></div>
          <div className="shutter pa">
            <button></button>
          </div>
          <div className="c-switch pa"></div>
        </div>
      </div>
    </div>
  );
}