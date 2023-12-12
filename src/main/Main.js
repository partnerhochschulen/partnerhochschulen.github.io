import React, { useState } from 'react';
import './Main.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
// import { Map } from 'react-map-gl';
// import maplibregl from 'maplibre-gl';
// import { NavigationControl } from 'react-map-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
// import {mapStyle} from '../misc/const';
import * as texts from '../misc/texts';
import MapComponent from '../map/MapComponent';
import Instructions from '../instructions/Instructions';
import { Dialog } from '@mui/material';
function Main() {
  const navigate = useNavigate();
  const [openInstructions, setOpenInstructions] = useState(false);
  return (
    
    <div className="Main">
      <div id="map-container">
        <div className='big-map'>
          <MapComponent />
        </div>
        <div className ="buttons">
          <Button 
            variant ="contained"
            style={{
              margin: "10px",
            }}
            onClick={()=>{
              if(localStorage.instructionsRead === 'true'){
                navigate('/play', { state: { key: Math.random() } })
              }
              else{
                setOpenInstructions(true);
              }
            }}
          >
            {texts.start_play}
          </Button>
          <Button 
            variant ="contained"
            style={{
              margin: "10px",
            }}
            onClick={()=>{
              navigate('/show-schools')
            }}
          >{texts.show_partnerschools}</Button>
        </div>
      </div>
      <Dialog open={openInstructions}>
        <Instructions
          close={()=>setOpenInstructions(false)}
          inGame={true} />
      </Dialog>
    </div>
  );
}

export default Main;
