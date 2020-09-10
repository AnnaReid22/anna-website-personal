import React from "react";
import "../styles/aboutMe.css";
import "../index.css";
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

class AboutMe extends React.Component {
    render() {
        return (
            <div id="about-me" className="page">
                <Header />
                <Footer />
            </div>
        );
    }
}

export default AboutMe;