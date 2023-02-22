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
                                Hello, I'm Anna!
                            </div>
                            <div className="medium-intro-text">
                                I'm a 4th year CS student at Cal Poly SLO, and I enjoy web development and graphics!
                            </div>
                            <div className="small-intro-text">
                                Over the years, I have gained experience with web development, including React, TypeScript, JavaScript, and full stack application development. 
                                I also love the arts and how they connect to computer science. I enjoy working with the Adobe products, watching movies,
                                and writing reviews about them. My education is focused on the computer graphics and 3D animation space, where I have taken courses including
                                Intro to Graphics, Real-Time Rendering, 3D Modeling, my minor capstone, and various independent projects. In addition, I have gained skills through my 
                                CS education, including data structures, systems programming, and computer architecture. In my free time, I also love to take photos and draw!
                                I also spent my summer working as a Software Engineering Intern at Walt Disney Animation Studios, which was awesome!
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="message-text">
                    Experience & Activities
                </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="September 2022"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaHandHolding />}>
                        <h4 className="vertical-timeline-element-title">Grace Hopper Conference 2022</h4>
                        <h4 className="vertical-timeline-element-subtitle">Orlando, FL</h4>
                        <p> Attended the in person Grace Hopper conference, watching guest speakers and participating in various activities.  </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="June 2022 - Present"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaTerminal />} >
                        <h4 className="vertical-timeline-element-title">Walt Disney Animation Studios Software Engineering Internship</h4>
                        <h4 className="vertical-timeline-element-subtitle">Seattle, WA (Remote)</h4>
                        <p> Interned at WDAS in Production Technology, where I learned about building, deploying, and testing services as a member on a fast-paced studio team called Codeforce.  </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="June 2022 - September 2022"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaTerminal />}>
                        <h4 className="vertical-timeline-element-title">Hack4Impact Co Executive Director</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Coordinate, organize, oversee, and lead all operations, events, and activities for Hack4Impact Cal Poly.  </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Spring 2021 - Present"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaFilm />} >
                        <h4 className="vertical-timeline-element-title">Cal Poly Animation Club Vice President</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Helped in the creation of the new Cal Poly Animation Club, as well as coordinate and manage events and oversee club operations.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Fall 2021"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaTerminal />} >
                        <h4 className="vertical-timeline-element-title">Grace Hopper Conference 2021</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Attended the respected Grace Hopper Conference virtually, watching guest speakers and participating in various events. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Spring 2021 - June 2022"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaHandHolding />} >
                        <h4 className="vertical-timeline-element-title">Hack4Impact Cal Poly Director of Community</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Worked to coordinate events, plan volunteer activities, and work on the Hack4Impact Cal Poly board to promote a positive club experience for all members.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Summer 2021"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaTerminal />} >
                        <h4 className="vertical-timeline-element-title">Adobe Software Engineering Internship</h4>
                        <h4 className="vertical-timeline-element-subtitle">Seattle, WA</h4>
                        <p> Interned at Adobe during the summer of 2021 as a part of the Sensei Custom Solutions Team. I gained experience with various frontend technologies working with Adobe's machine learning and artificial intelligence imaging tools. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Winter 2020 - Summer 2021"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaCodeBranch />} >
                        <h4 className="vertical-timeline-element-title">Hack4Impact Technical Lead</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Led 7 programmers in the development of a full stack MERN web application for a nonprofit called Happy Hats for Kids in Hospitals. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Fall 2020"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaTerminal />} >
                        <h4 className="vertical-timeline-element-title">Grace Hopper Conference 2020</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Attended the respected Grace Hopper Conference virtually, watching guest speakers and participating in various events. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="June 2020 - July 2020"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaBook />} >
                        <h4 className="vertical-timeline-element-title">AT&T Externship</h4>
                        <h4 className="vertical-timeline-element-subtitle">Seattle, WA</h4>
                        <p> Completed 80 hours of coursework covering various topics including media, communication, design, machine learning, and the Internet of Things</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Spring 2020 - Spring 2021"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaDollarSign />} >
                        <h4 className="vertical-timeline-element-title">Hack4Impact Director of Finance</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Organized and maintained all finances, coordinated fundraisers, and met on a weekly basis with the director board for Hack4Impact Cal Poly</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Spring 2020 - Spring 2021"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaDesktop />} >
                        <h4 className="vertical-timeline-element-title">WISH Webmaster</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Designed and deployed new WISH Cal Poly website, seen at <a rel="noopener noreferrer" href="https://wishcalpoly.com/" target="_blank">wishcalpoly.com</a></p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Summer 2020"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaLightbulb />} >
                        <h4 className="vertical-timeline-element-title">Quarter Plus Learning Assistant</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Designed study sessions and activities for 300 first year students in an accelerated summer program over Zoom</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="August 2019 - June 2023"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaBook />} >
                        <h4 className="vertical-timeline-element-title">California Polytechnic State University</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p>Bachelor of Computer Science, Minor in Computing for Interactive Arts</p>
                        <p>Cumulative GPA: Unweighted 3.935 (Dean's List 10/10 Quarters)</p>
                        <p>Women Involved in Software and Hardware, Hack4Impact Cal Poly Co Executive Director, Cal Poly Animation Vice President</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Summer 2018"
                        iconStyle={{ background: '#a8c4c7', color: '#fff' }}
                        icon={<FaDesktop />} >
                        <h4 className="vertical-timeline-element-title">Girls Who Code (AT&T)</h4>
                        <h4 className="vertical-timeline-element-subtitle">Seattle, WA</h4>
                        <p>
                        Web Development, Data Science, Robotics, Game Development, Industry Knowledge
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163'}}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="September 2016 - June 2019"
                        iconStyle={{ background: '#a8c4c7', color: '#fff'}}
                        icon={<FaBook />} >
                        <h4 className="vertical-timeline-element-title">High School</h4>
                        <h4 className="vertical-timeline-element-subtitle">Seattle, WA</h4>
                        <p>
                        Valedictorian, Full IB Diploma Program (40/45 Points), Girls Who Code Club President, Yoga Club President, National Honor Society, 
                        JV Volleyball MVP, Recognized Film Student of the 2019 Graduating Class
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
                <Footer />
            </div>
        );
    }
}

export default AboutMe;