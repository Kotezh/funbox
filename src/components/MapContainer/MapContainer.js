import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { YOUR_GOOGLE_API_KEY } from "../../utils/constants";
import React from "react";
import MapComponent from "../MapComponent/MapComponent";

const render = (status) => {
  return <h1>{status}</h1>;
};

export default function MapContainer() {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Wrapper apiKey={YOUR_GOOGLE_API_KEY} render={render}>
        <MapComponent
          // onClick={onClick}
          // onIdle={onIdle}
          // center={center}
          // zoom={zoom}
          style={{ flexGrow: "1", height: "100%" }}
        >

        </MapComponent>
      </Wrapper>
    </div>
  );
}

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
