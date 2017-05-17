import React, { PropTypes } from 'react'
import styles from "./DocumentHolder.css"

const DocumentHolder = ({ documentHolder }) => {
    return (
            <div className={styles.holder}>
                {documentHolder.map((dochold) => (
                        <div className={styles.options}>
                            <h3 className={styles.title}> {dochold.subtitle}</h3>
                            <div className={styles.description}> {dochold.description}</div>
                            <a href={dochold.btn.link}>
                            
                                <div>
                                    {dochold.btn.label}
                                </div>
                            </a>
                        </div>
                ))}
            </div>
    )
}

DocumentHolder.propTypes = {
    documentHolder: PropTypes.array.isRequired,
}

export default DocumentHolder
