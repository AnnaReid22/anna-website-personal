import React from "react";
import "../styles/aboutMe.css";
import "../styles/index.css";
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import { Col, Row } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBook, FaDesktop, FaLightbulb, FaDollarSign, FaCodeBranch, FaHandHolding, FaFilm, FaTerminal } from 'react-icons/fa';
import Anna from "../images/anna.png"

class AboutMe extends React.Component {
    render() {
        return (
            <div id="about-me">
                <Header />
                <div className="container-intro">
                    <Row>
                        <Col style={{margin:"10px"}}>
                            <img src={Anna} className="image-intro" alt="anna"></img>
                        </Col>
                        <Col xs={9}>
                            <div className="large-intro-text">
                                Hello, I'm Anna (pronounced Aw-na)!
                            </div>
                            <div className="medium-intro-text">
                                I'm a software developer, and I enjoy all things animation and computer graphics!
                            </div>
                            <div className="small-intro-text">
                                Over the years, I have gained experience with web development, including React, TypeScript, JavaScript, and full stack application development. 
                                I also love the arts and how they connect to computer science. My college education focused on computer graphics and 3D animation, where I took courses including
                                Intro to Graphics, Real-Time Rendering, 3D Modeling, my minor capstone, and various independent projects. I love coming up with creative solutions for
                                complex problems and working in teams!
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="message-text">
                    Experience & Activities Timeline
                </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="August 2019 - June 2023"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaBook />} >
                        <h4 className="vertical-timeline-element-title">California Polytechnic State University, San Luis Obispo</h4>
                        <h5 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h5>
                        <p>B.S. in Computer Science, Minor in Computing for Interactive Arts</p>
                        <p>GPA: 3.940, Summa Cum Laude (Dean's List, President's Honor List)</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="September 2022"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaHandHolding />}>
                        <h4 className="vertical-timeline-element-title">Grace Hopper Conference 2022</h4>
                        <h5 className="vertical-timeline-element-subtitle">Orlando, FL</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="June 2022 - September 2022"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaTerminal />} >
                        <h4 className="vertical-timeline-element-title">Walt Disney Animation Studios Software Engineering Internship</h4>
                        <h5 className="vertical-timeline-element-subtitle">Seattle, WA (Remote)</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Spring 2022 - Spring 2023"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaTerminal />}>
                        <h4 className="vertical-timeline-element-title">Hack4Impact Co Executive Director</h4>
                        <h5 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Spring 2021 - Spring 2023"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaFilm />} >
                        <h4 className="vertical-timeline-element-title">Cal Poly Animation Club Vice President</h4>
                        <h5 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Fall 2021"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaTerminal />} >
                        <h4 className="vertical-timeline-element-title">Grace Hopper Conference 2021</h4>
                        <h5 className="vertical-timeline-element-subtitle">San Luis Obispo, CA (Remote)</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Spring 2021 - Spring 2022"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaHandHolding />} >
                        <h4 className="vertical-timeline-element-title">Hack4Impact Cal Poly Director of Community</h4>
                        <h5 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Summer 2021"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaTerminal />} >
                        <h4 className="vertical-timeline-element-title">Adobe Software Engineering Internship</h4>
                        <h5 className="vertical-timeline-element-subtitle">Seattle, WA (Remote)</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Winter 2020 - Summer 2021"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaCodeBranch />} >
                        <h4 className="vertical-timeline-element-title">Hack4Impact Technical Lead</h4>
                        <h5 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Fall 2020"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaTerminal />} >
                        <h4 className="vertical-timeline-element-title">Grace Hopper Conference 2020</h4>
                        <h5 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="June 2020 - July 2020"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaBook />} >
                        <h4 className="vertical-timeline-element-title">AT&T Externship</h4>
                        <h5 className="vertical-timeline-element-subtitle">Seattle, WA</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Spring 2020 - Spring 2021"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaDollarSign />} >
                        <h4 className="vertical-timeline-element-title">Hack4Impact Director of Finance</h4>
                        <h5 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Spring 2020 - Spring 2021"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaDesktop />} >
                        <h4 className="vertical-timeline-element-title">WISH Webmaster</h4>
                        <h5 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Summer 2020"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaLightbulb />} >
                        <h4 className="vertical-timeline-element-title">Quarter Plus Learning Assistant</h4>
                        <h5 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Summer 2018"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaDesktop />} >
                        <h4 className="vertical-timeline-element-title">Girls Who Code (AT&T)</h4>
                        <h5 className="vertical-timeline-element-subtitle">Seattle, WA</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163'}}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="September 2016 - June 2019"
                        iconStyle={{ background: '#a8c4c7', color: '#fff'}}
                        icon={<FaBook />} >
                        <h4 className="vertical-timeline-element-title">High School</h4>
                        <h5 className="vertical-timeline-element-subtitle">Seattle, WA</h5>
                        <p>
                        Valedictorian, Full IB Diploma Program (40/45 Points), National Honor Society, Recognized Film Student of the 2019 Graduating Class.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
                <Footer />
            </div>
        );
    }
}

export default AboutMe;