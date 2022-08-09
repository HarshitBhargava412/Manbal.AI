import React, {useState} from 'react';
import './content.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {BsSearch} from 'react-icons/bs';

function content(prop) {

  const filterByName = require("../../data/country-by-name.json");
  const [selectedValue, setValueSelected] = useState("");

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
  const [countryName, setValue] = useState("");

  const updatedArray = uniqueArray1.filter((element) => {
    if(countryName === "") {
      return element;
    }else {
      return element.toLowerCase().includes(countryName);
    }
  });

  const displayDropdown = () => {
    document.querySelector(".countryDiv").style.display = "block";
  }

  const closeDropdown = () => {
    document.querySelector(".countryDiv").style.display = "none";
  }

  const selectValue = () => {
    let value = document.querySelectorAll('.countryName');
    for(let i = 0; i< value.length; i++){
      value[i].addEventListener('click', () => {
        var text = value[i].innerHTML;
        setValueSelected(text);
        console.log(text);
        closeDropdown();
      });
    }
  }
  console.log(selectedValue);

  return (
    <Container className='contentContainer'>
      <div className='searchContainer'>
        <h2 className='searchTitle'>Search Your Country</h2>
        <div className="searchBar">
          <Form className="d-flex searchBox">
            <BsSearch className='searchIcon' />
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 countryInput"
              aria-label="Search"
              onChange={event => setValue(event.target.value)}
              onFocus={displayDropdown}
              onClick={selectValue}
            />
          </Form>
          <div className="countryDiv">
            {updatedArray.map((country) => (
              <div key={country} className="countryName" value={country} onClick={selectValue}>
                {country}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tableContainer">

      </div>
    </Container>

    
  )
}

export default content