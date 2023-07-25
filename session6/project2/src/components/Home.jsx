import React, { Component } from 'react'
import Person from './Person'
import img1 from '../h-about.jpg.webp'
export default class Home extends Component {
  render() {
    return (
        <>
        <Person img={img1}/>
        <Person img={img1}/>
 
    </>
    )
  }
}
