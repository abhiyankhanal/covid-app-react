import React, { Component } from 'react'
// import About from './About';
import PropTypes from "prop-types";
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
        <button onClick={this.handleOnClick}>Covid-19 Data </button>
        <div>Population Data</div>
        <div >About-Team-Mars</div>
        
      </div>
    )
  }
}

export default Menu