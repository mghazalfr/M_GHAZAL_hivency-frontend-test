import React from 'react';
import './App.css';

//Import Components
import Header from './components/Header';
import SideNav from './components/SideNav';

//Import Dependencies
import {HashRouter, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <SideNav />
      </HashRouter>
    </div>
  );
}

export default App;
