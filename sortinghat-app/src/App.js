import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import './App.css';
import Sorting from './Images/Sorting_Hat.png'


import GetHouse from './components/GetHouse';

function App() {
  return (
    <div className="App">
      <Card style={{ margin: "5px" }}>
  
      <Image src={Sorting}/>
      <h1><GetHouse /></h1>

      </Card>
    </div>
  );
}

export default App;
