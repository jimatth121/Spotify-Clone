import React from 'react';
import './Footer.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
// import {Grid, Slider} from '@mui/icons-material';

import { Slider } from '@mui/material';
import { Grid } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';




const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__left'>
       <img 
      className='footer__albumlogo' src='https://static.stereogum.com/uploads/2022/12/Usher-and-Alicia-Keys-My-Boo-1670867563.jpg' alt='song'/>
       <div className='footer__songInfo'>
        <h4>Yeah!</h4>
        <p>Usher</p>
       </div>
      </div>
      <div className='footer__center'>
        <ShuffleIcon className='footer__green'/>
        <SkipPreviousIcon className='footer__icon'/>
        <PlayCircleIcon fontSize='large'className='footer__icon' />
        <SkipNextIcon className='footer__icon ' />
        <RepeatIcon className='footer__green'/>

      </div>
      <div className='footer__right'>
    <Grid className='footer__right--container' container spacing={2}>
<Grid item>
  <PlaylistPlayIcon/>
</Grid>
<Grid item>
  <VolumeDownIcon/>
</Grid>
<Grid item xs>
  <Slider />
</Grid>


    </Grid>
      </div>


    </div>
  )
}

export default Footer
