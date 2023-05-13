import React from "react";
import { Link } from "react-router-dom";

function NavbarLink(props) {
  return (
    <li className="nav-item ms-auto me-2">
      <Link className="nav-link" to={props.link}>
        {props.name}
      </Link>
    </li>
  );
}

function Navbar() {
  const links = [];

  links.push(NavbarLink({ link: "/home", name: "Dashboard" }));
  links.push(NavbarLink({ link: "/parts", name: "Parts Database" }));
  links.push(NavbarLink({ link: "/home", name: "About" }));

  return (
    <nav className="navbar navbar-expand-md pb-0 pt-3 sticky-top">
      <div className="container-md p-1 rounded-pill bg-lightblue shadow border border-3 border-blue">
        <Link className="navbar-brand ps-3" to="/home">
          Airbus Aerothon 5.0
        </Link>
        <ul className="navbar-nav ms-auto me-2">{links}</ul>
      </div>
    </nav>
  );
}

export default Navbar;
