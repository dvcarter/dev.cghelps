import React, { PropTypes } from 'react'
import styles from './About.css'

const About = ({ about }) => {
    return (
            <div>
                <div className={styles.title}>
                    <h1> About </h1>
                </div>
                <div className={styles.holder}>
                    {about.map((abt) => (
                            <div className={styles.options}>
                                <div className={styles.topics}>
                                    <h2 className={styles.subtitle}>
                                        {abt.subtitle}
                                    </h2>
                                    <div className={styles.description}>
                                        {abt.description}
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
    )
}

About.propTypes = {
    about: PropTypes.array.isRequired,
}

export default About
