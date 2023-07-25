import React, { Component } from 'react'
import './style.css'
export default class Person extends Component {
  render() {
    return (
      <>
      <div className='box'>
        <img src={this.props.img} />
        <div className='circle'>
          <h1>WWW</h1>
        </div>

      </div>
      </>
    )
  }
}
