import React, { PropTypes } from 'react'
import styles from './ShowCase.css'

const ShowCase = ({ showCase }) => {
    return (
            <div>
                <div className={styles.title}>
                    Leadership
                </div>
                <div className={styles.holder}>
                    { showCase.map((shower) => (
                            <div className={styles.options}> 
                                <img className={styles.imgs} src={ shower.image}/>
                                <div className={styles.topics}>
                                    <h3 className={styles.subtitle}> { shower.subtitle } </h3>
                                    <div className={styles.description}> {shower.description }</div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        )
}

ShowCase.propTypes = {
    showCase: PropTypes.array.isRequired,
}

export default ShowCase
