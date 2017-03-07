import React, { PropTypes } from 'react'
import styles from './FaqQ.css'

const FaqQ = ({ askFaq }) => {
    return (
            <div>
                <div className={styles.title}>
                    <h1> Frequently Asked Questions </h1>
                </div>
                <div className={styles.holder}>
                    {askFaq.map((faqr) => (
                            <div className={styles.options}>
                                <div className={styles.topics}>
                                    <h2 className={styles.question}> {faqr.question}</h2>
                                    <div className={styles.description}> {faqr.description} </div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
    )

}

FaqQ.propTypes = {
    askFaq: PropTypes.array.isRequired,
}

export default FaqQ
