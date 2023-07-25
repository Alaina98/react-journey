import React, { Component } from 'react'
import './style.css'
import img from '../h-about.jpg.webp'
export default class Person extends Component {
  render() {
    return (
      <>
        <div className='person'>
            <img src={img} />
            <div className='person-social'></div>
            <div className='person-info'>Emma Sandoval <br></br>Speaker</div>
        </div>
        <div className='person'>
            <img src={img} />
            <div className='person-social'></div>
            <div className='person-info'>Emma Sandoval <br></br>Speaker</div>
        </div>
      </>
    )
  }
}
