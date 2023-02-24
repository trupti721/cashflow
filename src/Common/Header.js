import React from 'react';
import './header.css';
import Sidebar from './Sidebar';
import pwcLogo from './pwc.png';

function Header() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-dark bg-dark">
            <div className="logo-title">
              <img src={pwcLogo} alt="logo" />
              <div className="vbar"></div>
              <div className="heading">Cashflow Projection</div>
            </div>
            <div className="rest"></div>
          </a>
        </div>
      </nav>
      {/* <header>
        <div className="logo-title">
          <img src={pwcLogo} alt="logo" />
          <div className="vbar"></div>
          <div className="heading">Cashflow Projection</div>
        </div>
        <div className="rest"></div>
      </header>
      <div className="sideAndMain">
      <div className="main"></div>
      </div> */}
      <Sidebar />
    </>
  );
}

export default Header;
