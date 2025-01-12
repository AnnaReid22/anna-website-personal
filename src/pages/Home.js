import React from "react";
import "../styles/home.css";
import "../styles/index.css";
import HeaderHome from "../components/HeaderHome.js"

const Home = () => {
    return (
        <div style={{overflowY: 'hidden', overflowX: 'hidden'}}>
            <HeaderHome />
            <div id="home-page" className="page-home">
                <div className="labelContent"><b>HELLO! I'M</b></div>
                <div className="name"><b>ANNA</b></div>
            </div>
        </div>
    );
}

export default Home;