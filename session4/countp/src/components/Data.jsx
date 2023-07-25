import React, { Component } from 'react'

export class Data extends Component {
    constructor(){
        super()
        this.state={
            
            animals:['Lion','Cow','Monkey']
        }
    }
  render() {
    return (
      <>
        <ul>
            {this.state.animals.map((a)=> <li>{a}</li>)}
        </ul>
        
        <ol>
            {this.state.animals.map((c)=> <li>{c}</li>)}
        </ol>
        
      </>
    )
  }
}

export default Data