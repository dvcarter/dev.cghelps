import React, { PropTypes } from "react"
import ResourceOpts from "../../components/ResourceOpts"
import Page from "../Page"

const ResourcePage = (props) => {
    const resourceOpts = props.head.resourceOpts

        return (
                <Page {...props}>

                    <ResourceOpts
                        resourceOpts ={ resourceOpts }
                    />
                </Page>
        )
}

ResourcePage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default ResourcePage
