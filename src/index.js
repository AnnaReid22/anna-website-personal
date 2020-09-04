import './fonts/Merriweather-Light.ttf';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Reviews from './pages/Reviews';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

const routing = (
    <div className = "Site">
        <Router>
            <div className="Site-content">
            <Switch >
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/Home">
                    <Home />
                </Route>
                <Route path="/AboutMe">
                    <AboutMe />
                </Route>
                <Route path="/Reviews">
                    <Reviews />
                </Route>
                <Route path="/Portfolio">
                    <Portfolio />
                </Route>
                <Route path="/Contact">
                    <Contact />
                </Route>
            </Switch>
            </ div>
        </Router>  
    </div>
);

ReactDOM.render(routing, document.getElementById('root'));