import React, { PropTypes } from "react"
import styles from "./SmallFootOpts.css"
const SmallFootOpts = () => {
    return (
            <div className={styles.smallFootHolder}></div>
    )
}

SmallFootOpts.propTypes = {
    smallFootOpts: PropTypes.array.isRequired,
}

export default SmallFootOpts
