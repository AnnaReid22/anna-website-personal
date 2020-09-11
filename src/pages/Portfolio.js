import React from "react";
import "../styles/contact.css";
import "../styles/index.css";
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import PortfolioCard from '../components/PortfolioCard';
import polarBear2 from '../images/portfolioImages/polarBear2.png';
import polarBear3 from '../images/portfolioImages/polarbear3.png';
import polarBear4 from '../images/portfolioImages/polarBear4.png';
import b1 from '../images/portfolioImages/blender1.png';
import b2 from '../images/portfolioImages/blender2.png';
import b3 from '../images/portfolioImages/blender3.png';
import w1 from '../images/portfolioImages/w1.png';
import w2 from '../images/portfolioImages/w2.png';
import w3 from '../images/portfolioImages/w3.png';
import f1 from '../images/portfolioImages/f1.png';
import f2 from '../images/portfolioImages/f2.png';
import f3 from '../images/portfolioImages/f3.png';
import e1 from '../images/portfolioImages/e1.png';
import e2 from '../images/portfolioImages/e2.png';
import e3 from '../images/portfolioImages/e3.png';
import h1 from '../images/portfolioImages/h1.png';
import h2 from '../images/portfolioImages/h2.png';
import h3 from '../images/portfolioImages/h3.png';
import t1 from '../images/portfolioImages/t1.png';
import t2 from '../images/portfolioImages/t2.png';
import t3 from '../images/portfolioImages/t3.png';


const portfolio = [
    {
        title: "Object-Oriented Programming Game",
        date: "Summer 2020",
        description: "This was a classroom-based project where I refactored and redesigned Java code while learning object-oriented programming principles.  For the final project, I worked with a partner to make the code unique, as well as add functionality such as changing entities and world components that interact.",
        image1: t1,
        image2: t2,
        image3: t3
    },
    {
        title: "Hack4Impact Cal Poly Website",
        date: "Spring 2020",
        description: "This year, I got the opportunity to work with my amazing Hack4Impact director team to help redesign the Hack4Impact Cal Poly Website. We used React.js and Next.js. Many of the skills I learned I could then apply to this website design. You can see the Hack4Impact Cal Poly website here: https://calpoly.hack4impact.org/",
        image1: h1,
        image2: h2,
        image3: h3
    },
    {
        title: "Environmental Center of San Luis Obispo Beach Cleanup Database",
        date: "Winter 2019 - Spring 2020",
        description: "I got the opportunity to help design a large project for a club, Hack4Impact Cal Poly, during my freshman year of college. I worked mainly with the frontend, and it was so interesting to learn about all of the interconnected components that go into website design. In addition, I got to help build this website for a nonprofit in SLO county, which was an incredible experience. I learned so much and am so thankful for the opportunity!",
        image1: e1,
        image2: e2,
        image3: e3
    },
    {
        title: "Film Organization UI",
        date: "Spring 2019",
        description: "I designed this User Interface in my programming class in high school as a part of the IB Computer Science Curriculum. I worked with a client to design this project and meet their needs. They wanted an organizational interface that could sort their movie titles by name, format, and genre, as well as a sum total functionality for the stored information. I programmed this user interface in Java.",
        image1: f1,
        image2: f2,
        image3: f3
    },
    {
        title: "Original Film Review Website",
        date: "Summer 2018",
        description: "I began the first version of this website in 2018 using HTML, CSS, and JavaScript. This was my first exposure to web development. In addition, I created functionality to use the Marvel API, which I could use to search character names. Once I learned about React, I decided that I wanted to redesign the website and make it look better.",
        image1: w1,
        image2: w2,
        image3: w3
    },
    {
        title: "Blender Animation",
        date: "Summer 2018",
        description: "In my summer of 2018, I decided to learn some animation skills. I did a few intro courses and learned some basics.",
        image1: b1,
        image2: b2,
        image3: b3
    },
    {
        title: "Polar Bear Game & Website",
        date: "Summer 2018",
        description: "For my final project in Girls Who Code, my group and I designed a game and website to bring awareness to polar bears. We used Java, HTML, CSS, and JavaScript.",
        image1: polarBear2,
        image2: polarBear3,
        image3: polarBear4,
    }
]
class Portfolio extends React.Component {

    renderPortfolio() {
        let portfolioCards = portfolio.map((content) => {
            return <PortfolioCard title={content.title} date={content.date} description={content.description} image1={content.image1} image2={content.image2} image3={content.image3}/>
        });
        return (
          <>
              {portfolioCards}
          </>
        );
      }
    render() {
        return (
            <div id="contact" className="page">
                <Header />
                {this.renderPortfolio()}
                <Footer />
            </div>
        );
    }
}

export default Portfolio;