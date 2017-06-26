import React, { PropTypes } from "react"
import SmallFootOpts from "../../components/SmallFootOpts"
import Page from "../Page"

const SmallFootPage = (props) => {
    const smallFootOpts = props.head.smallFootOpts

    return (
            <Page {...props }>
                <SmallFootOpts smallFootOpts={smallFootOpts} />
            </Page>
    )

}

SmallFootPage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default SmallFootPage
