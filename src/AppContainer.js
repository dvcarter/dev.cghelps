import React, { PropTypes } from "react"

import "./index.global.css"
import "./highlight.global.css"
import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import GoogleAnalytics from "./GoogleAnalytics"
import {metrics} from "react-metrics";

const config = {
    vendors: [{
                 name: "Google Analytics",
                 api: new GoogleAnalytics({
                     trackingId: "UA-25042886-2"
                 })
             }],
    pageViewEvent: "pageLoad",
    pageDefaults: () => {
        return {
            siteName: "Common Ground",
        };
    }
}
const AppContainer = (props) => (
                <Container>
                        <DefaultHeadMeta />
                        <Header />
                        <Content>
                            { props.children }
                        </Content>
                        <Footer />
                </Container>
    )

 AppContainer.propTypes = {
   children: PropTypes.node,
   params: PropTypes.object
}

export default metrics(config)(AppContainer)
