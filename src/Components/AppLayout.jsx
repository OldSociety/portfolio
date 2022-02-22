import * as React from 'react'
// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import UserData from 'UserData/UserData.json';

//AppLayout replaces App.jsx as the central hub of this the Application. 

//Core Components
import Home from '../Core/Home';
import Header from '../Core/Header';
import Footer from '../Core/Footer';


const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <div className="container">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
