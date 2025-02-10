import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import Face from './face-recognition.png';

export default function Logo() {
  return (
    <div className='ma4 mt0'>
      <Tilt>
        <div className='logo'>
          <img src={Face} alt='logo'/>
        </div>
      </Tilt>
    </div>
  )
}
