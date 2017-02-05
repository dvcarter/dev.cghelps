import React, { PropTypes } from 'react'
import FaPhone from 'react-icons/lib/fa/phone'
import styles from './GetHelpOpts.css'

const GetHelpOpts = ({ getHelpOpts }) => {
        return (
            <div className= {styles.help}>
                    { getHelpOpts.map((helps) => (
                        <div className={styles.options}>
                        {/*  <h3>{helps.name}</h3> */}
                            <FaPhone
                                size='70'
                            />
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
