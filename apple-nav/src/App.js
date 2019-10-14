import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import navigationTabs from "./data";


import {Route, Link} from "react-router-dom"

import NavBar from "./components/Molecules/NavBar";
import Navie from "./components/Atoms/Navie"

function App() {

  //not where we want to set state?

  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

export default App;
