import React from 'react'
import CV from '../../assets/CV.pdf' 

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'> My CV </a>
        <a href="#contact" className='btn btn-primary'>Reach me out</a>

    </div>
  )
}

export default CTA