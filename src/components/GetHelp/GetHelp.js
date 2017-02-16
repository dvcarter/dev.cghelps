import React, { PropTypes } from 'react'
import styles from './GetHelp.css'

const GetHelp = ({ getHelp }) => {
    return (
                <div>
                    <div className={styles.title}>
                        Help is here
                    </div>
                    <div className={styles.holder}>
                        {getHelp.map((helper) => (
                            <div className={styles.options}>
                            {helper.description} 
                            </div>
                        ))} 
                    </div>
                </div>
    )
}

GetHelp.propTypes = {
   getHelp: PropTypes.array.isRequired,
}

export default GetHelp
