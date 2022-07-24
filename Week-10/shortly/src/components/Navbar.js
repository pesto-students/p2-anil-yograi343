import React from "react";
import "../App.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg m-2">
        <div className="container-fluid">
          <a className="navbar-brand text-white nav-a hv" href="/">
            Shortli
          </a>
          <div className="collapse navbar-collapse m-4" id="navbarSupportedContent">
            <div>
              <a className="nav-link active text-white hv" aria-current="page" href="/">
                Home
              </a>
            </div>
            <div>
              <a className="nav-link text-white hv" href="/">
                About Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
