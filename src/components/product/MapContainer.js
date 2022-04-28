import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';



const MyComponent = (props) => {
  const containerStyle = {
    width: '200px',
    height: '200px'
  };

  const center = {
    lat: parseFloat(props.mapinfo.latitude),
    lng: parseFloat(props.mapinfo.longitude)
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : <p>please wait for loading</p>
}

export default React.memo(MyComponent)