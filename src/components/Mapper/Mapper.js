import React, { PropTypes, Component } from 'react'
import GoogleMap from 'google-map-react'
import styles from "./Mapper.css"

// needed
// communication with locations sibling to change location based on front-matter content

export default class Mapper extends Component {
    state = {
        center: [42.617848, -83.317782],
        zoom: 15,
    };

    _onChange = ({center, zoom}) => {
        this.setState({
            center: center,
            zoom: zoom,
        });
    }

    render() {
        return (
                <GoogleMap
                    _onChange={this._onChange}
                    bootstrapURLKeys={{key:'AIzaSyAWRK-Yt3gy6fKVS2zBjxobe1pqN3lGKbQ'}}
                    center={this.state.center}
                    zoom={this.state.zoom}>
                </GoogleMap>
        );
    }
}

Mapper.propTypes = {
    locations: PropTypes.array.isRequired,
}
