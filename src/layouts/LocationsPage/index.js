import React, { PropTypes } from "react"
import Locations from "../../components/Locations"
//import Mapper from "../../components/Mapper"
import Page from "../Page"

const LocationsPage = (props) => {
    const locations = props.head.locations

        return (
                <Page {...props }>

                    <Locations
                        locations = {locations}
                    >
                    </Locations>
                </Page>
        )
}

LocationsPage.propTypes = {
    head: PropTypes.object.isRequired,
}

export default LocationsPage
