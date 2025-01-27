import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        {/* Info is changed in App.js and we can change the info using props by passing props as the function parameter */}
        <button
          className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"aria-expanded="false"aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              {/* // here link and to is used instead of anchor and href tag to move to that page without loading the screen that is working dynamicaly without loading the entire page and they imported from react-router-dom*/}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.Heading}</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input  className="form-control me-2" type="search" placeholder="Search"  aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <div className={`form-check form-switch text-danger mx-2`}>
            <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// PropTypes for type checking
Navbar.propTypes = {
  title: PropTypes.string, 
  Heading: PropTypes.string,
};

// Default Props
Navbar.defaultProps = {
  title: "Set Title Here",
  Heading: "Set Heading Here",
};
