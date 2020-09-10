import React from "react";
import Container from 'react-bootstrap/Container';
import "../styles/contact.css";
import "../index.css";
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import ReactContactForm from 'react-mail-form';
import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap';
import { FaCodeBranch } from "react-icons/fa";
import { SocialIcon } from 'react-social-icons';

class Contact extends React.Component {
    render() {
        return (
            <div id="contact" className="page">
                <Header />
                <Container style={{width:"100%", marginTop: "50px", marginBottom: "50px"}}>
                        <h1>Contact Me</h1>
                        <p>Thank you so much for looking at my website!</p>
                </Container>
                <Container style={{width:"100%", marginTop: "50px", marginBottom: "100px"}}>
                <div style={{marginBottom: "50px", textAlign:"center" }}>
                <img width="50%" src={require("../images/coder.png")} />
                </div>
                    
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Contact;