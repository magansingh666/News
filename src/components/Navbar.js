import React from "react";
import { Link } from "react-router-dom";
import Select from "./Select";

function Navbar(props){
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand navbar-dark" href="/">
              Quick News
            </a>            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon navbar-dark"></span>
            </button>
            <div className="collapse navbar-collapse navbar-dark" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">                  
                <li className="nav-item"> <Link className="nav-link" to="/entertainment"> Entertainment </Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/business"> Business </Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/health"> Health </Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/science"> Science </Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/technology"> Technology </Link> </li>               
              </ul>
              <Select options={props.countries} handleCountryChange={props.handleCountryChange}/>
            
            </div>
            

          </div>
        </nav>
      </div>
    );
  
}

export default Navbar;
