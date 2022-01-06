import React, {useEffect, useRef} from 'react';

export default function MapComponent() {
  const ref = useRef();

  const [map, setMap] = React.useState();

useEffect(() => {
  if (ref.current && !map) {
    setMap(new window.google.maps.Map(ref.current, {}));
  }
}, [ref, map]);

  

  return <div ref={ref} id="map" />;
}

// useEffect(() => {
//   new window.google.maps.Map(ref.current, {
//     center,
//     zoom,
//   });
// });