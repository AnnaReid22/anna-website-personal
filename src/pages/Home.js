import React from "react";
import "../styles/home.css";
import "../index.css";
import HeaderHome from "../components/HeaderHome.js"

class Home extends React.Component {
    render() {
        return (
            <div style={{overflowY: 'hidden'}}>
                <HeaderHome />
                <div id="home-page" className="page-home">
                    <div className="labelContent">HELLO! I'M</div>
                    <div className="name">ANNA REID</div>
                </div>
            </div>
        );
    }
}

export default Home;