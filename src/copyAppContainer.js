import React, {Component, PropTypes } from "react"

import "./index.global.css"
import "./highlight.global.css"
import GATracker from "./components/GoogleAnalyticsTracker"
import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

//const AppContainer = (props) => (

export class AppContainer extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
        location: PropTypes.object.isRequired,
        params: PropTypes.object,
    }

    static contextTypes = {
        metadata: PropTypes.object.isRequired,
    }
    
    
    render() {
        return (
            <GATracker params={ this.props.params }>
                <Container>
                    <DefaultHeadMeta />
                    <Header />
                    <Content>
                        { this.props.children }
                    </Content>
                    <Footer />
                </Container>
            </GATracker>
    )
    }
}

// AppContainer.propTypes = {
//   children: PropTypes.node,
//   params: PropTypes.object
// }

export default AppContainer
