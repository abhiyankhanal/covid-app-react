import React, { Component } from 'react'
import "./CovidData.css";
export class CovidData extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            searchValue: "",

        }

    }
    setSearchValue = (e) => {
        this.setState({searchValue: e} );
        
      }
    getCovidData = async() =>{
        
        try {
          let url = `https://disease.sh/v3/covid-19/countries/${this.state.searchValue}?strict=true`;
          const res = await fetch(url);
         let data = await res.json();
         console.log(data);
        } catch (error) {
          alert("The search query must be a valid country.. Please try again");
          
        }
        }
    // getCovidData(){
        
    // }
  render() {
    return (
        <>
        
        
        <div className='title'> COVID DATA</div>
        <div className='search'>
            <input type = 'search' placeholder='search..' className='searchTerm' autoFocus id = 'search' value = {this.state.searchValue} onChange={(e)=>this.setSearchValue(e.target.value)}/>
            <button className='searchButton' type='button' onClick={this.getCovidData}>Search</button>
       
        </div>
      <div className='covidwrap'>
         <div>CovidData</div>
         <div>CovidData</div>
         <div>CovidData</div>
         <div>CovidData</div>
         <div>CovidData</div>
         <div>CovidData</div>
         
      </div>
        </>
        
    )
  }
}

export default CovidData