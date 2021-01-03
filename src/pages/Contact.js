import React from "react";
import Container from 'react-bootstrap/Container';
import "../styles/contact.css";
import "../styles/index.css";
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

class Contact extends React.Component {
    render() {
        return (
            <div id="contact">
                <Header />
                <Container style={{width:"100%", marginTop: "50px", marginBottom: "50px"}}>
                    <h1>Contact Me</h1>
                    <p>Thank you so much for looking at my website!</p>
                </Container>
                <Container style={{width:"100%", marginTop: "50px", marginBottom: "100px"}}>
                    <div style={{marginBottom: "50px", textAlign:"center" }}>
<<<<<<< HEAD
                        <img width="50%" src={require("../images/coder.png")} alt="anna"/>
=======
                        <img width="50%" src={require("../images/coder.png")} alt="coding"/>
>>>>>>> 05fe6bee0785ac9b654ed373674bf8b0bfa91601
                    </div>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Contact;