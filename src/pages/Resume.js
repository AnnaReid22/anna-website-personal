import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ResumeFile from '../images/resume.pdf';
import "../styles/resume.css";

function Resume() {
  return (
    <div id="resume">
      <Header />
      <div id="wrap-resume">
        <embed style={{
                        display: "block", 
                        marginLeft: "auto", 
                        marginRight: "auto", 
                        width: "90%",
                        height: "800px"
                      }} 
                src={ResumeFile} 
                type="application/pdf" 
                alt="resume">
        </embed>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;