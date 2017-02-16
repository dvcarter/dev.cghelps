import React, { PropTypes } from 'react'
import styles from './GetInvolved.css'

const GetInvolved = ({ getInvolved }) => {
    return (
                <div>
                    <div className={styles.title}>
                        Give a Hand
                    </div>
                    <div className={styles.holder}>
                        {getInvolved.map((involver) => (
                            <div className={styles.options}>
                                {involver.description}
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
