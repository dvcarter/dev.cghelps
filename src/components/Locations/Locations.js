import React, {PropTypes, Component} from 'react'
import styles from './Locations.css'
//import Mapper from "./../Mapper"
import GoogleMap from 'google-map-react'

export default class Locations extends Component {
    state = {
        center: [ 42.617848, -83.317782 ],
        zoom: 15,
    };
    _onChange = ({ center, zoom}) => {
        this.setState({
            center: center,
            zoom: zoom,
       });
    }
    
    render() {
        let hat = []
        const { locations } = this.props
        return (
            <div> 
                <div className={styles.title}>
                    <h1> Help is never far away </h1>
                </div>
                <div className={styles.holder}>
                    {locations.map((locator) => (
                            <div className={styles.options}>
                                <div className={styles.topics}>
                                    <h2 className={styles.subtitle}> {locator.subtitle}</h2>
                                    <div className={styles.address}> {locator.address}</div>
                                    <div className={styles.description}> {locator.description} </div>
                                    <div className={styles.mapHolder}>
                                        <GoogleMap
                                            onChange={this._onChange}
                                            bootstrapURLKeys={{key:'AIzaSyAWRK-Yt3gy6fKVS2zBjxobe1pqN3lGKbQ'}}
                                            center={hat.concat(locator.placement.lat, locator.placement.lng)}
                                            zoom={locator.placement.zoom}>
                                                <div lat={locator.placement.lat} lng={locator.placement.lng}>
                                                        <div className={styles.pin} lat={locator.placement.lat} lng={locator.placement.lng}></div>
                                                        <div className={styles.pulse} lat={locator.placement.lat} lng={locator.placement.lng}></div>
                                                </div>
                                                {/*<div className={styles.infobox} lat={locator.placement.lat} lng={locator.placement.lng} zoom={locator.placement.zoom}>
                                                   <div className={styles.infoboxDescription}>
                                                                {locator.subtitle}
                                                                {locator.address}
                                                   </div>
                                                
                                                </div> */}
                                        </GoogleMap>
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
           )
    }
}
Locations.propTypes = {
    locations: PropTypes.array.isRequired,
}

