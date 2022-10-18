import React, {useState} from 'react';
import './App.css';
import Merpage from './component/Mainpage';
import image from './bmw.jpg'
import inputForm from "./component/inputform"

function App() {

  return (
    <div className="App">
      <Merpage img ={image}/>
      <inputForm/>
    </div>
  );
}

export default App;
