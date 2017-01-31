import React, { PropTypes } from "react"
import GetHelpOpts from "../../components/GetHelpOpts"
import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

const Homepage = (props) => {
    const getHelpOpts = props.head.getHelpsOpts

  return (
    <Page { ...props }>
      <GetHelpOpts
        getHelpOpts={ getHelpOpts }
      />
      <LatestPosts />
    </Page>
    )
}

Homepage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Homepage
