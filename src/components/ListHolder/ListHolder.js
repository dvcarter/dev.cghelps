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
                            <div className={styles.subBoard}>
                                <ul>
                                    <li>Barbara Belkiewicz</li>
                                    <li>Community Volunteer</li>
                                    <br />
                                    <li>Don Campbell</li>
                                    <li>Retired Attorney</li>
                                    <br />
                                    <li>Eric Dobrusin</li>
                                    <li>Attorney, The Dobrusin Law Firm, PC</li>
                                    <br />
                                    <li>James Kohlenberg, MD</li>
                                    <li>Physician, John R Medical Clinic</li>
                                    <br />
                                    <li>Darren Lubbers, PhD</li>
                                    <li>Consultant</li>
                                    <br />
                                    <li>Lisa Mason</li>
                                    <li>Vice President, Program Partnerships, GDAHC</li>
                                    <br />
                                    <li>Sharon R. McMurray</li>
                                    <li>Principal, SR McMurray Communications, LLC </li>
                                    <br />
                                    <li>Greg Moore</li>
                                    <li>Attorney & Behavioral Health Care Practice</li> 
                                    <li>Group Leader</li>
                                </ul>
                            </div>
                            <div className={styles.subBoard}>
                                <ul>
                                    <li> Gary Robb </li>
                                    <li> CPA, Andrews Hooper Pavlik PLC </li>
                                    <br/>
                                    <li> Tawana Nettles-Robinson </li>
                                    <li> Executive Director, Trinity Health Care System </li>
                                    <br/>
                                    <li>Chris Ruen</li>
                                    <li>Community Volunteer</li>
                                    <br />
                                    <li>Douglas T. Smith</li>
                                    <li>Real Estate Development</li>
                                    <br />
                                    <li>Alexandra Stan</li>
                                    <li>Attorney</li>
                                    <br />
                                    <li>Kathy Walgren</li>
                                    <li>President, Nonprofit Leadership Excellence</li>
                                    <br />
                                    <li>Kevin B. Williams</li>
                                    <li>Court Administrator</li>
                                    <br />
                                </ul>
                            </div>
                </div>
            </div>
    )
}

ListHolder.propTypes = {
    listHolder: PropTypes.array.isRequired,
}

export default ListHolder
