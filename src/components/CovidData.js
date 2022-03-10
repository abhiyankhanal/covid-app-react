import React, { Component } from 'react'
import "./CovidData.css";
export class CovidData extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            searchValue: "",
            responseData: {"updated":1646920710267,"country":"Nepal","countryInfo":{"_id":524,"iso2":"NP","iso3":"NPL","lat":28,"long":84,"flag":"https://disease.sh/assets/img/flags/np.png"},"cases":977786,"todayCases":77,"deaths":11949,"todayDeaths":0,"recovered":960497,"todayRecovered":429,"active":5340,"critical":100,"casesPerOneMillion":32573,"deathsPerOneMillion":398,"tests":5469595,"testsPerOneMillion":182210,"population":30018025,"continent":"Asia","oneCasePerPeople":31,"oneDeathPerPeople":2512,"oneTestPerPeople":5,"activePerOneMillion":177.89,"recoveredPerOneMillion":31997.34,"criticalPerOneMillion":3.33},

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
         this.setState({responseData: data} );
        } catch (error) {
          alert("The search query must be a valid country.. Please try again");
          
        }
        }
    // getCovidData(){
        
    // }
  render() {
    return (
        <>
        
        
        <div className='title'> COVID DATA OF {this.state.responseData.country}</div>
        <div className='search'>
            <input type = 'search' placeholder='search..' className='searchTerm' autoFocus id = 'search' value = {this.state.searchValue} onChange={(e)=>this.setSearchValue(e.target.value)}/>
            <button className='searchButton' type='button' onClick={this.getCovidData}>Search</button>
       
        </div>
      <div className='covidwrap'>
         <div>Cases <br/> {this.state.responseData.cases}</div>
         <div>Cases Today<br/> {this.state.responseData.todayCases}</div>
         <div>Total Deaths  <br/> {this.state.responseData.deaths}</div>

         <div>Deaths Today <br/> {this.state.responseData.todayDeaths}</div>

         <div>Active Cases  <br/> {this.state.responseData.active}</div>
         <div>Population <br/> {this.state.responseData.population}</div>

         
      </div>
        </>
        
    )
  }
}

export default CovidData