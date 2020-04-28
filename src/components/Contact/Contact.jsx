import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2>Contact me</h2>
      <div className={styles.email}>
        <p>Email:<p>danielgithumbi1998@gmail.com</p></p>

        <p>Phone:<p>0797247756</p></p>
        <div className={styles.icon}>
          <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
          <a href="#"><FontAwesomeIcon icon={['fab', 'github']} /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
