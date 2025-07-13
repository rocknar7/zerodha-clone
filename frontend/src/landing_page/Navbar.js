import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg border-bottom ">
        <div class="container p-2">
          <Link class="navbar-brand" to="/">

            <img src="media/logo.svg" style={{width:"25%", marginLeft:"20px"}}></img>
           
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/Pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="Support">
                  Support
                </Link>
              </li>
            </ul>

            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
