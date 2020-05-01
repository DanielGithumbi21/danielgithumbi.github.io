import React from "react";
import Home from './components/Home/Home';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee);

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/skills' component={Skills} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </div>
    </Router>
  );
};
export default App;
