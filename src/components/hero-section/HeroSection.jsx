import React from 'react';
import { Button } from '../button/Button';
import video2 from '../../assets/meta3.mp4';

import './HeroSection.styles.css'
import '../../App.css';

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <video src={video2} autoPlay loop muted />
        {/*<h1>WELCOME TO META</h1>*/}
        <p>Facing any trouble? Dive into the TATA Metaverse to get your queries solved. </p>
        <div className='hero-btns'>
            <Button 
                className='btns' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
            >
                LET'S BEGIN
            </Button>
            <Button 
                className='btns' 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'
            >
                DEMO VIDEO <i className='far fa-play-circle' /> 
            </Button>
        </div>
    </div>
  )
}

export default HeroSection;