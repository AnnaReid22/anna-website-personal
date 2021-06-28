import React from "react";
import "../styles/aboutMe.css";
import "../styles/index.css";
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import { Link } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
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
                        <Col>
                            <img src={Anna} className="image-intro"></img>
                        </Col>
                        <Col xs={9}>
                            <div className="large-intro-text">
                                Hello, I'm Anna!
                            </div>
                            <div className="medium-intro-text">
                                I'm a Computer Science student at California Polytechnic State University, San Luis Obispo, and I enjoy web development!
                            </div>
                            <div className="small-intro-text">
                                Over the years, I've gained experience with HTML, CSS, and JavaScript, and began working with React when I was in college.
                                Since then, I've been developing my skills with JavaScript frameworks and full stack application development. I also am a 
                                big fan of the arts and how they connect to computer science, so in my free time I enjoy working with the Adobe products, watching movies,
                                and writing reviews about them.
                            </div>
                            <Row className="row-button">
                                <Col>
                                    <Link to="/resume"><Button variant="info">Resume</Button></Link>
                                </Col>
                                <Col>
                                    <Link to="/reviews"><Button variant="info">Reviews</Button></Link>
                                </Col>
                                <Col>
                                    <Link to="/portfolio"><Button variant="info">Projects</Button></Link>
                                </Col>
                                <Col xs={8}>
                                </Col>
                                
                            </Row>

                        </Col>
                    </Row>
                </div>
                <div className="message-text">
                        My experience and activities!
                </div>
                <div className="message-subtext">
                    Things I've done that I think are cool.
                </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Spring 2021 - Present"
                        iconStyle={{ background: '#4aa2b7', color: '#fff' }}
                        icon={<FaHandHolding />}
                    >
                        <h4 className="vertical-timeline-element-title">Hack4Impact Cal Poly Director of Community</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Working to coordinate events, plan volunteer activities, and work on the Hack4Impact Cal Poly board to promote a positive club experience for all members.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Spring 2021 - Present"
                        iconStyle={{ background: '#4aa2b7', color: '#fff' }}
                        icon={<FaFilm />}
                    >
                        <h4 className="vertical-timeline-element-title">Cal Poly Animation Club Vice President</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Helped in the creation of the new Cal Poly Animation Club, as well as working to coordinate and manage events for the upcoming school year.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Winter 2020 - Summer 2021"
                        iconStyle={{ background: '#4aa2b7', color: '#fff' }}
                        icon={<FaCodeBranch />}
                    >
                        <h4 className="vertical-timeline-element-title">Hack4Impact Technical Lead</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Led 7 programmers in the development of a full stack MERN web application called Happy Hats for Kids in Hospitals. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Fall 2020"
                        iconStyle={{ background: '#4aa2b7', color: '#fff' }}
                        icon={<FaTerminal />}
                    >
                        <h4 className="vertical-timeline-element-title">Grace Hopper Conference 2020</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Attended the respected Grace Hopper Conference virtually, watching guest speakers and participating in various events. </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="June 2020 - July 2020"
                        iconStyle={{ background: '#4aa2b7', color: '#fff' }}
                        icon={<FaBook />}
                    >
                        <h4 className="vertical-timeline-element-title">AT&T Externship</h4>
                        <h4 className="vertical-timeline-element-subtitle">Bothell, WA</h4>
                        <p>80 hours of coursework covering various topics including media, communication, design, machine learning, and the Internet of Things</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Spring 2020 - Spring 2021"
                        iconStyle={{ background: '#4aa2b7', color: '#fff' }}
                        icon={<FaDollarSign />}
                    >
                        <h4 className="vertical-timeline-element-title">Hack4Impact Director of Finance</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Organized and maintained all finances, coordinated fundraisers, and met on a weekly basis with the director board for Hack4Impact Cal Poly</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Spring 2020 - Spring 2021"
                        iconStyle={{ background: '#4aa2b7', color: '#fff' }}
                        icon={<FaDesktop />}
                    >
                        <h4 className="vertical-timeline-element-title">WISH Webmaster</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Designed and deployed new WISH Cal Poly website, seen at <a rel="noopener noreferrer" href="https://wishcalpoly.com/" target="_blank">wishcalpoly.com</a></p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Summer 2020"
                        iconStyle={{ background: '#4aa2b7', color: '#fff' }}
                        icon={<FaLightbulb />}
                    >
                        <h4 className="vertical-timeline-element-title">Quarter Plus Learning Assistant</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Designed study sessions and activities for 300 first year students in an accelerated summer program over Zoom</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="August 2019 - June 2023"
                        iconStyle={{ background: '#4aa2b7', color: '#fff' }}
                        icon={<FaBook />}
                    >
                        <h4 className="vertical-timeline-element-title">California Polytechnic State University</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p>Bachelor of Computer Science, Minor in Computing for Interactive Arts</p>
                        <p>Cumulative GPA: Unweighted 3.952 (Dean's List 4/4 Quarters)</p>
                        <p>Women Involved in Software and Hardware Webmaster, Hack4Impact Cal Poly Director of Community, Society of Women Engineers, Cal Poly Quarter Plus Program</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Summer 2018"
                        iconStyle={{ background: '#4aa2b7', color: '#fff' }}
                        icon={<FaDesktop />}
                    >
                        <h4 className="vertical-timeline-element-title">Girls Who Code (AT&T)</h4>
                        <h4 className="vertical-timeline-element-subtitle">Redmond, WA</h4>
                        <p>
                        Web Development, Data Science, Robotics, Game Development, Industry Knowledge
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163'}}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="September 2016 - June 2019"
                        iconStyle={{ background: '#4aa2b7', color: '#fff'}}
                        icon={<FaBook />}
                    >
                        <h4 className="vertical-timeline-element-title">Inglemoor High School</h4>
                        <h4 className="vertical-timeline-element-subtitle">Kenmore, WA</h4>
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