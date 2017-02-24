import React, { PropTypes } from "react"
import { Link } from "phenomic"
// import MediaQuery from "react-responsive"
// import Svg from "react-svg-inline"
import Logo from "./cg-logo.png"
import Phone from "./telephone-handle-silhouette.png"
import People from "./group-profile-users.png"
import Resource from "./plus-button.png"
import Menu from "./menu-alt.png"

// import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
// import gitHubSvg from "../icons/iconmonstr-github-1.svg"

import styles from "./index.css"

const Header = () => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        <Link
          className={ styles.link }
          to={ "/" }
        >
          {/* "Home" */}
          <img className={styles.logo} src={Logo}/>
        </Link>
      </div>
      <div className={ styles.navPart2 }>
        {
            <a
                href={`/get-help`}
                className={ styles.link }
            >
            <span className={styles.text}>{ "Get Help" }</span>
            <span className={styles.icon}>
                    <img src={Phone}/>
            </span>
            </a>
        }
        {
            <a
                href={`/get-involved`}
                className={ styles.link}
            >
            <span className={styles.text}>{ "Get Involved" }</span>
            <span className={styles.icon}>
                <img src={People}/>
            </span>
            </a>
        }
        {
            <a 
                href={`/resources`}
                className={styles.link}
            >
            <span className={styles.text}>{ "Resources" }</span>
            <span className={styles.icon}>
                <img src={Resource}/>
            </span>
            </a>
        }
        { <div className={styles.texter}>
            <a 
                    href={`https://donatenow.networkforgood.org/commongroundhelps?code=website`}
                    className={[styles.texter, styles.link].join(' ')}
                >
                <span className={styles.text}>{"Donate" }</span>
            </a>
          </div>
        }
        { <div className={styles.texter}>
            <a 
                href={`/about-us`}
                className={styles.link}
            >
                <span className={styles.text}>
                    {'About Us'}
                </span>
            </a>
            </div>
        }
        { <span className={styles.icon}> <img className={styles.menu} src={Menu}/></span>
        }
      </div>
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
