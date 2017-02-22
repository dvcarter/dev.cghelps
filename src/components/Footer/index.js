import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <div className={ styles.footerItems}>
        <p>
            <a
               href={ process.env.PHENOMIC_HOMEPAGE }
                className={ styles.phenomicReference }
            >
                { "2017 Common Ground " }
            </a>
        </p>
        <p>
            <a 
            href={`#`}
            >
                {"FAQ"}
            </a>
        </p>
        <p>
            {"Donate"}
        </p>
    </div>
  </footer>
)

export default Footer
