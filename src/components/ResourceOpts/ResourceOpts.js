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
                                {resourcer.description}
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
