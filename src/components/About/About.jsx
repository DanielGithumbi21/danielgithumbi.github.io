import React from "react";
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h2>About Me</h2>
      <br />
      <div className={styles.education}>
        <h6>Education:</h6><p className="lead">I am currently a third year student at Kenyatta University pursuing an undegraduate bachelor degree in Mathematics and computer science.I have learnt alot on both sides, how to approach mathematical problems using IT which will at last help me tackle real-world problems.</p>
        <h6>Experience:</h6> <p className="lead">On the experience part I am an entry software developer,both front-end and backend but I mostly specialize on the front-end.The main experience I got is with my personal projects. I also have had a chance to take part in the Andela BuildforSDG challenge 2020</p>
        <h6>Personal Interests</h6> <li className="lead">Innovation</li>
        <li className="lead">Art</li>
      </div>
    </div>
  );
};

export default About;
