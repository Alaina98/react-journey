import React, { Component } from 'react'
import Person from './Person'
import img1 from '../person_7.jpg.webp'

export default class Home extends Component {
  render() {
    return (
      <>
          <Person img={img1}/>
   
      </>
    )
  }
}
