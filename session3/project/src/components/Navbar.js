import React, { Component } from 'react'

export default class Navbar extends Component {
 
    constructor(){
        super()
        this.state={
            name:"Alaina",
            age:24
        }
    }
  render() {
    return (
      <>
      <h1>My Name is :{this.state.name}</h1>
      <h2>My Old is:{this.state.age}</h2>
      </>
    )
  }
}
