import React from "react"

import styles from "./index.css"
import FaceBook from "./facebook-logo.png"
import LinkedIn from "./linkedin-logo.png"
import Twitter from "./twitter-logo.png"
import Carf from "./CARF-logo.png"


const Footer = () => (
  <footer className={ styles.footer }>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <hr className={styles.line} />
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
        {<a
               href={ `#` }
                className={ styles.items }
            >
               <span> { "2017 \u00A9 Common Ground " }</span>
        </a>}
        {/*
            <div className={styles.subscriber}>
                <div id="mc_embed_signup">
                    <form action="//commongroundhelps.us13.list-manage.com/subscribe/post?u=782d883598807592a7afafd27&amp;id=6ae736da35" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                        <div id="mc_embed_signup_scroll">
                            <label htmlFor="mce-EMAIL">Subscribe to our mailing list</label>
    <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required/>
    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
    </div>
</form>
</div> 
       */ }
        {<a 
            href={'/contact'}
            className={styles.items}
         >
             <span> {"Contact Us"} </span>
        </a>}
        {<a
            href={'/about-us/privacy-policy'}
            className={styles.items}
         >
             <span> {"Privacy Policy"} </span>
        </a>}
        {<a
            href={"/get-help/faq"}
            className={styles.items}
        >
               <span> {"FAQ"}</span>
        </a>}
        {<a
              href={"/donate"}
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
