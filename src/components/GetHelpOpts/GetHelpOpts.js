import React, { PropTypes } from 'react'
import FaPhone from 'react-icons/lib/fa/phone'
import styles from './GetHelpOpts.css'

const GetHelpOpts = ({ getHelpOpts }) => {
        return (
            <div className= {styles.help}>
                    { getHelpOpts.map((helps) => (
                        <div className={styles.options}>
                            <img src={helps.image} />
                            <h4>{helps.description}</h4>
                        </div>
                    ))}
            </div>
            )
}

GetHelpOpts.propTypes = {
    getHelpOpts: PropTypes.array.isRequired,
}

export default GetHelpOpts
