import React, { PropTypes } from "react"
import Governance from "../../components/Governance"
import Page from "../Page"

const GovernancePage = (props) => {
    const governance = props.head.governance
        return (
                <Page {...props}>
                    <Governance
                        governance = { governance }
                    />
                </Page>
        )
}

GovernancePage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default GovernancePage
