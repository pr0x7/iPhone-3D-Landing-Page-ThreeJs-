import React from "react";
import Logo from "/Users/prox/Downloads/iphone-3d-website-starter-main/src/assets/images/logo.svg";
import Search from "/Users/prox/Downloads/iphone-3d-website-starter-main/src/assets/images/search.svg";
import Store from "/Users/prox/Downloads/iphone-3d-website-starter-main/src/assets/images/Store.svg";

function Nav(props) {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Apple" />
          </li>
          <li>
            <a className="link-styled">Store</a>
          </li>
          <li>
            <a className="link-styled">Mac</a>
          </li>
          <li>
            <a className="link-styled">iPad</a>
          </li>
          <li>
            <a className="link-styled">Watch</a>
          </li>
          <li>
            <a className="link-styled">Airpords</a>
          </li>
          <li>
            <a className="link-styled">Tv & Home</a>
          </li>
          <li>
            <a className="link-styled">Entertainment</a>
          </li>
          <li>
            <a className="link-styled">Accessories</a>
          </li>
          <li>
            <a className="link-styled">Support</a>
          </li>
          <li>
            <img src={Search} alt="" />
          </li>
          <li>
            <img src={Store} alt="" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
