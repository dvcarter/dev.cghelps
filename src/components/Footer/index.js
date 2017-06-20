import React from "react"

import styles from "./index.css"
import FaceBook from "./facebook-logo.png"
import LinkedIn from "./linkedin-logo.png"
import Twitter from "./twitter-logo.png"


const Footer = () => (
  <footer className={ styles.footer }>
    <div className={styles.footerItems}>
        <div className={styles.socialItems}>
            <div className={styles.footText}></div>
            {<a 
                href={'https://www.facebook.com/commongroundhelps/'}
                className={styles.socialItem}>
                    <span><img src={FaceBook}/></span>
            </a>
            } 
            { <a
                href={'https://www.linkedin.com/company/commongroundhelps'}
                className={styles.socialItem}>
                    <span><img src={LinkedIn}/></span>
            </a>
            }
            { <a
                href={'https://twitter.com/cghelps'}
                className={styles.socialItem}>
                    <span><img src={Twitter}/></span>
            </a>
            }
        </div>
        <div className={styles.greatDivide} />
    </div>
    <div className={styles.accreditation}>
        <div className={styles.column1}>
            <p>
                <h4><strong>Subscribe to our Newsletter</strong></h4>
                Sign-up to have our quarterly communications delivered right to your inbox
                
                <div id="mc_embed_signup">
                <form action="//commongroundhelps.us13.list-manage.com/subscribe/post?u=782d883598807592a7afafd27&amp;id=6ae736da35" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                            <input type="email"  name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required/>
                                    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
                                        </div>
                                        </form>
                                        </div>

                
            </p>
        
        
        </div>
        <div className={styles.column2}>
            <p>
                <h4><strong>Contact Information</strong></h4>
                To reach our administrative office,
                please call <strong><a href="tel:2484568150">248.456.8150</a></strong> or
                email <strong><a href="mailto:ask@commongroundhelps.org">ask@commongroundhelps.org</a></strong>
                </p>
        
        
        </div>
        <div className={styles.column3}>
            {<a
                href="/media-toolkit"
                className={styles.columnLinks}>
                    Media Toolkit
            </a>}
            {<a
                href="/accreditation"
                className={styles.columnLinks}>
                    Accreditation
            </a>}
            {<a
                href="/code-of-ethics"
                className={styles.columnLinks}>
                    Code of Ethics
            </a>}
            {<a
                href="/terms-of-service"
                className={styles.columnLinks}>
                    Terms of Service
            </a>}
            {<a
                href="/privacy-policy"
                className={styles.columnLinks}>
                    MSHMIS Privacy Policy
            </a>}
            {<a
                href="/copyright"
                className={styles.columnLinks}>
                    Copyright
            </a>}
        </div>
    </div>
  </footer>
)

export default Footer
