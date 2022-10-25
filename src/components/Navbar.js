import React from "react"; 

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'?'light':'dark'} bg-${props.mode==='light'?'light':'dark'}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            TINY UTILS BY RAUS
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <href className="nav-link active" aria-current="page" to="/">
                  Home
                </href>
              </li>
            </ul>
            <div className="form-check form-switch mx-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.modeToggle}
              />
              <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">
                {props.mode==='light'?'Enable Dark Mode':'Disable Dark Mode'}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
