import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeProvider";


export default function Navbar() {

  const useThemeContext = useContext(ThemeContext);
  const { mode, modeToggle } = useThemeContext;

  const colorBox = (color) => {
    return (<div
      className={`bg-${color} rounded mx-2`}
      onClick={() => modeToggle(`${color}`)}
      style={{ height: "35px", width: "35px" }}
    ></div>);
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="./logo.png" className="logo" alt="Text Utils" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={`nav-link fw-bold`} aria-current="page" to="/" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-link fw-bold`}
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
            </ul>
            <div className="d-flex justify-content-center align-items-center">
              {colorBox("primary")}
              {colorBox("warning")}
              {colorBox("danger")}
              {colorBox("success")}
              <div className="form-check form-switch mx-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={() => modeToggle(null)}
                />
                <label
                  className={`form-check-label text-${mode === "light" ? "dark" : "light"
                    }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  {mode === "light"
                    ? "Enable Dark Mode"
                    : "Disable Dark Mode"}
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
