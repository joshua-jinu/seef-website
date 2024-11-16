import React from 'react'
import illustration from '../assets/illustration.jpg'

function hero() {
  return (
    <div className='homehero'>
      <div className='overlay'>
        <div className="overlay-text">
          <h2>Sustainable Environment Educational Foundation</h2>
          <br />
          <h1>Lead.</h1>
          <br />
          <h1>Connect.</h1>
          <br />
          <h1>Learn.</h1>
        </div>
      </div>
      <img src={illustration} alt="" />
    </div>
  )
}

export default hero
