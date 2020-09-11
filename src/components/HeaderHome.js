import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { withRouter } from 'react-router-dom';
import "../styles/headerHome.css";
import "../styles/index.css";

class HeaderHome extends React.Component {
  render() {
    return (
      <div >
        <Navbar expand="md" fixed="top" onSelect="test()">
          <Navbar.Brand href="/">
              <img src={require("../images/AR.png")} width="50" height="45"/>
          </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link className="headerContent" href="/aboutMe">ABOUT</Nav.Link>
              <Nav.Link className="headerContent" href="/reviews">REVIEWS</Nav.Link>
              <Nav.Link className="headerContent" href="/portfolio">PORTFOLIO</Nav.Link>
              <Nav.Link className="headerContent" href="/contact">CONTACT</Nav.Link>
            </Nav>
        </Navbar>
      </div>
    );
  }
}
export default withRouter(HeaderHome);