import { API_KEY } from "../../utils/constants";
import { useJsApiLoader } from "@react-google-maps/api";
import "./Main.css";
import { Row, Col, Form, Input } from "antd";
import MarkerList from "../MarkerList/MarkerList";
// import SearchForm from "../SearchForm/SearchForm";
import Search from "../Search/Search";
import MapContainer from "../MapContainer/MapContainer";

const defaultCenter = {
  lat: -3.745,
  lng: -38.523,
};

const libraries = ["places"];

function Main() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });
  return (
    <main className='main'>
      {isLoaded ? (
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} justify='center'>
          <Col span={8}>
            {/* <SearchForm /> */}
            <Search />
            <MarkerList />
          </Col>
          <Col span={16} className='map'>
            <MapContainer center={defaultCenter} />
          </Col>
        </Row>
      ) : (
        <h2 className="main__loading-text">Loading...</h2>
      )}
    </main>
  );
}

export default Main;
