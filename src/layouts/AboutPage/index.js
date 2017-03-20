import React, { PropTypes } from 'react'
import About from '../../components/About'
import Page from '../Page'

const AboutPage = (props) => {
    const about = props.head.about

    return (
            <Page {...props}>

                <About
                    about={ about } />
            </Page>
    )
}

AboutPage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default AboutPage
