import React from 'react';
import Button from '@mui/material/Button';
import './Instructions.css';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import * as texts from '../misc/texts';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

function Instructions({close, inGame}){
    const navigate = useNavigate();
    
    const handlePlay = () => {
        navigate('/play');
        localStorage.setItem('instructionsRead', 'true');
      close();
    };

    return (
        <div className="instructions-container">
      <div className="instructions">
                <DialogTitle sx={{ m: 0, p: 2 }}>
                    <span>Über die App &nbsp; &nbsp; | &nbsp; &nbsp; {texts.instructions_howto[0]}</span>
          </DialogTitle>
                
          <IconButton
                    onClick={close}
                  sx={{
                    position: 'absolute',
                    right: 10,
                        top: 10
                  }}
                >
            <CloseIcon />
          </IconButton>
                
          <DialogContent dividers>
                    <div className="instructions-flex-row">
                        <DialogContentText className="instruction-text">
                            <span dangerouslySetInnerHTML={{ __html: texts.instructions_app[1] }} />
                        </DialogContentText>
                        <DialogContentText className="instruction-text">
                            <span dangerouslySetInnerHTML={{ __html: texts.instructions_howto[1] }} />
            </DialogContentText>
                    </div>
          </DialogContent>
                
          <DialogActions>
            <Button
                        variant="contained"
                        style={{ visibility: inGame ? 'visible' : 'hidden' }}
                        onClick={handlePlay}
                    >
                        Los geht's
                    </Button>
        </DialogActions>
      </div>
    </div>
    );
}

export default Instructions;