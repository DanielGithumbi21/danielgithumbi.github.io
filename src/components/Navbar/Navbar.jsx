import React from "react";
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h4 className={styles.brand}>DANIEL GITHUMBI</h4>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/'>HOME</Link>
            </li>
            <li className="nav-item">
              <Link to='/about'>ABOUT ME</Link>
            </li>
            <li className="nav-item">
              <Link to='/skills'>SKILLS</Link>
            </li>
            <li className="nav-item">
              <Link to='/projects'>PROJECTS</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact'>CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );

};
export default Navbar;


