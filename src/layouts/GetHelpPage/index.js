import React, { PropTypes } from "react"
import GetHelp from "../../components/GetHelp"
//import MoreText from "../../components/MoreText"
import Page from "../Page"

const GetHelpPage = (props) => {
        const getHelp = props.head.getHelp
        {/*const moreText = props.head.moreText*/}

        return (
            <Page {...props }>
               
                <GetHelp
                    getHelp={ getHelp }>
                    {/*<MoreText
                        moreText={ moreText}>
                    </MoreText>*/}
                </GetHelp>
            </Page>
        )
}

GetHelpPage.propTypes = {
//    children: PropTypes.node,
      head: PropTypes.object.isRequired,
//    body: PropTypes.string,
}

export default GetHelpPage
