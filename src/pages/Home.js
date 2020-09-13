import React from "react";
import "../styles/home.css";
import "../styles/index.css";
import HeaderHome from "../components/HeaderHome.js"

class Home extends React.Component {
    render() {
        return (
            <div style={{overflowY: 'hidden'}}>
                <HeaderHome />
                <div id="home-page" className="page-home">
                    <div className="labelContent"><b>HELLO! I'M</b></div>
                    <div className="name"><b>ANNA REID</b></div>
                </div>
            </div>
        );
    }
}

export default Home;