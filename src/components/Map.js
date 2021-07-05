import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const API_KEY = process.env.REACT_APP_KEY;


const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    console.log(locationInfo)

    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === 8){
            return <LocationMarker
            key={index}
            lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({id: ev.id,
             title: ev.title})}/>
        } 
        return null
    })
    
    
    return (
        <div className="map">
            <GoogleMapReact
            bootstrapURLKeys={{key: API_KEY}}
            defaultCenter={ center }
            defaultZoom={ zoom }
            > 
            {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}

        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
