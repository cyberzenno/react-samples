import { useRef, useContext } from "react";
import { NavLink } from 'react-router-dom'

import AuthContext from "../store/AuthContext";


function SideNav() {

    var navRef = useRef();
    function toggleSideNav() {
        if (navRef.current.classList.contains("toggled")) {
            navRef.current.classList.remove("toggled");
        } else {
            navRef.current.classList.add("toggled");
        }
    }

    var _ctx = useContext(AuthContext);
    function logout() {
        var redirectUrl = _ctx.baseName;
        _ctx.logout(redirectUrl);
    }

    var currentUserIsAdmin = _ctx.currentUser().role.toLowerCase() == "admin";
    function adminOnlyContent() {
        return <li className="nav-item">
            <NavLink to="/users" className="nav-link">
                <i className="fas fa-table"></i>
                <span>Users</span>
            </NavLink>
        </li>;
    }

    return <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" ref={navRef}>
        <div className="container-fluid d-flex flex-column p-0">
            <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
                href="#">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">
                    <span>{_ctx.environment}</span>
                </div>
            </a>
            <hr className="sidebar-divider my-0" />
            <ul className="navbar-nav text-light" id="accordionSidebar">
                <li className="nav-item">
                    <NavLink to="/dashboard" className="nav-link">
                        <i className="fas fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/profile" className="nav-link">
                        <i className="fas fa-user"></i>
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/todos" className="nav-link">
                        <i className="fa fa-list-alt"></i>
                        <span>Your To-do List</span>
                    </NavLink>
                </li>
  <li className="nav-item">
                    <NavLink to="/counter" className="nav-link">
                        <i className="fa fa-list-alt"></i>
                        <span>Your Glorious Counter</span>
                    </NavLink>
                </li>




                {currentUserIsAdmin ? adminOnlyContent() : ""}

                <li className="nav-item">
                    <NavLink to="/login" className="nav-link" style={{ cursor: "pointer" }} onClick={logout}>
                        <i className="fas fa-power-off"></i>
                        <span>Logout</span>
                    </NavLink>
                </li>
            </ul>
            <div className="text-center d-none d-md-inline">
                <button onClick={toggleSideNav}
                    className="btn rounded-circle border-0"
                    id="sidebarToggle"
                    type="button"
                ></button>
            </div>
        </div>
    </nav>;

}

export default SideNav;