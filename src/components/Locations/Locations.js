import React, {PropTypes} from 'react'
import styles from './Locations.css'
//import Mapper from "./../Mapper"
//import GoogleMap from 'google-map-react'

const Locations = ({ locations }) => {
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
                                    {/*<Mapper />*/}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
           )
}
Locations.propTypes = {
    locations: PropTypes.array.isRequired,
}

export default Locations
