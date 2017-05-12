import React, { PropTypes } from "react"
import ShowCase from "../../components/ShowCase"
import Page from "../Page"

const ShowCasePage = (props) => {
    const showCase = props.head.showCase
        return (
                <Page {...props}>
                    <ShowCase
                        showCase = { showCase }
                    />
                </Page>
        )
}

ShowCasePage.propTypes = {
    head: PropTypes.object.isRequired,
}
export default ShowCasePage
