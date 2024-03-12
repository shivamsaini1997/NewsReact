import React, { Component } from 'react'
import {  NavLink} from "react-router-dom";

const Header =()=> {

  return (
      <div className="bg-body-tertiary bg-dark fixed-top" data-bs-theme="dark">
        <div className="container ">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to="/">News</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                  <li className="nav-item">
                                    <NavLink className="nav-link"to="/">Home</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink className="nav-link"to="/Business">Business</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink className="nav-link"to="/Entertainment">Entertainment</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink className="nav-link"to="/General">General</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink className="nav-link"to="/Health">Health</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink className="nav-link"to="/Science">Science</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink className="nav-link"to="/Sports">Sports</NavLink>
                                  </li>
                                  <li className="nav-item">
                                    <NavLink className="nav-link"to="/Technology">Technology</NavLink>
                                  </li>
                              </ul>                           
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
      </div>
    )

}
export default Header