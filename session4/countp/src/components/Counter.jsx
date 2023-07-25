import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
  render() {
    return (
      <>
      <h1>count is:{this.state.count}</h1>
      <button onClick={this.increment}>increment</button>
      <button onClick={this.decrement}>decrement</button>
      </>
    )
  }
  increment=()=>{
    this.setState({'count':++this.state.count})
  }
  decrement=()=>{
    this.setState({'count':--this.state.count})
  }
}
