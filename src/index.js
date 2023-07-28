import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import GGCalendar from './components/GGCalendar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <nav
        className='navbar navbar-expand-sm navbar-dark bg-dark fixed-top'
        style={{
          width: '400px',
          height: '50px',
        }}
      >
        <div>
          <a className='navbar-brand' style={{fontSize: '25px'}}>
            MyTodo
          </a>
          <Link to='/' className='navbar-link'>
            Home
          </Link>
          <Link to='/ggcalendar' className='navbar-link'>
            GGCalendar
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/ggcalendar' element={<GGCalendar />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
