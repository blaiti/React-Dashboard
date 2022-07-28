import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';

import './App.css';
import Orders from './pages/Orders';

function App () {
  return(
    <Router>
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
          
          <div className='dashboard-body'>
              <Routes>
                  <Route path="*" element={<div></div>} />
                  <Route exact path="/" element={<div></div>} />
                  <Route exact path="/orders" element={< Orders/>} />
                  <Route exact path="/locations" element={<div></div>} />
                  <Route exact path="/profile" element={<div></div>} />
              </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App;