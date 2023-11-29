// Desc: This is the main app component
// import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
// import Navigation from './components/Navigation';
import Header from './components/Header';

function App() {
  return (
    <> 
        <Header />
        {/* <Navigation /> */}
        <Outlet />
    
    </>
  );
}

export default App;
