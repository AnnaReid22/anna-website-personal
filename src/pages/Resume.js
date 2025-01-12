import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import "../styles/resume.css";

function Resume() {
  return (
    <div id="resume">
      <Header />
      <div id="wrap-resume">
        <iframe style={{
                          display: "block", 
                          marginLeft: "auto", 
                          marginRight: "auto", 
                          width: "90%",
                          height: "800px"
                        }} 
                        title="Anna Resume"
                        src="https://drive.google.com/file/d/1wbPoasagP0R8t11-zhSnaYZ-gr9dQUmE/preview">
        </iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;