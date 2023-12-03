// Desc: This is the main app component
// import React from 'react';
import './style/index.css';
<style></style>
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <> 
        <Header />
        <Outlet />
        <Footer />
    
    </>
  );
}

export default App;
