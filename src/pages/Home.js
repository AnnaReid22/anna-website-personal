import React from "react";
import "../styles/home.css";
import "../index.css";
import HeaderHome from "../components/HeaderHome.js"

class Home extends React.Component {
    render() {
        return (
            <div>
                <HeaderHome />
                <div id="home-page" className="page">
                    <div className="labelContent">Hi! I'm</div>
                    <div className="name">Anna Reid</div>
                </div>
            </div>
        );
    }
}

export default Home;