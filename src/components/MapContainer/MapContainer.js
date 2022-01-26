import React, { useCallback, useRef, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import Geocode from "react-geocode";
import { useDispatch, useSelector } from "react-redux";
import { changePosition, createMarker } from "../../services/actions/index";
import { deleteMarker } from "../../services/actions/index";

const containerStyle = {
  width: "100%",
  height: "460px",
};

function MapContainer() {
  Geocode.setLanguage("ru");
  const [selectedMarker, setSelectedMarker] = useState(null);
  const mapRef = useRef(undefined);
  const { markers } = useSelector((store) => store.markers);
  const center = useSelector((store) => store.center);

  const dispatch = useDispatch();

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback() {
    mapRef.current = undefined;
  }, []);

  const onMapClick = useCallback(
    (location) => {
      const lat = location.latLng.lat();
      const lng = location.latLng.lng();
      console.log(lat, lng);
      Geocode.fromLatLng(lat, lng)
        .then((response) => {
          const id = response.results[0].place_id;
          const address = response.results[0].formatted_address;
          dispatch(createMarker(id, address, { lat, lng }));
        })
        .catch((error) => {
          console.error(error);
        });
    },
    [dispatch]
  );

  const handleDeleteMarker = (id) => {
    dispatch(deleteMarker(id));
  };

  const handleDragMarker = (id, location) => {
    const lat = location.latLng.lat();
    const lng = location.latLng.lng();
    Geocode.fromLatLng(lat, lng)
      .then((response) => {
        const address = response.results[0].formatted_address;
        dispatch(changePosition(id, address, { lat, lng }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const polyline = markers?.map((marker) => marker.position);

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        markers={markers}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onMapClick}
      >
        {markers?.map((marker) => {
          return (
            <Marker
              key={marker.id}
              id={marker.id}
              position={marker.position}
              address={marker.address}
              draggable={true}
              onClick={() => {
                setSelectedMarker(marker);
              }}
              onRightClick={() => handleDeleteMarker(marker.id)}
              onDragEnd={(address, newPosition) =>
                handleDragMarker(marker.id, address, newPosition)
              }
            />
          );
        })}
        {selectedMarker ? (
          <InfoWindow
            onCloseClick={() => {
              setSelectedMarker(null);
            }}
            position={selectedMarker.position}
            onPositionChanged={() => selectedMarker.position}
          >
            <div>
              <h3>{selectedMarker.address}</h3>
            </div>
          </InfoWindow>
        ) : null}
        <Polyline
          options={{
            strokeColor: "#0088cc",
            fillColor: "#0088cc",
            fillOpacity: "1",
            strokeOpacity: "0.8",
            strokeWeight: "2",
          }}
          path={polyline}
        />
      </GoogleMap>
    </div>
  );
}

export { MapContainer };
