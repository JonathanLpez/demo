import * as React from 'react';

import '../styles/btn.css'

export default function BasicButtons(ejecutar) {

  return (
 
      <button onClick={ejecutar.onClick} variant="contained" className='btn'>Ver inactivos </button>
    
  );
}