import React, { PropTypes } from "react"
import { Link } from "phenomic"
// import Svg from "react-svg-inline"
import Logo from "./cg-logo.png"

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
            { "Get Help" }
            </a>
        }
        {
            <a
                href={`/get-involved`}
                className={ styles.link}
            >
            { "Get Involved" }
            </a>
        }
        {
            <a 
                href={`https://donatenow.networkforgood.org/commongroundhelps?code=website`}
                className={ styles.link}
            >
            { "Donate" }
            </a>
        }
        {
            <a 
                href={`/about-us`}
                className={styles.link}
            >
            {'About Us'}
            </a>
        }
      </div>
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
