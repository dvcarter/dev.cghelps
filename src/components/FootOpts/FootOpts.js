import React, { PropTypes } from 'react'
import styles from "./FootOpts.css"
const FootOpts = () => {
    return (
            <div className={footHolder.styles}></div>
    )
}

FootOpts.propTypes = {
    footOpts: PropTypes.array.isRequired,
}

export default FootOpts
