import React from "react";
import styles from './Projects.module.css'
import ProjectImage1 from './image2.png'

const Projects = () => {
  return (
    <div class={styles.container}>
      <div class="row padding">
        <div class="col-md-12 col-lg-4">
          <h2>Personal Projects</h2>
          <img src={ProjectImage1} alt="" />

        </div>
        <div class="col-lg-6">

          <p>Name:OnlineStore</p>
          <p>Languages:Html,CSS,Bootstrap.</p>
          <p>This is an e-commerce front-end page.<br /> It is a clothe store where anyone can access all types of fashion</p>
          <h4>Status: Complete</h4>
          <h4>Link: Not uploaded</h4>
        </div>

      </div>

    </div>





  );
};
export default Projects;
