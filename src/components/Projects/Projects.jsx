import React from "react";
import styles from './Projects.module.css';
import ProjectImage1 from './image2.png';
import ProjectImage2 from './image1.png';
import ProjectImage3 from './image3.png';
import ProjectImage4 from './image4.png';


const Projects = () => {
  return (
    <div className={styles.container}>
      <div className="row padding">
        <div className="col-md-12 col-lg-4">
          <h2>Personal Projects</h2>
          <img src={ProjectImage1} alt="ProjectImage1" className="img-fluid" />

        </div>
        <div class="col-lg-6">

          <p className="lead">Name: ONLINE STORE</p>
          <p className="lead">languages: HTML,CSS,Bootstrap 4</p>
          <p className="lead">This is an e-commerce front-end page.<br /> It is a clothe store where anyone can access all types of fashion</p>
          <h5 className="display-4">Status: Complete</h5>
          <h5 className="display-4">Link: Not uploaded</h5>
        </div>

      </div>
      <hr />
      <div className="row padding">
        <div className="col-md-12 col-lg-4">
          <img src={ProjectImage3} alt="ProjectImage3" className="img-fluid" />

        </div>
        <div className="col-lg-6">

          <p className="lead">Name:COVID-19 TRACKER</p>
          <p className="lead">Languages: React Material-UI,React ChartJS</p>
          <p className="lead">This is a graphical representation of the number of corona virus infected,recovered and death cases in the whole world</p>
          <h5 className="display-4">Status: Complete</h5>
          <h5 className="display-4">Link: <a href="https://github.com/DanielGithumbi21/Covid-19">https://github.com/DanielGithumbi21/Covid-19</a></h5>
        </div>

      </div>
      <hr />
      <div className="row padding">
        <div className="col-md-12 col-lg-4">
          <img src={ProjectImage4} alt="ProjectImage4" className="img-fluid" />

        </div>
        <div className="col-lg-6">

          <p className="lead">Name:EXERCISE TRACKER</p>
          <p className="lead">Languages: React,Bootstrap,MongoDB,express</p>
          <p className="lead">A simple App where one can keep his/her exercise activities record.</p>
          <h5 className="display-4">Status: Complete</h5>
          <h5 className="display-4">Link: Not Uploaded</h5>
        </div>

      </div>
      <hr />
      <div className="row padding">
        <div className="col-md-12 col-lg-4">
          <img src={ProjectImage2} alt="ProjectImage2" className="img-fluid" />

        </div>
        <div className="col-lg-6">

          <p className="lead">Name:MUSIC APP</p>
          <p className="lead">Languages:Html,CSS,Bootstrap.</p>
          <p className="lead">This is a music front-end page.</p>
          <h5 className="display-4">Status:Not complete</h5>
          <h5 className="display-4">Link: Not uploaded</h5>
        </div>

      </div>
      <hr />

    </div>





  );
};
export default Projects;
