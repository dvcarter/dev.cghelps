import React, { PropTypes, Component } from 'react'
import shouldPureComponentUpdate from 'react-pure-render-utils/function'

import GoogleMap from 'google-map-react'

export default class Mapper extends Component {
    static propTypes = {
        center: PropTypes.array,
        zoom: PropTypes.number,
        greatPlaceCoords: PropTypes.any
    };

    static defaultProps = {
        center: [42.483197, -83.151692],
        zoom: 9,
        greatPlaceCoords: {lat: 42.483197, lng: -83.151692}
    };


    shouldComponentUpdate = ShouldPureComponentUpdate;

    constructor(props) {
        super(props);
    }


    render() {
        return (
                <GoogleMap
                    apiKey="AIzaSyAWRK-Yt3gy6fKVS2zBjxobe1pqN3lGKbQ"
                    center={this.props.center}
                    zoom={this.props.zoom}>
                </GoogleMap>
        );
    }
}
