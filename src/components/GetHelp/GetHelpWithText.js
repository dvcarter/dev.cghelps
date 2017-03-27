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
                                <div>
                                <div className={styles.topics}> 
                                   <h2 className={styles.subtitle}> {helper.subtitle}</h2>
                                   <div className={styles.description}>{helper.description}</div>
                                   <div> 
                                                {/*<h3> {helper.subsubtitle + i} </h3>
                                                <div> {helper.subdescription + i}</div>*/}
                                                <h3> {helper.subsubtitle1}</h3>
                                                <div> {helper.subdescription1}</div>
                                                <h3> {helper.subsubtitle2}</h3>
                                                <div> {helper.subdescription2}</div>
                                                <h3> {helper.subsubtitle3}</h3>
                                                <div> {helper.subdescription3}</div>
                                                <h3> {helper.subsubtitle4}</h3>
                                                <div> {helper.subdescription4} </div>
                                                <h3> {helper.subsubtitle5}</h3>
                                                <div> {helper.subdescription5}</div>
                                   

                                    </div>
                                   {/*<MoreText/> */}
                                </div>
                                </div>
                                <a href={helper.btn.link} className={styles.onlybtn}>
                                    <img className={styles.imgs} src={helper.image} />
                                        {helper.btn.label}
                                </a>
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
