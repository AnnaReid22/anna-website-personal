import React from "react";
import "../styles/contact.css";
import "../styles/index.css";
import "../styles/portfolio.css";
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import { Row, Col } from 'react-bootstrap'
import PortfolioCard from '../components/PortfolioCard';
import polarBear4 from '../images/portfolioImages/polarBear4.png';
import b1 from '../images/portfolioImages/blender1.png';
import w1 from '../images/portfolioImages/w1.png';
import f1 from '../images/portfolioImages/f1.png';
import e1 from '../images/portfolioImages/e1.png';
import h1 from '../images/portfolioImages/h1.png';
import t1 from '../images/portfolioImages/t1.png';
import huff1 from '../images/portfolioImages/huff1.png';
import matrix1 from '../images/portfolioImages/matrix1.png';
import art182 from '../images/portfolioImages/art182.png';
import art1831 from '../images/portfolioImages/art1831.png';
import hh1 from '../images/portfolioImages/hh1.png';
import im1 from '../images/portfolioImages/im1.png';
import lop1 from '../images/portfolioImages/lop0.jpg';
import ttt1 from '../images/portfolioImages/ttt1.png';
import wish from '../images/portfolioImages/wish.png';
import life1 from '../images/portfolioImages/group.png';
import plutogame1 from '../images/portfolioImages/plutogame1.png';
import virprod from '../images/portfolioImages/virprod.jpg';
import sam from '../images/portfolioImages/sam1.png';


const portfolio = [
    {
        title: "Virtual Production + Nvidia Omniverse",
        date: "September 2022 - March 2023",
        description: "This was an exploratory project to investigate Virtual Production, USD, Unreal Engine 5, and Nvidia Omniverse. Deliverables included a research paper and demonstrative scene of USD and virtual production processes.",
        image1: virprod,
        link: "https://youtu.be/OxLgFYNQiuk"
    },
    {
        title: "Sam's Story",
        date: "March 2022 - December 2022",
        description: "This is a video game that follows the axolotl Sam for my senior project. I created and animated Sam, as well as worked in Unity to make the game.",
        image1: sam,
        link: "https://anna-does-cs.itch.io/sams-story"
    },
    {
        title: "Life VR Experience",
        date: "January 2022 - June 2022",
        description: "I worked on a VR experience with 3 other students using Blender, Unity, Oculus, Substance Painter, Mixamo and PlasticSCM for my Computing for Interactive Arts Minor Capstone. I developed the story and characters in Blender, textured in Adobe Substance Painter, used Mixamo for animations, & worked in Unity to create the piece.",
        image1: life1,
        link: "https://youtu.be/jyQLX9kEVbA"
    },
    {
        title: "Life on Pluto Game",
        date: "March 2022 - June 2022",
        description: "In this project, I worked with three other students to design an adventure game using OpenGL and C++ where the player is a rocket trying to fly to Pluto, while avoiding asteroids and other planets along the way. I learned about and implemented view frustum culling, shadow mapping, world building, particle systems, audio integration using SoLoud and MiniAudio, and overall team collaboration.",
        image1: plutogame1,
        link: "https://youtu.be/Uj4sQazUZ-8"
    },
    {
        title: "Life on Pluto?",
        date: "January 2022 - March 2022",
        description: "In my 3D modeling class, I spent the quarter creating a short film called 'Life on Pluto?' where an astronaut goes on an adventure to Pluto after learning that it has been de planetized. I worked with 3 other students.",
        image1: lop1,
        link: "https://www.youtube.com/watch?v=WxjkbUzN-IY"
    },
    {
        title: "Iron Man Flight Game",
        date: "September 2021 - December 2021",
        description: "I designed a game in Intro to Computer Graphics that simulates Iron Man's flight. I used OpenGL, C++, and GLM. The goal is to find and save the other Marvel characters in the scene and avoid enemies.",
        image1: im1,
        link: "https://www.youtube.com/watch?v=fyVBMM2WE7E&t=0s"
    },
    {
        title: "Time Travel Tracker Web App",
        date: "September 2021 - December 2021",
        description: "I worked with 3 classmates to develop a time management system with a to do list and calendar. We used React, Flask, and Heroku to build and deploy our application.",
        image1: ttt1,
        link: "https://github.com/AnnaReid22/time-travel-tracker"
    },
    {
        title: "Happy Hats for Kids in Hospitals Web App",
        date: "Winter 2020 - Summer 2021",
        description: "I led a team of 7 developers to design and program a MERN stack web application for the nonprofit Happy Hats for Kids in Hospitals. We built this application as a volunteer management system for volunteers to sign up for events and admins to manage those events.",
        image1: hh1,
        link: "https://calpoly.hack4impact.org/projects/happy-hats"
    },
    {
        title: "After Effects, Photoshop, & Illustrator",
        date: "Spring 2021",
        description: "I developed my skills in Illustrator, Photoshop, After Effects to create an animation!",
        image1: art1831
    },
    {
        title: "Systems Multiprocess Matrix Solver",
        date: "Winter 2020",
        description: "I implemented a recursive algorithm to solve for matrixes, by finding the matrixes of minors, then the cofactor, followed by the adjugate and inverse. I also used multiprocessing for optimization.",
        image1: matrix1,
    },
    {
        title: "Huffman Encoding",
        date: "Winter 2020",
        description: "I wrote a Huffman encoding and decoding program for images in a systems programming class using C and C++. I iterated through pixel values, malloced space, and created a Huffman tree to compress and decompress the image.",
        image1: huff1
    },
    {
        title: "WISH Website",
        date: "Fall 2020-Spring 2021",
        description: "I completed the design and deployment of a new Women Involved in Software and Hardware Website using HTML, CSS, JavaScript, and GitHub Pages and updated it with events throughout the year.",
        image1: wish,
        link: "https://wishcalpoly.com/"
    },
    {
        title: "Illustrator, InDesign, & Photoshop",
        date: "Fall 2020",
        description: "I gained experience using these tools and working on projects to explore my creativity.",
        image1: art182,
    },
    {
        title: "OOP Game",
        date: "Summer 2020",
        description: "I refactored Java code while learning OOP principles. For the final project, I worked with a partner to add functionality, like components that interact.",
        image1: t1
    },
    {
        title: "Hack4Impact Cal Poly Website",
        date: "Spring 2020",
        description: "I worked with the Hack4Impact director team to help redesign the Hack4Impact Cal Poly Website. We used React.js and Next.js.",
        image1: h1,
        link: "https://calpoly.hack4impact.org/"
    },
    {
        title: "ECOSLO Beach Cleanup App",
        date: "Winter 2019 - Spring 2020",
        description: "I got the opportunity to help design a large project for a club, Hack4Impact Cal Poly, during my freshman year. I worked mainly with the frontend of the app. In addition, I helped build this website for a nonprofit in SLO county.",
        image1: e1,
        link: "https://calpoly.hack4impact.org/projects/ecoslo"
    },
    {
        title: "Film Organization UI",
        date: "Spring 2019",
        description: "I designed this User Interface in my programming class in high school as a part of the IB Computer Science Curriculum. I worked with a client to design this project and meet their needs. They wanted an organizational interface that could sort their movie titles by name, format, and genre, as well as a sum total functionality for the stored information. I programmed this user interface in Java.",
        image1: f1
    },
    {
        title: "Original Website",
        date: "Summer 2018",
        description: "I began the first version of this website using HTML, CSS, and JavaScript. I created functionality to use the Marvel API, which I could use to search character names. Once I learned about React, I decided that I wanted to redesign the website.",
        image1: w1
    },
    {
        title: "Blender Animation",
        date: "Summer 2018",
        description: "I learned some animation skills in Blender, including introductory courses and some basics.",
        image1: b1
    },
    {
        title: "Polar Bear Game & Website",
        date: "Summer 2018",
        description: "For my final project in Girls Who Code, my group and I designed a game and website to bring awareness to polar bears. We used Java, HTML, CSS, and JavaScript.",
        image1: polarBear4
    }
]






class Portfolio extends React.Component {
    renderPortfolio() {
        let portfolioCards = portfolio.map((content) => {
            return <PortfolioCard 
                key={Math.random()}
                title={content.title}
                date={content.date}
                description={content.description}
                image1={content.image1}
                pdf={content.pdf}
                link={content.link} />
        });
        return (
            <Col>
                <Row className="card-container">
                    {portfolioCards}
                </Row>
            </Col>
        );
    }
    render() {
        return (
            <div id="portfolio" className="page">
                <Header />
                {this.renderPortfolio()}
                <Footer />
            </div>
        );
    }
}

export default Portfolio;