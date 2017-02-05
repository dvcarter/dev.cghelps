import React, { PropTypes } from 'react'
import styles from './GetHelpOpts.css'

const GetHelpOpts = ({ getHelpOpts }) => {
        return (

            <div>
                <div className= {styles.title}> Get Help</div>
                <hr className={styles.topline} />
                <div className= {styles.help}>
                    { getHelpOpts.map((helps) => (
                        <div className={styles.options}>
                            <img src={helps.image} />
                            <button className={styles.button}>{helps.btn}</button>
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
