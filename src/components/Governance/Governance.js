import React, { PropTypes } from 'react'
import styles from './Governance.css'

const Governance = ({ governance }) => {
    return (
            <div>
                <div className={styles.holder}>
                    { governance.map((governor) => (
                        <a href={governor.btn.link}>
                            <div className={styles.options}>
                                <div className={styles.topics}>
                                    {governor.text}
                                </div>
                                <div>
                                    {governor.more}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
    )
}

Governance.propTypes = {
    governance: PropTypes.array.isRequired, 
}

export default Governance
