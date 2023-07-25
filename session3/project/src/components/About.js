import React, { Component } from 'react'

export default class About extends Component {
  constructor(){
    super()
    this.state={
      name:"Alaina",
      age:24,
      city:"Bahla"
    }
  }
  render() {
    return (
      <>
      <h1>My Name is:{this.state.name} </h1>
      </>
    )
  }
}

