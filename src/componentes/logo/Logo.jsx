import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import Face from './face-recognition.png';

export default function Logo() {
  return (
    <div className='ma4 mt0'>
      <Tilt
        className="background-stripes parallax-effect-glare-scale"
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
      >
        <div className='logo'>
          <img src={Face} alt='logo'/>
        </div>
      </Tilt>
    </div>
  )
}
