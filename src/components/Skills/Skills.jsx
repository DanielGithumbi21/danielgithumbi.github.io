import React from "react";
import styles from './Skills.module.css';
const Skills = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Skills</h1>
      <h5>Reactjs:</h5>
      <div class="progress">
        <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">60%</div>
      </div>
      <br />
      <h5>Angularjs:</h5>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: "30%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">30%</div>
      </div>
      <br />
      <h5>Node(express):</h5>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: "20%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">20%</div>
      </div>
      <br />
      <h5>Html,Css,Bootstrap:</h5>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">80%</div>
      </div>
      <br />
      <h5>sql:</h5>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">50%</div>
      </div>
      <br />
      <h5>MongoDB:</h5>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
      </div>
      <br />
      <h5>Java:</h5>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">40%</div>
      </div>
    </div>
  );
};
export default Skills;
