// Desc: This is the main app component
// import React from 'react';
import './style/index.css';
<style></style>
import { Outlet } from 'react-router-dom';
// import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <> 
        <Header />
        {/* <Navigation /> */}
        <Outlet />
        <Footer />
    
    </>
  );
}

export default App;
