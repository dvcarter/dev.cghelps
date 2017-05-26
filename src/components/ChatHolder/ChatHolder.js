import React, { PropTypes } from 'react'
import styles from "./ChatHolder.css"

const ChatHolder =({ chatHolder }) => {
    return (
            <div className={styles.divHolder}>
                <div className={styles.newAvail}> 
                   <p> Availability </p>
                        <ul>
                            <li> 4-10pm Eastern Standard Time, Weekdays (Monday through Friday), excluding holidays </li>
                            <li> Based on Staff/Volunteer Availability </li>
                        </ul>
                </div>
            <div className={styles.holder}>
                {chatHolder.map((chatter) => (
                    <div className={styles.midHolder}>
                        <div className={styles.availability}>
                            {chatter.availability}
                        </div>
                        <div className={styles.lowHolder}>
                            <div className={styles.options}>
                                <a href={chatter.link0}>
                                    <ul>
                                        <li className={styles.betterVersion}>{chatter.box0}
                                            <ul>
                                                <li className={styles.contactInfo}> {chatter.subBox0}</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </a>
                            </div>    
                            <div className={styles.options}>    
                                <a href={chatter.link1}>
                                    <ul>
                                        <li className={styles.betterVersion}>{chatter.box1}
                                            <ul>
                                                <li className={styles.contactInfo}> {chatter.subBox1}</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                            <div className={styles.options}>
                                <a href={chatter.link2}>
                                    <ul>
                                        <li className={styles.betterVersion}>{chatter.box2}
                                            <ul>
                                                <li className={styles.contactInfo}>{chatter.subBox2}</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                            <div className={styles.options}>
                                <a href={chatter.link3}>    
                                    <ul>
                                        <li className={styles.betterVersion}>{chatter.box3}
                                            <ul>
                                                <li className={styles.contactInfo}>{chatter.subBox3}</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>
    )

}

ChatHolder.propTypes = {
    chatHolder: PropTypes.array.isRequired,
}

export default ChatHolder
