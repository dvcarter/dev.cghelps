import React, { PropTypes } from 'react'
import styles from './GetHelp.css'

const GetHelp = ({ getHelp }) => {
    return (
                <div>
                    <div className={styles.title}>
                        <h1>Help is here</h1>
                    </div>
                    <div className={styles.holder}>
                        {getHelp.map((helper) => (
                            <div className={styles.options}>
                                <div className={styles.topics}> 
                                   <h2> {helper.subtitle}</h2>
                                    {helper.description}
                                </div>
                                <img className={styles.imgs} src={helper.image} />
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
