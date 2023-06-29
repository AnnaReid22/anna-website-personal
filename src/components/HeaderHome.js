import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../styles/headerHome.css";
import "../styles/index.css";

const HeaderHome = () => {
    return (
      <div >
        <Navbar expand="md" fixed="top">
          <Navbar.Brand href="/" style={{ marginLeft:"10px" }}>
              <img src={require("../images/AR.png")} width="50" height="45" alt="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "98%" }}>
              <Nav.Link className="headerContent" href="/about-me">ABOUT</Nav.Link>
              <Nav.Link className="headerContent" href="/reviews">REVIEWS</Nav.Link>
              <Nav.Link className="headerContent" href="/portfolio">PORTFOLIO</Nav.Link>
              <Nav.Link className="headerContent" href="/resume">RESUME</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );

}
export default HeaderHome;