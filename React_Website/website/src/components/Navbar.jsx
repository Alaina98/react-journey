import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

export default class Navbar extends Component {
  render() {
    return (
        <>
        <div class="header">
        
        <nav class="navbar">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">SERVICES</a>
                <a href="Experience.html">PRICING</a>
                <a href="Projects.html">NEWS</a>
                <button  className='btn btn-success'>Concat</button>
        </nav>
    </div>
    </>
    )
  }
}
