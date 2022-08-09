import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Header() {

  const filterArray = ["Country by Name", "Country by Abbreviation", "Country by Alphabet Letters", "Country by Avg Male Height", "Country by Barcode Prefix", "Country by Calling Code", "Country by Capital City", "Country by Continent", "Country by Costline", "Country by Currency Name", "Country by Religion", "Country by Currency Code", "Country by Domain Tld", "Country by Elevation", "Country by Government Type", "Country by Independence Date", "Country by Iso Numeric", "Country by Landlocked", "Country by Life Expectancy", "Country by National Symbol", "Country by National Dish", "Country by Population Density", "Country by Population", "Country by Region In World", "Country by Surface Area", "Country by Yearly Average Temperature"];


  const filterByName = require("../data/country-by-name.json");
  const filterByAbbr = require("../data/country-by-abbreviation.json");
  const filterByAlpha = require("../data/country-by-alphabet-letters.json");
  const filterByHeight = require("../data/country-by-avg-male-height.json");
  const filterByBarcode = require("../data/country-by-barcode-prefix.json");
  const filterByCalling = require("../data/country-by-calling-code.json");
  const filterByCapital = require("../data/country-by-capital-city.json");
  const filterByContinent = require("../data/country-by-continent.json");
  const filterByCostline = require("../data/country-by-costline.json");
  const filterByCurrencyName = require("../data/country-by-currency-name.json");
  const filterByReligion = require("../data/country-by-religion.json");
  const filterByCurrencyCode = require("../data/country-by-currency-code.json");
  const filterByDomain = require("../data/country-by-domain-tld.json");
  const filterByElevation = require("../data/country-by-elevation.json");
  const filterByGovernment = require("../data/country-by-government-type.json");
  const filterByIndependence = require("../data/country-by-independence-date.json");
  const filterByIso = require("../data/country-by-iso-numeric.json");
  const filterByLandlocked = require("../data/country-by-landlocked.json");
  const filterByLife = require("../data/country-by-life-expectancy.json");
  const filterByNational = require("../data/country-by-national-symbol.json");
  const filterByDish = require("../data/country-by-national-dish.json");
  const filterByDensity = require("../data/country-by-population-density.json");
  const filterByPopulation = require("../data/country-by-population.json");
  const filterByRegion = require("../data/country-by-region-in-world.json");
  const filterBySurface = require("../data/country-by-surface-area.json");
  const filterByTemperature = require("../data/country-by-yearly-average-temperature.json");

  const filterSelect = () => {
    document.querySelector('.innerFilter').style.display = "block";
    let value = document.querySelector('.Filter').value;
    console.log(value)

    removeElements();

    if (value === `${filterArray[0]}`) {
      let Array = []
      for (let i = 0; i<filterByName.length; i++){
        if(filterByName[i].country){
          Array.push(filterByName[i].country);
        }
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[1]}`) {
      let Array = []
      for (let i = 0; i<filterByAbbr.length; i++){
        if(filterByAbbr[i].abbreviation) {
          Array.push(filterByAbbr[i].abbreviation);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[2]}`) {
      let Array = []
      for (let i = 0; i<Object.keys(filterByAlpha[0]).length; i++){
        if(Object.keys(filterByAlpha[0])[i]) {
          Array.push(Object.keys(filterByAlpha[0])[i]);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[3]}`) {
      let Array = []
      for (let i = 0; i<filterByHeight.length; i++){
        if(filterByHeight[i].height) {
          Array.push(filterByHeight[i].height);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[4]}`) {
      let Array = []
      for (let i = 0; i<filterByBarcode.length; i++){
        if(filterByBarcode[i].barcode) {
          Array.push(filterByBarcode[i].barcode);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[5]}`) {
      let Array = []
      for (let i = 0; i<filterByCalling.length; i++){
        if(filterByCalling[i].calling_code) {
          Array.push(filterByCalling[i].calling_code);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[6]}`) {
      let Array = []
      for (let i = 0; i<filterByCapital.length; i++){
        if(filterByCapital[i].city) {
          Array.push(filterByCapital[i].city);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[7]}`) {
      let Array = []
      for (let i = 0; i<filterByContinent.length; i++){
        if(filterByContinent[i].continent) {
          Array.push(filterByContinent[i].continent);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[8]}`) {
      let Array = []
      for (let i = 0; i<filterByCostline.length; i++){
        if(filterByCostline[i].costline) {
          Array.push(filterByCostline[i].costline);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[9]}`) {
      let Array = []
      for (let i = 0; i<filterByCurrencyName.length; i++){
        if(filterByCurrencyName[i].currency_name) {
          Array.push(filterByCurrencyName[i].currency_name);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[10]}`) {
      let Array = []
      for (let i = 0; i<filterByReligion.length; i++){
        if(filterByReligion[i].religion) {
          Array.push(filterByReligion[i].religion);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[11]}`) {
      let Array = []
      for (let i = 0; i<filterByCurrencyCode.length; i++){
        if(filterByCurrencyCode[i].currency_code) {
          Array.push(filterByCurrencyCode[i].currency_code);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[12]}`) {
      let Array = []
      for (let i = 0; i<filterByDomain.length; i++){
        if(filterByDomain[i].tld) {
          Array.push(filterByDomain[i].tld);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[13]}`) {
      let Array = []
      for (let i = 0; i<filterByElevation.length; i++){
        if(filterByElevation[i].elevation) {
          Array.push(filterByElevation[i].elevation);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[14]}`) {
      let Array = []
      for (let i = 0; i<filterByGovernment.length; i++){
        if(filterByGovernment[i].government) {
          Array.push(filterByGovernment[i].government);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[15]}`) {
      let Array = []
      for (let i = 0; i<filterByIndependence.length; i++){
        if(filterByIndependence[i].independence) {
          Array.push(filterByIndependence[i].independence);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[16]}`) {
      let Array = []
      for (let i = 0; i<filterByIso.length; i++){
        if(filterByIso[i].iso) {
          Array.push(filterByIso[i].iso);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[17]}`) {
      let Array = []
      for (let i = 0; i<filterByLandlocked.length; i++){
        if(filterByLandlocked[i].landlocked) {
          Array.push(filterByLandlocked[i].landlocked);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[18]}`) {
      let Array = []
      for (let i = 0; i<filterByLife.length; i++){
        if(filterByLife[i].expectancy) {
          Array.push(filterByLife[i].expectancy);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[19]}`) {
      let Array = []
      for (let i = 0; i<filterByNational.length; i++){
        if(filterByNational[i].symbol) {
          Array.push(filterByNational[i].symbol);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[20]}`) {
      let Array = []
      for (let i = 0; i<filterByDish.length; i++){
        if(filterByDish[i].dish) {
          Array.push(filterByDish[i].dish);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[21]}`) {
      let Array = []
      for (let i = 0; i<filterByDensity.length; i++){
        if(filterByDensity[i].density) {
          Array.push(filterByDensity[i].density);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[22]}`) {
      let Array = []
      for (let i = 0; i<filterByPopulation.length; i++){
        if(filterByPopulation[i].population) {
          Array.push(filterByPopulation[i].population);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[23]}`) {
      let Array = []
      for (let i = 0; i<filterByRegion.length; i++){
        if(filterByRegion[i].location) {
          Array.push(filterByRegion[i].location);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[24]}`) {
      let Array = []
      for (let i = 0; i<filterBySurface.length; i++){
        if(filterBySurface[i].area) {
          Array.push(filterBySurface[i].area);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
    else if (value === `${filterArray[25]}`) {
      let Array = []
      for (let i = 0; i<filterByTemperature.length; i++){
        if(filterByTemperature[i].temperature) {
          Array.push(filterByTemperature[i].temperature);
        }        
      }
      let uniqueArray = getUniqueArray(Array);
      uniqueArray.forEach(element => {
        createElement(element);
      });
    }
  }

  const innerFilterSelect = () => {
    document.querySelector('.navbar-toggler').classList.add("collapsed");
    document.querySelector('.navbar-collapse').classList.remove("show");
    let value = document.querySelector(".innerSelect").value;
    console.log(value);
  }

  const getUniqueArray = (array) => {
    let uniqueArray = [];
    
    for(let i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
  }

  const removeElements = () => {
    let options = document.querySelectorAll('.innerOption');
    let emptySelect = document.querySelector('.innerSelect');
    for(let i = 0; i<options.length; i++) {
      emptySelect.remove(1);
    }
  }
  
  const createElement = (text) => {
    let option = document.createElement("option");
    option.value = text;
    option.innerHTML = text;
    option.classList.add("innerOption");
    document.querySelector('.innerSelect').add(option);
  }

  return (
    <Navbar className='navbar-custom' expand="lg" sticky="top" variant='dark'>
      <Container>
        <Navbar.Brand href="/">
          <img src={require("../assets/logo.png")} alt="logo" height="40" width="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto menu-items">
            <div className='menu'>
              <Nav.Link href="/" className='menuName'>Dashboard</Nav.Link>
            </div>
            <NavDropdown title="Filter" id="basic-nav-dropdown">
              <FloatingLabel label="Filter By :">
                <Form.Select size='sm' className='Filter' onChange={filterSelect}>
                  <option value="default">Select an Option</option>
                  {filterArray.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel label="Filter By :" className='innerFilter'>
                <Form.Select size='sm' className='innerSelect' onChange={innerFilterSelect}>
                  <option value="default">Select an Option</option>
                </Form.Select>
              </FloatingLabel>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header