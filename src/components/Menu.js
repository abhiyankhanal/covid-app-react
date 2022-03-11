import React, { Component } from 'react'
// import About from './About';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import "./Menu.css";

export class Menu extends Component {
  

 PropTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  handleOnClick(){
    console.log("clicked")
  }
  render() {
    const { match, location, history } = this.props;
    console.log(`history is ${history}`)

    return (
      <div className="wrap">
        <Link className="my-div" to="/" >CovidData</Link>
        {/* <button onClick={this.handleOnClick}>Covid-19 Data </button> */}
        <Link className="my-div" to="/population" >Population</Link>
        <Link className="my-div" to="/about" >About Team Mars</Link>
        
        
      </div>
    )
  }
}

export default Menu