import React from 'react';
import './Body.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from '../Filter/Filter.js';
import Content from '../content/content.js';

function Body() {
  return (
    <div className="hero bg-dark">
        <Filter />
        <Content />
    </div>
  )
}

export default Body