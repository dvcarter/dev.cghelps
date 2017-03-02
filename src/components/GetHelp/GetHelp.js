import React, { PropTypes } from 'react'
import styles from './GetHelp.css'
//import MoreText from './../MoreText'

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
                                   <h2 className={styles.subtitle}> {helper.subtitle}</h2>
                                   <div className={styles.description}>{helper.description}</div>
                                   {/*<MoreText/> */}
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
