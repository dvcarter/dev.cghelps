import React, { PropTypes } from 'react'
import styles from './GroupOpts.css'

const GroupOpts = ({ groupOpts }) => {
    return (
            <div>
                <div className={styles.holder}>
                    {groupOpts.map((grouper) => (
                            <div className={styles.options}>
                                <h3 className={styles.subtitle}>{grouper.subtitle}</h3>
                                <div className={styles.topics}>
                                    <h4 className={styles.subsubtitle}>{grouper.sub.subsubtitle}</h4>
                                    <div className={styles.description}>{grouper.sub.description}</div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
    )
}

GroupOpts.propTypes = {
    groupOpts: PropTypes.array.isRequired,
}

export default GroupOpts
