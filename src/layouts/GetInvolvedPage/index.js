import React, { PropTypes } from "react"
import GetInvolved from "../../components/GetInvolved"
import Page from "../Page"

const GetInvolvedPage = (props) => {
    const getInvolved = props.head.getInvolved

        return (
                <Page {...props}>

                    <GetInvolved
                        getInvolved={ getInvolved }
                    />
                </Page>
        )
}

GetInvolvedPage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default GetInvolvedPage
