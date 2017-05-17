import React, { PropTypes } from "react"
import DocumentHolder from "../../components/DocumentHolder"
import Page from "../Page"

const DocumentPage = (props) => {
    const documentHolder = props.head.documentHolder
        return (
                <Page {...props}>
                    <DocumentHolder
                        documentHolder = { documentHolder }
                    />
                </Page>
        )
}

DocumentPage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default DocumentPage
