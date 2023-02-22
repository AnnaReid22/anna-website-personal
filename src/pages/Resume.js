import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ResumeFile from '../images/resume.jpg';
import "../styles/resume.css";

function Resume() {
  return (
    <div id="resume">
      <Header />
      <img style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "90%"}} src={ResumeFile} alt="resume"></img>
      <Footer />
    </div>
  );
}

export default Resume;