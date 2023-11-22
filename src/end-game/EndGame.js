import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { number_of_rounds } from '../misc/const';
import { useEndResult } from '../misc/EndResultContex';
import * as texts from '../misc/texts';
import './EndGame.css';

function EndGame(){
    const navigate = useNavigate();
    const { endResultForEndGame } = useEndResult();
    return (
       <div className='end-game'>
            <div className='end-game-content'>
                <h2>{texts.end_game_h2}</h2>
                <h3>{texts.end_game_h3}</h3>
                <p>{texts.end_game_p1} {number_of_rounds} {texts.end_game_p2} {endResultForEndGame} {texts.end_game_p3}</p>
                <Button  variant ="contained"
                style ={{
                    position: "relative",
                    margin: "10px",
                    width: "fit-content",
                }}
                onClick={()=>{
                    navigate('/play',  { state: { refresh: true } });
                  }}>
                    {texts.play_again}
                </Button>
                <Button  variant ="outlined" color="secondary"
                style ={{
                    position: "relative",
                    margin: "10px",
                    width: "fit-content",
                }}
                onClick={()=>{
                    navigate('/')
                  }}>
                    <ArrowBack />
                    {texts.back_to_main}
                </Button>
            </div>
       </div>
    )
}
export default EndGame;