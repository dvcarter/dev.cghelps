import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import warning from "warning"
import { BodyContainer, joinUri } from "phenomic"
import Loading from "../../components/Loading"
import styles from "./index.css"

const Page = (
  {
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children,
  },
  {
    metadata: { pkg },
  }
) => {
  warning(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ pkg.twitter }` },
    { name: "twitter:description", content: head.description },
    { name: "description", content: head.description },
  ]

  return (
    <div className={ styles.page }>
      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
      { ((head.title !== "About Us") && (head.title !== "Annual Report") && (head.layout !== "SmallFootLink") && (head.layout !== "FootLink") && (head.title !== "Financial Statements")&& (head.title !== "Strategic Plan") && (head.title !== "Governance & Leadership") && (head.title !== "Board of Trustees") && (head.title !== "Leadership") && (head.title !== "News and Events") && (head.title !== "Terms of Service") && (head.title !== "Frequently Asked Questions") && (head.title !== "Contact Us")) ? 
        <div
          className={ styles.hero }
          style={ head.hero && {
            background: `#111 url(${head.hero }) 50% 50% / cover`,
          } }
        >
          <div className={ styles.header }>
            <div className={ styles.wrapper }>
              <h1 className={ styles.heading }>{ head.title }</h1>
                <div className={styles.lowerTitleHolder}>
                    <h4 className={styles.lowerTitle}>
                        { head.lowerTitle }
                    </h4>
                </div>
            </div>
          </div>
        </div>
        : <div className={styles.header}>
            <div className={styles.wrapper }>
                <h1 className={styles.privacyHeading}> {head.title}</h1>
            </div>
          </div>
      }
      <div className={ styles.wrapper + " " + styles.pageContent }>
        { header }
        <div className={ styles.body }>
          {
            isLoading
            ? <Loading />
            : <BodyContainer>{ body }</BodyContainer>
          }
        </div>
        { children }
        { footer }
      </div>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
