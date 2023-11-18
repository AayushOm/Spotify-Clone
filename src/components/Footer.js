import React from 'react'
import "./Footer.css"
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid,Slider } from '@mui/material';
function Footer() {
  return (
    <div className='footer'>
      <div className="footer__left">
        <img 
        className='albumlogo'
        src="https://static.vecteezy.com/system/resources/previews/000/077/385/non_2x/vector-vinyl-record-graphics.jpg" 
        alt="image" />
        <div className="songinfo">
          <h4>Bhole</h4>
          <p>Hansraj</p>
        </div>
        
      </div>

      <div className="footer__center">
        <ShuffleIcon className='footer__green'/>
        <SkipPreviousIcon className='footer__icon'/>
        <PlayCircleOutlineIcon fontSize="large" className='footer__icon'/>
        <SkipNextIcon className='footer__icon'/>
        <RepeatIcon className='footer__green'/>
      </div>

      <div className="footer__right">
      <Grid container spacing={2}>
        <Grid item> 
          <PlaylistPlayIcon/>
        </Grid>
        <Grid item>
          <VolumeDownIcon/>
        </Grid>
        <Grid item xs>
          <Slider/>
        </Grid>
      </Grid>
      </div>
    </div>
  )
}

export default Footer
