import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/Merriweather-Light.ttf';
import React from 'react';
import './styles/index.css';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Reviews from './pages/Reviews';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import { createRoot } from 'react-dom/client';


const App = () => {
    return (
        <Router>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/about-me" element={<AboutMe/>}/>
              <Route exact path="/reviews" element={<Reviews/>}/>
              <Route exact path="/portfolio" element={<Portfolio/>}/>
              <Route exact path="/resume" element={<Resume/>}/>
            </Routes>
        </Router>
      );
    }

const container = document.getElementById('root');
const root = createRoot(container)
root.render(<App/>)