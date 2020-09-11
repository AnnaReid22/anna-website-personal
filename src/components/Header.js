import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { withRouter } from 'react-router-dom';
import "../styles/header.css";
import "../index.css";

class Header extends React.Component {
  render() {
    return (
      <div >
      <Navbar id="site-header" expand="md" fixed="top" onSelect="test()">
        <Navbar.Brand href="/">
            <img src={require("../images/AR.png")} width="50" height="45"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="header-text" href="/aboutMe">ABOUT</Nav.Link>
            <Nav.Link className="header-text" href="/reviews">REVIEWS</Nav.Link>
            <Nav.Link className="header-text" href="/portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link className="header-text" href="/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}
export default withRouter(Header);