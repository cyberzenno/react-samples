import React, { useState, useRef, useContext, useEffect } from "react";
import AuthContext from "../store/AuthContext";


function UpperNav() {

    var _ctx = useContext(AuthContext);
    var currentUser = _ctx.currentUser();

    return <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
        <div className="container-fluid">
            <button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop"    >
                <i className="fas fa-bars"></i>
            </button>
            <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                    <button className="btn btn-primary py-0" type="button">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
            <ul className="navbar-nav flex-nowrap ms-auto">
                <li className="nav-item dropdown no-arrow mx-1">
                    <div className="shadow dropdown-list dropdown-menu dropdown-menu-end"></div>
                </li>
                <div className="d-none d-sm-block topbar-divider"></div>
                <li className="nav-item dropdown no-arrow">
                    <div className="nav-item dropdown no-arrow">
                        <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                            <span className="d-none d-lg-inline me-2 text-gray-600 small">
                                {currentUser.fullName}
                            </span>
                            <img className="border rounded-circle img-profile" src="assets/img/avatars/avatar1.jpeg" />
                        </a>
                        <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i> Profile
                                                </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>
                        &nbsp;Logout
                      </a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>;
}

export default UpperNav;