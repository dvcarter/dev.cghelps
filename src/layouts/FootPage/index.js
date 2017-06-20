import React, { PropTypes } from "react"
import FootOpts from "../../components/FootOpts"
import Page from "../Page"

const FootPage = (props) => {
    const footOpts = props.head.footOpts

    return (
            <Page {...props }>
                <FootOpts footOpts={footOpts}/>
            </Page>
    )
}

FootPage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default FootPage
