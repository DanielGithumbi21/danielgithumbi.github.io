import React from "react";
import ProfileImage from "./image.jpg";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.display}>

        <img src={ProfileImage} />
        <div className={styles.middle}>
          <h3>A front-end developer in react among others</h3>
          Email:<p>danielgithumbi1998@gmail.com</p>
          phone:<p>0797247756</p>
        </div>
      </div>

    </div>
  );
};
export default Home;
