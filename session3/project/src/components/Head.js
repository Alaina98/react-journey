import React, { Component } from 'react'

export default class Head extends Component {
    constructor(){
        super()
        this.state={
            color:"Brown"
        }
    }
  render() {
    return (
      <div>My Favourite Color is : {this.state.color}</div>
    )
  }
}
