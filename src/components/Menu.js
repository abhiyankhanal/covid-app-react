import React, { Component } from 'react'

import {Link} from 'react-router-dom';
import "./Menu.css";
export class Menu extends Component {
  render() {
   
  
    return (
      <div className="wrap">
        <Link className="my-div" to="/" >CovidData</Link>
        <Link className="my-div" to="/population" >Population</Link>
        <Link className="my-div" to="/about" >About Team Mars</Link>
      </div>
    )
  }
}
export default Menu