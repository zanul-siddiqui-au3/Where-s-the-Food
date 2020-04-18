import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <div className="container Navbar">
        <Nav className="justify-content-end ">
          <NavItem>
            <Link to="/" className="nav-link " style={{ color: "white" }}>
              Home
            </Link>
          </NavItem>
          <NavItem>
            <NavLink href="/">FOODIE CARDS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">MEMORIES</NavLink>
          </NavItem>
        </Nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
