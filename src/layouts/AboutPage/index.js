import React, { PropTypes } from 'react'
import About from '../../components/About'
import Locations from '../../components/Locations'
import Page from '../Page'

const AboutPage = (props) => {
    const about = props.head.about
    const locations = props.head.locations

    return (
            <Page {...props}>

                <About
                    about={ about }>
                    <Locations locations={locations}/>
                </About>
            </Page>
    )
}

AboutPage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default AboutPage
