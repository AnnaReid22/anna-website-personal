import React from "react";
import "../styles/aboutMe.css";
import "../styles/index.css";
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBook, FaDesktop, FaLightbulb, FaDollarSign } from 'react-icons/fa';

class AboutMe extends React.Component {
    render() {
        return (
            <div id="about-me">
                <Header />
                <VerticalTimeline>
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
                        {/* <div style={{textAlign: 'center'}}>
                        <img width="50%" src={require('../images/quarter.png')} alt="Q+"></img>
                        </div> */}
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Summer 2020"
                        iconStyle={{ background: '#4aa2b7', color: '#fff' }}
                        icon={<FaLightbulb />}
                    >
                        <h4 className="vertical-timeline-element-title">Cal Poly Animation Club Vice President</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Designed study sessions and activities for 300 first year students in an accelerated summer program over Zoom</p>
                        {/* <div style={{textAlign: 'center'}}>
                        <img width="50%" src={require('../images/quarter.png')} alt="Q+"></img>
                        </div> */}
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Summer 2020"
                        iconStyle={{ background: '#4aa2b7', color: '#fff' }}
                        icon={<FaLightbulb />}
                    >
                        <h4 className="vertical-timeline-element-title">Hack4Impact Technical Lead</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Designed study sessions and activities for 300 first year students in an accelerated summer program over Zoom</p>
                        {/* <div style={{textAlign: 'center'}}>
                        <img width="50%" src={require('../images/quarter.png')} alt="Q+"></img>
                        </div> */}
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Summer 2020"
                        iconStyle={{ background: '#4aa2b7', color: '#fff' }}
                        icon={<FaLightbulb />}
                    >
                        <h4 className="vertical-timeline-element-title">Grace Hopper Conference 2020</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Designed study sessions and activities for 300 first year students in an accelerated summer program over Zoom</p>
                        {/* <div style={{textAlign: 'center'}}>
                        <img width="50%" src={require('../images/quarter.png')} alt="Q+"></img>
                        </div> */}
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Summer 2020"
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
                        date="Spring 2020"
                        iconStyle={{ background: '#4aa2b7', color: '#fff' }}
                        icon={<FaDesktop />}
                    >
                        <h4 className="vertical-timeline-element-title">WISH Webmaster</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Designed and deployed new WISH Cal Poly website, seen at <a href="https://wishcalpoly.com/" target="_blank">wishcalpoly.com</a></p>
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