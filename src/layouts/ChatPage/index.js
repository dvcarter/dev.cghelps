import React, { PropTypes } from "react"
import ChatHolder from "../../components/ChatHolder"
import Page from "../Page"

const ChatPage = (props) => {
    const chatHolder = props.head.chatHolder
        return (
                <Page {...props}>
                    <ChatHolder
                        chatHolder = { chatHolder }
                    />
                </Page>
        )
}

ChatPage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default ChatPage
