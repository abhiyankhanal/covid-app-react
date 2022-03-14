import React, { Component } from 'react'
// import About from './About';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import "./Menu.css";
export class Menu extends Component {
  render() {
    const { match, location, history } = this.props;
    console.log(`history is ${history}`)
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