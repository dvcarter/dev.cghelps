import React, { PropTypes } from "react"
import ListHolder from "../../components/ListHolder"
import Page from "../Page"

const ListPage = (props) => {
    const listHolder = props.head.listHolder
        return (
                <Page {...props}>
                    <ListHolder
                        listHolder = { listHolder }
                    />
                </Page>
        )
}

ListPage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default ListPage
