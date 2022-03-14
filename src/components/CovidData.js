import React, { Component } from 'react'

import "./CovidData.css";
export class CovidData extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
     
      searchValue: "nepal",
      responseData: { "updated": 1646920710267, "country": "Nepal", "countryInfo": { "_id": 524, "iso2": "NP", "iso3": "NPL", "lat": 28, "long": 84, "flag": "https://disease.sh/assets/img/flags/np.png" }, "cases": 977786, "todayCases": 77, "deaths": 11949, "todayDeaths": 0, "recovered": 960497, "todayRecovered": 429, "active": 5340, "critical": 100, "casesPerOneMillion": 32573, "deathsPerOneMillion": 398, "tests": 5469595, "testsPerOneMillion": 182210, "population": 30018025, "continent": "Asia", "oneCasePerPeople": 31, "oneDeathPerPeople": 2512, "oneTestPerPeople": 5, "activePerOneMillion": 177.89, "recoveredPerOneMillion": 31997.34, "criticalPerOneMillion": 3.33 },
    }
  
  }
  // setSearchValue = (e) => {
  //   this.setState({ searchValue: e });
  // }
  handleChange = (e) => {
   
    this.setState({searchValue: e})
  }

  handleSubmit=(e)=> {
  
    // this.setState({ e: this.state.searchValue});
    console.log(this.state.searchValue);
    
    
    
  }
  getCovidData = async (country) => {
    country = this.searchValue;
    try {
      let url = `https://disease.sh/v3/covid-19/countries/${country}?strict=true`;
      const res = await fetch(url);
      let data = await res.json();
      this.setState({ responseData: data });
    } catch (error) {
      alert("The search query must be a valid country.. Please try again");
    }
  }


  // getCovidData(){
  // }
  render() {
    var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    const {
      cases,
      todayCases,
      deaths,
      todayDeaths,
      active,
      population,
      country,
      updated,
    } = this.state.responseData
    
   
    return (
      <>
 
  
        <div className='title'> Covid Data of {country} <br /> Updated: {new Date(updated).toLocaleString()}</div>
       
        {/* <div className='search'>
          <input type='search' placeholder='search..' className='searchTerm' autoFocus id='search' value={this.state.searchValue} onChange={(e) => this.setSearchValue(e.target.value)} />
          <button className='searchButton' type='button' onClick={this.getCovidData}>Search</button>
        </div> */}

        <form onSubmit={() => this.handleSubmit()}>
        <label>
          Pick the country:
          <select value={this.state.searchValue} onChange={(e) => this.handleSubmit(e.target.value)}>
        
          {country_list.map((e)=>  <option value = {e} key = {e}>{e}</option> )}
            
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
        <div className='covidwrap'>
          <div className="covidbox">Cases <br /> {cases}</div>
          <div className="covidbox">Cases Today<br /> {todayCases}</div>
          <div className="covidbox">Total Deaths  <br /> {deaths}</div>

          <div className="covidbox">Deaths Today <br /> {todayDeaths}</div>

          <div className="covidbox">Active Cases  <br /> {active}</div>
          <div className="covidbox">Population <br /> {population}</div>
        </div>
      </>
    )
  }
}
export default CovidData 