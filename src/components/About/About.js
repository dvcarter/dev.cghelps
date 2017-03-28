import React, { PropTypes } from 'react'
import styles from './About.css'
//import OurStory from './ourstory.jpg'

const About = () => {
    return (
            <div>
                <div className={styles.title}>
                    <h1> About Us</h1>
                </div>
                <div>
                    <p> At Common Ground, we're dedicated to helping people move from crisis to hope. </p>
                </div>
                <div className={styles.holder}>
                    <div className={styles.boxes}>
                        <a href='/about-us/our-story' className={styles.box}>
                            <div className={styles.headline}>
                                <span>Our Story</span>
                            </div>
                        </a>
                        <a href='#' className={styles.box}>
                            <div className={styles.headline}>
                                News & Events
                            </div>
                        </a>
                        <a href='/get-help' className={styles.box}>
                            <div className={styles.headline}>
                                Programs & Services
                            </div>
                        </a>
                        <a href='/about-us/visit-us-today' className={styles.box}>
                            <div className={styles.headline}>
                                Locations
                            </div>
                        </a>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
    )
}

About.propTypes = {
    about: PropTypes.array.isRequired,
}

export default About
