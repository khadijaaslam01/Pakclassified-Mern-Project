import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-md-5">
      <div className="container-fluid">
        <a className="navbar-brand text-success fs-2 fw-bold" href="/">
          PakClassified
        </a>
        <button
          className="navbar-toggler ms-auto "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav align-items-center me-5">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul
                className="dropdown-menu bg-transparent border-0"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact
              </a>
            </li>
            <div>
              <button className="btn btn-success p-2 border-0 fs-6      d-block d-lg-none ">
                Post Advertisement <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </ul>
        </div>
        <div>
          <button className="btn btn-success p-2 border-0 fs-6  d-none d-lg-block ">
            Post Advertisement <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
