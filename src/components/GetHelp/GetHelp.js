import React, { PropTypes } from 'react'
import styles from './GetHelp.css'

const GetHelp = ({ getHelp }) => {
    return (
                <div>
                    {getHelp.map((help) => (
                            <div> {help.description} </div>
                    ))}
                </div>
    )
}

GetHelp.propTypes = {
    getHelp: PropTypes.array.isRequired,
}

export default GetHelp
