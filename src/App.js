import React from 'react';
import "./App.css"
import DetailScreen from "./Screens/DetailScreen";
import ConverterScreen from './Screens/ConverterScreen';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


const App = () => {

  return (
    <Router> 
      <div className="App-Main-Container">
        <Routes>
          <Route exact path="/" element={<DetailScreen/>}/>
          <Route exact path="/Convert" element={<ConverterScreen/>}/> 
        </Routes>
      </div>
    </Router>

  );
};

export default App;