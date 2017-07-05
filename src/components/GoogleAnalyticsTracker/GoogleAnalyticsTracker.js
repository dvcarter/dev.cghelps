import React, { Component, PropTypes } from "react"
import ga from "react-ga"

const isBrowser = (typeof window !== "undefined")
const isProduction = process.env.NODE_ENV === "production"

export default class GoogleAnalyticsTracker extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    params: PropTypes.object.isRequired,
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const { pkg } = this.context.metadata

    if (isProduction && isBrowser) {
      ga.create(pkg.googleAnalyticsUA, "auto")
    }
    if (!isProduction && isBrowser) {
        // eslint-disable-next-line no-console
      console.info("ga.create", pkg.googleAnalyticsUA)
    }
    this.logPageview()
  }

  componentWillReceiveProps(props) {
    if (props.params.splat !== this.props.params.splat) {
      this.logPageview()
    }
  }

  logPageview() {
    if (isProduction && isBrowser) {
      ga.pageview(window.location.href)
    }
    if (!isProduction && isBrowser) {
        // eslint-disable-next-line no-console
      console.info("New pageview", window.location.href)
    }
  }

  render() {
    return React.createElement(
      "div",
      {},
      this.props.children,
    )
  }
}
