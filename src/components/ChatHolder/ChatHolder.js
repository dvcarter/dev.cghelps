import React, { PropTypes } from 'react'
import styles from "./ChatHolder.css"

const ChatHolder =({ chatHolder }) => {
    return (
            <div className={styles.holder}>
                {chatHolder.map((chatter) => (
                    <div className={styles.midHolder}>
                        <div className={styles.availability}>
                            {chatter.availability}
                        </div>
                        <div className={styles.lowHolder}>
                            <div className={styles.options}>
                                <ul>
                                    <li>{chatter.box0}
                                        <ul>
                                           <li> {chatter.subBox0}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>    
                            <div className={styles.options}>    
                                <ul>
                                    <li>{chatter.box1}
                                        <ul>
                                            <li> {chatter.subBox1}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.options}>
                                <ul>
                                    <li>{chatter.box2}
                                        <ul>
                                            <li>{chatter.subBox2}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.options}>
                                <ul>
                                    <li>{chatter.box3}
                                        <ul>
                                            <li>{chatter.subBox3}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    )

}

ChatHolder.propTypes = {
    chatHolder: PropTypes.array.isRequired,
}

export default ChatHolder
