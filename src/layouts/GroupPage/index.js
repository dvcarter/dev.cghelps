import React, { PropTypes } from "react"
import GroupOpts from "../../components/GroupOpts"
import Page from "../Page"

const GroupPage = (props) => {
    const groupOpts = props.head.groupOpts

        return ( 
                <Page {...props}>
                    
                    <GroupOpts
                        groupOpts = { groupOpts }
                    />
                </Page>
        )
}

GroupPage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default GroupPage
