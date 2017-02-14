import React, { PropTypes } from 'react'
import styles from './GetHelp.css'

const GetHelp = ({ getHelp }) => {
    return (
                <div>
                    <div className={styles.holder}>
                        {getHelp.map((help) => (
                            <div className={styles.change}> {help.description} </div>
                        ))}
                    </div>
                </div>
    )
}

GetHelp.propTypes = {
    getHelp: PropTypes.array.isRequired,
}

export default GetHelp
