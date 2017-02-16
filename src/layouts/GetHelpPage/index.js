import React, { PropTypes } from "react"
import GetHelp from "../../components/GetHelp"
import Page from "../Page"

const GetHelpPage = (props) => {
        const getHelp = props.head.getHelp

        return (
            <Page {...props }>
               
                <GetHelp
                    getHelp={ getHelp }
                />
            </Page>
        )
}

GetHelpPage.propTypes = {
//    children: PropTypes.node,
      head: PropTypes.object.isRequired,
//    body: PropTypes.string,
}

export default GetHelpPage
