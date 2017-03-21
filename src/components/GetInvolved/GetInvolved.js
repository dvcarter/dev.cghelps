import React, { PropTypes } from 'react'
import styles from './GetInvolved.css'

const GetInvolved = ({getInvolved }) => {
    return (
                <div>
                    <div className={styles.title}>
                        Give a Hand
                    </div>
                    <div className={styles.holder}>
                        {getInvolved.map((involver) => (
                            <div className={styles.options}>
                                <img className={styles.imgs} src={involver.image}/>
                                <div className={styles.topics}>
                                    <h3 className={styles.subtitle}> {involver.subtitle} </h3>
                                    <div className={styles.description}>{involver.description} </div>
                                </div>
                                <a href={involver.btn.link}>
                                    <button className={styles.button}>
                                        {involver.btn.label}
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
    )
}

GetInvolved.propTypes = {
    getInvolved: PropTypes.array.isRequired,
}

export default GetInvolved
