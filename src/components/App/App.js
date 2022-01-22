import React from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { API_KEY } from "../../utils/constants";
import Geocode from "react-geocode";
import "antd/dist/antd.css";
import "./App.css";
import { Main } from "../Main/Main";

const libraries = ["places"];

function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });

  Geocode.setApiKey(API_KEY);

  return (
    <div className='app'>
      <header className='app__header'>
        <a
          className='app__link'
          href='https://github.com/Kotezh/funbox.git'
          target='_blank'
          rel='noopener noreferrer'
        >
          Редактор маршрутов
        </a>
      </header>
      <Main isLoaded={isLoaded} />
      <footer className='app__footer'>
        <a
          className='app__link'
          href='https://github.com/Kotezh'
          target='_blank'
          rel='noopener noreferrer'
        >
          Nadia Kotegova
        </a>
      </footer>
    </div>
  );
}

export default App;
