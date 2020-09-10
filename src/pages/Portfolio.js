import React from "react";
import "../styles/contact.css";
import "../index.css";
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

class Portfolio extends React.Component {
    render() {
        return (
            <div id="contact" className="page">
                <Header />
                <Footer />
            </div>

        );
    }
}

export default Portfolio;