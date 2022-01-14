// import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { useCallback, useRef } from "react";
// import MapComponent from "../MapComponent/MapComponent";
import { GoogleMap } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

export default function MapContainer({ center }) {
  const mapRef = useRef(undefined);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* <MapComponent></MapComponent> */}
      </GoogleMap>
    </div>
  );
}

// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "YOUR_API_KEY"
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//   ) : <></>
// }

// export default React.memo(MyComponent)

// const MapContainer = () => <Wrapper apiKey={"YOUR_API_KEY"} render={render} />;
// export function MapContainer(props) {
//   return (
//     <Map google={props.google} zoom={14}>
//       <Marker onClick={props.onMarkerClick} name={"Current location"} />

//       <InfoWindow onClose={props.onInfoWindowClose}>
//         <div>
//           <h1>{props.selectedPlace.name}</h1>
//         </div>
//       </InfoWindow>
//     </Map>
//   );
// }

// export default GoogleApiWrapper({
//   apiKey: YOUR_GOOGLE_API_KEY,
// })(MapContainer);

// const render = (status) => {
//   return <h1>{status}</h1>;
// };

{
  /* <Wrapper apiKey={API_KEY} render={render}>
<MapComponent
  // onClick={onClick}
  // onIdle={onIdle}
  center={center}
  zoom={zoom}
  style={{ flexGrow: "1", height: "100%", width: "300px" }}
></MapComponent>
</Wrapper> */
}
// const [clicks, setClicks] = React.useState();
// const [zoom, setZoom] = React.useState(3); // initial zoom
// const [center, setCenter] = React.useState({
//   lat: 0,
//   lng: 0,
// });

// const onClick = (e) => {
//   // avoid directly mutating state
//   setClicks([...clicks, e.latLng]);
// };

// const onIdle = (m) => {
//   console.log("onIdle");
//   setZoom(m.getZoom());
//   setCenter(m.getCenter().toJSON());
// };
