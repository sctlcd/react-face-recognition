import React from 'react';
import Tilt from 'react-parallax-tilt';
import './logo.css';

export default function Logo() {
  return (
    <div className='ma4 mt0'>
      <Tilt>
        <div className='logo'>
          <h1>React Parallax Tilt 👀</h1>
        </div>
      </Tilt>
    </div>
  )
}
