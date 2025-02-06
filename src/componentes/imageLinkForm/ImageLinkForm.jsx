import React from 'react';
import './imageLinkForm.css';

export default function ImageLinkForm() {
  return (
    <>
      <div>
        <p className='f3 washed-blue mb5'>
          {'React Face Regognition detects faces in your pictures. Give it a try!'}
        </p>
      </div>
      <div className='center'>
        <div className='form pa4 br4 shadow-3'>
          <input className='f4 pa2 w-80 bg-washed-blue b--washed-blue br3' type='text' />
          <button className='w-40 grow f4 link ph3 pv2 mt3 dib white bg-purple b--purple br3'>Detect</button>
        </div>
      </div>
      
    </>
  )
}