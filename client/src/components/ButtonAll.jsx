import '../styles/btn.css'

import React from 'react'

function ButtonAll(ejecutar) {
  return (
    <button onClick={ejecutar.onClick} variant="contained" className='btn'>Ver todos </button>
  )
}

export default ButtonAll

