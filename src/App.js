import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {Routes, Route} from "react-router-dom";
import ProductListing from './Pages/ProductListing/ProductListing';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App h-screen">
      <Navbar/>
      <div className="app-display h-full">
      <Routes>
        <Route to="/" element={<ProductListing/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
