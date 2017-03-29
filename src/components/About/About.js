import React, { PropTypes } from 'react'
import styles from './About.css'
//import OurStory from './ourstory.jpg'

const About = () => {
    return (
            <div>
                <div className={styles.title}>
                    <h5> About Us</h5>
                </div>
                <div className={styles.aboutText}>
                    At Common Ground, we're dedicated to helping people move from crisis to hope.
                </div>
                <div className={styles.holder}>
                    <div className={styles.boxes}>
                        <a href='/about-us/our-story' className={styles.box}>
                            <div className={styles.headline}>
                                <span>Our Story</span>
                            </div>
                        </a>
                        <a href='/posts' className={styles.box}>
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
                </div>
                <div className={styles.title}>
                    <h5> Contact Us  </h5>
                </div>
                <div className={styles.aboutText}>
                    Contact text here
                </div>
                <div className={styles.title}>
                    <h5>Locations</h5>
                </div>
                <div className={styles.aboutText}>
                    Location Text here
                </div>
                <div className={styles.title}>
                    <h5>Careers </h5>
                </div>
                <div className={styles.aboutText}>
                    <p>
                        Want to help people move from crisis to hope? Join our team at Common Ground. In addition to
                        the rewards of positively impacting your local community, employee benefits include:
                        medical and dental insurance, life insurance, short and long-term disability insurance,
                        flexible spending account, paid time off, paid holidays, training and opportunities for
                        advancement, and retirement savings (403b).
                    </p>
                    <a href="http://commongroundhelps.applicantpro.com" className={styles.careerlink}>
                        View our current openings >
                    </a>
                </div>
            </div>
    )
}

About.propTypes = {
    about: PropTypes.array.isRequired,
}

export default About
