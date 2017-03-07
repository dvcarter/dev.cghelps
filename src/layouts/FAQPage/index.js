import React, { PropTypes } from 'react'
import FaqQ from '../../components/FaqQ'
import Page from '../Page'

const FAQPage = (props) => {
    const askFaq = props.head.askFaq

    return (
            <Page {...props}>

                <FaqQ
                    askFaq={ askFaq } />
            </Page>
    )
}

FAQPage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default FAQPage
