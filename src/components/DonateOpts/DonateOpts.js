import React, { PropTypes } from 'react'
import styles from './DonateOpts.css'

const DonateOpts = ({ donateOpts }) => {
        return (

            <div className={styles.bigHolder}>
                <div className= {styles.title}> 3 Easy Ways to Donate</div>
                {/* <hr className={styles.topline} /> */}
                <div className= {styles.help}>
                    { donateOpts.map((donates) => (
                        <div className={styles.options}>
                            <img className={styles.svgClass} src={donates.image} />
                            <div className={styles.subtitle}> {donates.title}</div>
                            <div className={styles.descriptions}> {donates.description}</div>
                            <a href={donates.btn.link}>
                                <button className={styles.button}>{donates.btn.label}</button>
                            </a>
                        </div>
                    ))}
                </div>
                {/*<hr className={styles.bottomline}/>*/}
            </div>
            )
}

DonateOpts.propTypes = {
    donateOpts: PropTypes.array.isRequired
}

export default DonateOpts
