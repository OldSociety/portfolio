import React from 'react'
import { Route, Routes } from 'react-router-dom';

//AppLayout replaces App.jsx as the central hub of this the Application. 

//Core Components
import Home from '../Core/Home';
// import Header from '../Core/Header';
// import Footer from '../Core/Footer';
// import NotFound from '../Core/NotFound';


const AppLayout = () => {
  return (
    <div className="Layout">
      {/* <Header /> */}
      <div className="container">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AppLayout;
