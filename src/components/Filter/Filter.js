import React, {useState} from 'react';
import './Filter.css';
import Container from 'react-bootstrap/Container';

function Filter() {

  const filterByName = require("../../data/country-by-name.json");
  const filterByAbbr = require("../../data/country-by-abbreviation.json");
  const filterByAlpha = require("../../data/country-by-alphabet-letters.json");
  const filterByHeight = require("../../data/country-by-avg-male-height.json");
  const filterByBarcode = require("../../data/country-by-barcode-prefix.json");
  const filterByCalling = require("../../data/country-by-calling-code.json");
  const filterByCapital = require("../../data/country-by-capital-city.json");
  const filterByContinent = require("../../data/country-by-continent.json");
  const filterByCostline = require("../../data/country-by-costline.json");
  const filterByCurrencyName = require("../../data/country-by-currency-name.json");
  const filterByReligion = require("../../data/country-by-religion.json");
  const filterByCurrencyCode = require("../../data/country-by-currency-code.json");
  const filterByDomain = require("../../data/country-by-domain-tld.json");
  const filterByElevation = require("../../data/country-by-elevation.json");
  const filterByGovernment = require("../../data/country-by-government-type.json");
  const filterByIndependence = require("../../data/country-by-independence-date.json");
  const filterByIso = require("../../data/country-by-iso-numeric.json");
  const filterByLandlocked = require("../../data/country-by-landlocked.json");
  const filterByLife = require("../../data/country-by-life-expectancy.json");
  const filterByNational = require("../../data/country-by-national-symbol.json");
  const filterByDish = require("../../data/country-by-national-dish.json");
  const filterByDensity = require("../../data/country-by-population-density.json");
  const filterByPopulation = require("../../data/country-by-population.json");
  const filterByRegion = require("../../data/country-by-region-in-world.json");
  const filterBySurface = require("../../data/country-by-surface-area.json");
  const filterByTemperature = require("../../data/country-by-yearly-average-temperature.json");

  const getUniqueArray = (array) => {
    let uniqueArray = [];
    
    for(let i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
  }

  let Array1 = []
  for (let i = 0; i<filterByName.length; i++){
    if(filterByName[i].country){
      Array1.push(filterByName[i].country);
    }
  }
  let uniqueArray1 = getUniqueArray(Array1);
  
  let Array2 = []
  for (let i = 0; i<filterByAbbr.length; i++){
    if(filterByAbbr[i].abbreviation) {
      Array2.push(filterByAbbr[i].abbreviation);
    }        
  }
  let uniqueArray2 = getUniqueArray(Array2);

  let Array3 = []
  for (let i = 0; i<Object.keys(filterByAlpha[0]).length; i++){
    if(Object.keys(filterByAlpha[0])[i]) {
      Array3.push(Object.keys(filterByAlpha[0])[i]);
    }        
  }
  let uniqueArray3 = getUniqueArray(Array3);

  let Array4 = []
  for (let i = 0; i<filterByHeight.length; i++){
    if(filterByHeight[i].height) {
      Array4.push(filterByHeight[i].height);
    }        
  }
  let uniqueArray4 = getUniqueArray(Array4);

  let Array5 = []
  for (let i = 0; i<filterByBarcode.length; i++){
    if(filterByBarcode[i].barcode) {
      Array5.push(filterByBarcode[i].barcode);
    }        
  }
  let uniqueArray5 = getUniqueArray(Array5);

  let Array6 = []
  for (let i = 0; i<filterByCalling.length; i++){
    if(filterByCalling[i].calling_code) {
      Array6.push(filterByCalling[i].calling_code);
    }        
  }
  let uniqueArray6 = getUniqueArray(Array6);

  let Array7 = []
  for (let i = 0; i<filterByCapital.length; i++){
    if(filterByCapital[i].city) {
      Array7.push(filterByCapital[i].city);
    }        
  }
  let uniqueArray7 = getUniqueArray(Array7);

  let Array8 = []
  for (let i = 0; i<filterByContinent.length; i++){
    if(filterByContinent[i].continent) {
      Array8.push(filterByContinent[i].continent);
    }        
  }
  let uniqueArray8 = getUniqueArray(Array8);

  let Array9 = []
  for (let i = 0; i<filterByCostline.length; i++){
    if(filterByCostline[i].costline) {
      Array9.push(filterByCostline[i].costline);
    }        
  }
  let uniqueArray9 = getUniqueArray(Array9);

  let Array10 = []
  for (let i = 0; i<filterByCurrencyName.length; i++){
    if(filterByCurrencyName[i].currency_name) {
      Array10.push(filterByCurrencyName[i].currency_name);
    }        
  }
  let uniqueArray10 = getUniqueArray(Array10);

  let Array11 = []
  for (let i = 0; i<filterByReligion.length; i++){
    if(filterByReligion[i].religion) {
      Array11.push(filterByReligion[i].religion);
    }        
  }
  let uniqueArray11 = getUniqueArray(Array11);

  let Array12 = []
  for (let i = 0; i<filterByCurrencyCode.length; i++){
    if(filterByCurrencyCode[i].currency_code) {
      Array12.push(filterByCurrencyCode[i].currency_code);
    }        
  }
  let uniqueArray12 = getUniqueArray(Array12);

  let Array13 = []
  for (let i = 0; i<filterByDomain.length; i++){
    if(filterByDomain[i].tld) {
      Array13.push(filterByDomain[i].tld);
    }        
  }
  let uniqueArray13 = getUniqueArray(Array13);

  let Array14 = []
  for (let i = 0; i<filterByElevation.length; i++){
    if(filterByElevation[i].elevation) {
      Array14.push(filterByElevation[i].elevation);
    }        
  }
  let uniqueArray14 = getUniqueArray(Array14);

  let Array15 = []
  for (let i = 0; i<filterByGovernment.length; i++){
    if(filterByGovernment[i].government) {
      Array15.push(filterByGovernment[i].government);
    }        
  }
  let uniqueArray15 = getUniqueArray(Array15);

  let Array16 = []
  for (let i = 0; i<filterByIndependence.length; i++){
    if(filterByIndependence[i].independence) {
      Array16.push(filterByIndependence[i].independence);
    }        
  }
  let uniqueArray16 = getUniqueArray(Array16);

  let Array17 = []
  for (let i = 0; i<filterByIso.length; i++){
    if(filterByIso[i].iso) {
      Array17.push(filterByIso[i].iso);
    }        
  }
  let uniqueArray17 = getUniqueArray(Array17);

  let Array18 = []
  for (let i = 0; i<filterByLandlocked.length; i++){
    if(filterByLandlocked[i].landlocked) {
      Array18.push(filterByLandlocked[i].landlocked);
    }        
  }
  let uniqueArray18 = getUniqueArray(Array18);

  let Array19 = []
  for (let i = 0; i<filterByLife.length; i++){
    if(filterByLife[i].expectancy) {
      Array19.push(filterByLife[i].expectancy);
    }        
  }
  let uniqueArray19 = getUniqueArray(Array19);

  let Array20 = []
  for (let i = 0; i<filterByNational.length; i++){
    if(filterByNational[i].symbol) {
      Array20.push(filterByNational[i].symbol);
    }        
  }
  let uniqueArray20 = getUniqueArray(Array20);

  let Array21 = []
  for (let i = 0; i<filterByDish.length; i++){
    if(filterByDish[i].dish) {
      Array21.push(filterByDish[i].dish);
    }        
  }
  let uniqueArray21 = getUniqueArray(Array21);

  let Array22 = []
  for (let i = 0; i<filterByDensity.length; i++){
    if(filterByDensity[i].density) {
      Array22.push(filterByDensity[i].density);
    }        
  }
  let uniqueArray22 = getUniqueArray(Array22);

  let Array23 = []
  for (let i = 0; i<filterByPopulation.length; i++){
    if(filterByPopulation[i].population) {
      Array23.push(filterByPopulation[i].population);
    }        
  }
  let uniqueArray23 = getUniqueArray(Array23);

  let Array24 = []
  for (let i = 0; i<filterByRegion.length; i++){
    if(filterByRegion[i].location) {
      Array24.push(filterByRegion[i].location);
    }        
  }
  let uniqueArray24 = getUniqueArray(Array24);

  let Array25 = []
  for (let i = 0; i<filterBySurface.length; i++){
    if(filterBySurface[i].area) {
      Array25.push(filterBySurface[i].area);
    }        
  }
  let uniqueArray25 = getUniqueArray(Array25);

  let Array26 = []
  for (let i = 0; i<filterByTemperature.length; i++){
    if(filterByTemperature[i].temperature) {
      Array26.push(filterByTemperature[i].temperature);
    }        
  }
  let uniqueArray26 = getUniqueArray(Array26);
  const [filterValue, setFilterValue] = useState("");

  const selectValue = () => {
    let value = document.querySelectorAll('.form-select');
    for(let i = 0; i< value.length; i++){
      value[i].addEventListener('change', () => {
        var text = value[i].value;
        setFilterValue(text);
      })
    }
  }

  console.log(filterValue);

  return (
    <Container className='filterContainer'>
      <div className="filterTitle">
        <h4>Filters</h4>
      </div>
      <label for="floatingSelect" className='label'>Country by Name :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray1.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Abbreviation :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray2.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Alphabet Letters :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray3.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Avg Male Height :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray4.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Barcode Prefix :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray5.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Calling Code :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray6.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Capital City :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray7.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Continent :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray8.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Costline :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray9.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Currency Name :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray10.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Religion :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray11.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Currency Code :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray12.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Domain Tld :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray13.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Elevation :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray14.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Government Type :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray15.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Independence Date :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray16.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Iso Numeric :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray17.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Landlocked :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray18.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Life Expectancy :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray19.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by National Symbol :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray20.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by National Dish :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray21.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Population Density :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray22.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Population :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray23.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Region In World :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray24.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Surface Area :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray25.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label for="floatingSelect" className='label'>Country by Yearly Average Temperature :</label>
      <select className="form-select" id="floatingSelect" onClick={selectValue}>
        <option value="default">Select an Option</option>
        {uniqueArray26.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Container>
    
  )
}

export default Filter