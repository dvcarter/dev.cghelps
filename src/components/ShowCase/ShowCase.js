import React, { PropTypes } from 'react'
import styles from './ShowCase.css'

const ShowCase = ({ showCase }) => {
    return (
            <div>
                <div className={styles.holder}>
                    { showCase.map((shower) => (
                            <div className={styles.options}> 
                                <div className={styles.topics}>
                                    <img className={styles.imgs} src={ shower.image}/>
                                    <p className={styles.descriptor}>
                                        <h3 className={styles.pair}> { shower.subtitle } </h3>
                                        <h5 className={styles.pair}> <em>{shower.subsubtitle}</em></h5>
                                    </p>
                                </div>
                                <div className={styles.copy}>
                                    <div className={styles.description}> {shower.description }</div>
                                </div>
                            </div>
                    ))}
                </div>
                <div className={styles.standIn}> 
                    <h3 className={styles.pair}> Senior Leadership </h3>
                    <ul className={styles.leadership}>
                        <li> <strong>Diane Cartwright</strong>, <em> Director of Crisis & Advocacy </em></li>
                        <li> <strong>Jeff Kapuscinski</strong>, <em> Director of Business Development & Advancement</em></li>
                        <li> <strong>Curtis Cooper</strong>, <em> Director of Information Technology </em></li>
                        <li> <strong>Veronica Brown</strong>, <em> Director of Health Information </em></li>
                        <li> <strong>Marc Wiliford</strong>, <em> Director of Finance </em></li>
                        <li> <strong>Todd Reid</strong>, <em> Director of OACIS </em></li>
                        <li> <strong>Kyle Glasgow</strong>, <em> Director of Mission Impact/Data Analysis </em></li>
                        <li> <strong>Kathryn Burgess</strong>, <em> Director of Nursing </em></li>
                        <li> <strong>Stanislaw Golec</strong>, <em> Director of Medical Services </em></li>
                    </ul>
                </div>
            </div>
        )
}

ShowCase.propTypes = {
    showCase: PropTypes.array.isRequired,
}

export default ShowCase
