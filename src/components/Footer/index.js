import React from "react"

import styles from "./index.css"
import Carf from "./CARF-logo.png"


const Footer = () => (
  <footer className={ styles.footer }>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <div className={ styles.footerItems}>
        {<a
               href={ `#` }
                className={ styles.items }
            >
               <span> { "2017 \u00A9 Common Ground " }</span>
        </a>}
        {<a 
            href={`#`}
            className={styles.items}
         >
             <span> {"Contact Us"} </span>
        </a>}
        {<a
            href={`#`}
            className={styles.items}
         >
             <span> {"Privacy Policy"} </span>
        </a>}
        {<a
            href={`#`}
            className={styles.items}
        >
               <span> {"FAQ"}</span>
        </a>}
        {<a
              href={`https://donatenow.networkforgood.org/commongroundhelps`}
              className={styles.items}    
        >
           <span> {"Donate"}</span>
        </a>}
    </div>
    <div className={styles.accreditation}>
        {<a
           href={"http://www.carf.org/providerProfile.aspx?cid=30296&parent=1"}
           className={ styles.link}    
        >
           <span><img src={Carf}/></span>

        </a>}
    </div>
  </footer>
)

export default Footer
