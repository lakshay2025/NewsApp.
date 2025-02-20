import React, { Component } from "react";
import {
   Link
  } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-primary">
          <div className="container-fluid">
              <h3>Apna News</h3>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                  Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                  Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                  Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                  Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                  Technology
                  </Link>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
