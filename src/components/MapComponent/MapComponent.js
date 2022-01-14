import React, { useEffect, useRef, useState } from "react";
import './MapComponent.css'

export default function MapComponent({ zoom, center }) {
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, { zoom: zoom, center: center })
      );
    }
  }, [ref, map, center, zoom]);

  return <div ref={ref} id='map' className="map-component"/>;
}

