import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          props.mode === "light" ? "light" : "dark"
        } bg-${props.mode === "light" ? "light" : "dark"}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TINY UTILS BY RAUS
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
            </ul>
            <div className="d-flex justify-content-center align-items-center">
              <div
                className="bg-primary rounded mx-2"
                onClick={() => props.modeToggle("primary")}
                style={{ height: "35px", width: "35px" }}
              ></div>
              <div
                className="bg-success rounded mx-2"
                onClick={() => props.modeToggle("success")}
                style={{ height: "35px", width: "35px" }}
              ></div>
              <div
                className="bg-warning rounded mx-2"
                onClick={() => props.modeToggle("warning")}
                style={{ height: "35px", width: "35px" }}
              ></div>
              <div
                className="bg-danger rounded mx-2"
                onClick={() => props.modeToggle("danger")}
                style={{ height: "35px", width: "35px" }}
              ></div>
              <div className="form-check form-switch mx-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={() => props.modeToggle(null)}
                />
                <label
                  className={`form-check-label text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  {props.mode === "light"
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
