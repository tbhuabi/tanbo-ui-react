import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, BrowserRouter } from 'react-router-dom';


import Home from './views/home/home';

function App() {
  return (
    <div className="page-wrap">
      <div className="page">
        <div className="header">
        </div>
        <div className="page-content">
          <BrowserRouter>
            <Route path="/" component={Home}/>
          </BrowserRouter>
        </div>
      </div>
      <div className="footer">
      </div>
    </div>
  );
}

export default hot(App);
