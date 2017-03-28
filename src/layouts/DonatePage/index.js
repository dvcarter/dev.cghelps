import React, { PropTypes } from "react"
import DonateOpts from "../../components/DonateOpts"
import SustainOpts from "../../components/SustainOpts"
//import GiveOpts from "../../components/GiveOpts"
import Page from "../Page"

const DonatePage = (props) => {
    const donateOpts = props.head.donateOpts
    // const sustainOpts = props.head.sustainOpts
    //  const giveOpts = props.head.giveOpts

    return (
            <Page {...props }>
                <DonateOpts donateOpts={donateOpts}/>
                <SustainOpts />
            </Page>
    )
}

DonatePage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default DonatePage
