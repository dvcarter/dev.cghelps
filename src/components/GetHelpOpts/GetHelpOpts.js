import React, { PropTypes } from 'react'
import styles from './GetHelpOpts.css'

const GetHelpOpts = ({ getHelpOpts }) => {
        return (

            <div>
                <div className= {styles.title}> Get Help</div>
                {/* <hr className={styles.topline} /> */}
                <div className= {styles.help}>
                    { getHelpOpts.map((helps) => (
                        <div className={styles.options}>
                            <img className={styles.svgClass} src={helps.image} />
                            <div className={styles.subtitle}> {helps.title}</div>
                            <div className={styles.descriptions}> {helps.description}</div>
                            <a href={helps.btn.link}>
                                <button className={styles.button}>{helps.btn.label}</button>
                            </a>
                        </div>
                    ))}
                </div>
                <hr className={styles.bottomline}/>
            </div>
            )
}

GetHelpOpts.propTypes = {
    getHelpOpts: PropTypes.array.isRequired,
}

export default GetHelpOpts
