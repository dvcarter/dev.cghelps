import React, { PropTypes } from 'react'
import styles from './ResourceOpts.css'

const ResourceOpts = ({ resourceOpts }) => {
    return (
                <div>
                    <div className={styles.title}>
                        Give a Hand
                    </div>
                    <div className={styles.holder}>
                        {resourceOpts.map((resourcer) => (
                            <div className={styles.options}>
                                    <img className={styles.imgs} src={resourcer.image}/>
                                    <div className={styles.topics}>
                                        <h3 className={styles.subtitle}>{ resourcer.subtitle }</h3>
                                        <div className={styles.description}>{resourcer.description}</div>
                                        <a className={styles.resourcer} href = {resourcer.btn.link}> {resourcer.btn.label} </a>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
    )
}

ResourceOpts.propTypes = {
    resourceOpts: PropTypes.array.isRequired,
}

export default ResourceOpts
