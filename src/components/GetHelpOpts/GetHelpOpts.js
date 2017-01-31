import React, { PropTypes } from 'react'
import styles from './GetHelpOpts.css'

const GetHelpOpts = ({ getHelpOpts }) => {
        return (
            <div id="helps" className= {styles.help}>
                { getHelpOpts.map((helps) => (
                        <h3>{helps.name}</h3>,
                        <h3>{helps.title}</h3>
                ))}
            </div>
            )
}

GetHelpOpts.propTypes = {
    getHelpOpts: PropTypes.array.isRequired,
}

export default GetHelpOpts
