import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div>
        <h1>Your Name is:{this.props.name}</h1>
        <h2>Your Age is:{this.props.age}</h2>
      </div>
    )
  }
}
