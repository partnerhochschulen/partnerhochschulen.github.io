import React from 'react';
import Button from '@mui/material/Button';
import './Instructions.css';
import { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import * as texts from '../misc/texts';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


function Instructions({close, inGame}){
    const [curr, setCurr] = useState(1);
    const pages = [texts.instructions, texts.points];
    const navigate = useNavigate();
    const closeInstructions = () => {
      close();
      localStorage.setItem('instructionsRead', 'true');
    };
    const goToNext = () => {
      setCurr(curr + 1);
    };
    const goToPrev = () => {
      setCurr(curr - 1);
    };

    return <div className="instructions-container">

      <div className="instructions">
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              <span>{pages[curr-1][0]}</span>
          </DialogTitle>
          <IconButton
                  color="inherit"
                  onClick={closeInstructions}
                  aria-label="close"
                  sx={{
                    position: 'absolute',
                    right: 10,
                    top: 10,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <DialogContentText className ="instruction-text">
              <span dangerouslySetInnerHTML={{ __html: pages[curr-1][1] }} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
            variant='contained'
            style = {{
              visibility: inGame === true ? 'visible' : 'hidden'
            }}
            onClick={()=>
            {navigate('/play');
            localStorage.setItem('instructionsRead', 'true');
            close();}}>Los geht's</Button>
            {curr < pages.length ? (
              <div>
                <Button onClick={goToNext}>{texts.next_page}</Button>
              </div>
              
            ):(
              <div>
                <Button onClick={goToPrev}>{texts.prev_page}</Button>
              </div>
            )}
        </DialogActions>
      </div>
    </div>
}
export default Instructions;