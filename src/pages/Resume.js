import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ResumeFile from '../images/resume.pdf';
import "../styles/resume.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div id="resume">
        <Header />
        <div style={{display:'table', marginLeft:"auto", marginRight:"auto", marginTop: "3%", marginBottom:"3%"}}>
      <Document file={ResumeFile}
      onLoadSuccess={onDocumentLoadSuccess}
      >
          <Page pageNumber={pageNumber} />
      </Document>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;