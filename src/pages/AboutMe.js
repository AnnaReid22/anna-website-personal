import React from "react";
import "../styles/aboutMe.css";
import "../styles/index.css";
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBook, FaDesktop, FaLightbulb } from 'react-icons/fa';

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
                        iconStyle={{ background: '#EBA4A6', color: '#fff' }}
                        icon={<FaLightbulb />}
                    >
                        <h3 className="vertical-timeline-element-title">Quarter Plus Learning Assistant</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p> Designed study sessions and activities for 300 first year students in an accelerated summer program over Zoom</p>
                        <img width="100%" src={require('../images/quarter.png')} alt="Q+"></img>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="August 2019 - June 2023"
                        iconStyle={{ background: '#EBA4A6', color: '#fff' }}
                        icon={<FaBook />}
                    >
                        <h3 className="vertical-timeline-element-title">AT&T Externship</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bothell, WA</h4>
                        <p>80 hours of coursework covering various topics including media, communication, design, machine learning, and the Internet of Things</p>
                        <img width="100%" src={require('../images/att.jpg')} alt="GWC"></img>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="August 2019 - June 2023"
                        iconStyle={{ background: '#EBA4A6', color: '#fff' }}
                        icon={<FaBook />}
                    >
                        <h3 className="vertical-timeline-element-title">California Polytechnic State University</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Luis Obispo, CA</h4>
                        <p>Bachelor of Computer Science, Minor in Computing for Interactive Arts and Concentration in Interactive Entertainment</p>
                        <p>Cumulative GPA: Unweighted 3.920 (Dean's List 3/3 Quarters)</p>
                        <p>Women Involved in Software and Hardware Webmaster, Hack4Impact Cal Poly Finance Director, Society of Women Engineers, Cal Poly Quarter Plus Program</p>
                        <img width="100%" src={require('../images/cp.jpg')} alt="GWC"></img>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163' }}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="Summer 2018"
                        iconStyle={{ background: '#EBA4A6', color: '#fff' }}
                        icon={<FaDesktop />}
                    >
                        <h3 className="vertical-timeline-element-title">Girls Who Code (AT&T)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Redmond, WA</h4>
                        <p>
                        Web Development, Data Science, Robotics, Game Development, Industry Knowledge
                        </p>
                        <img width="100%" src={require('../images/gwc.jpg')} alt="GWC"></img>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#f4f4f4', color: '#506163'}}
                        contentArrowStyle={{ borderRight: '7px solid  #506163' }}
                        date="September 2016 - June 2019"
                        iconStyle={{ background: '#EBA4A6', color: '#fff'}}
                        icon={<FaBook />}
                    >
                        <h3 className="vertical-timeline-element-title">Inglemoor High School</h3>
                        <h4 className="vertical-timeline-element-subtitle">Kenmore, WA</h4>
                        <p>
                        Valedictorian, Full IB Diploma Program (40/45 Points), Girls Who Code Club President, Yoga Club President, National Honor Society, 
                        JV Volleyball MVP, Recognized Film Student of the 2019 Graduating Class
                        </p>
                        <img width="100%" src={require('../images/grad.jpg')} alt="Graduation"></img>
                    </VerticalTimelineElement>
                </VerticalTimeline>
                <Footer />
            </div>
        );
    }
}

export default AboutMe;