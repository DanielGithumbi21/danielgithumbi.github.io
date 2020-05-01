import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Home.module.css';
import ProfileImage from './image.jpg';

const Home = () => {
    return (
        <div>
            <div className="container-fluid">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={ProfileImage} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-md-block text-center">
                                <p>DANIEL GITHUMBI</p>
                                <p className="display-8">Software developer.</p>
                                <a className={styles.link} href="https://www.linkedin.com/in/daniel-githumbi-55116a1a0"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                                <a className={styles.link} href="https://github.com/DanielGithumbi21"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.container}>
                <h2>Contact me</h2>
                <div className={styles.email}>
                    <p>Email:<p>danielgithumbi1998@gmail.com</p></p>

                    <p>Phone:<p>0797247756</p></p>
                </div>
            </div>
        </div>
    );
};

export default Home;