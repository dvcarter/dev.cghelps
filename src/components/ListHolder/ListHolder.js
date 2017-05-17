import React, { PropTypes } from 'react'
import styles from "./ListHolder.css"

const ListHolder = ({ listHolder }) => {
    return (
            <div className={styles.holder}>
                <h1> 2017-2018 </h1>
                <div className={styles.options}>
                {listHolder.map((lister) => (
                            <div className={styles.boardLeaders}>
                                    <div className={styles.boardPosition}>{lister.board.position}</div>
                                    <div className={styles.boardHold}>
                                        <div className={styles.position}>
                                            {lister.board.subtitle}
                                        </div>
                                        <div className={styles.name}>
                                            {lister.board.name}
                                        </div>
                                    </div>
                            </div>
                ))}
                </div>
                <div className={styles.options}>
                            <div>
                                insert rest of board here
                            </div>
                </div>
            </div>
    )
}

ListHolder.propTypes = {
    listHolder: PropTypes.array.isRequired,
}

export default ListHolder
