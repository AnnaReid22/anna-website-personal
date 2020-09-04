import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { withRouter } from 'react-router-dom';
import "../styles/headerHome.css";
import "../index.css";

const linkToText = {
  "/aboutMe" : "About Me",
  "/reviews" : "Film Reviews",
  "/portfolio" : "Portfolio", 
  "/contact" : "Contact"
};

class HeaderHome extends React.Component {

  getLink = (linkName) => {
    const linkAt = this.props.location.pathname || "/home";
    if (linkAt === linkName) {
      return (
        <Navbar.Brand 
          href={linkName}
          key={linkName}
          className="ml-3">
          { linkToText[linkName] }
        </Navbar.Brand>
      );
    }

    return (
      <Nav.Link
        className="headerContent"
        href={linkName}
        key={linkName}
      >
        { linkToText[linkName] }
      </Nav.Link>
    );
  }

  render() {
    return (
      <div >

        <Navbar className="header">

          <Nav>
            <div className="headerContent">{ Object.keys(linkToText).map(this.getLink)}</div>
          </Nav>
      </Navbar>
      </div>
    );
  }
}
export default withRouter(HeaderHome);