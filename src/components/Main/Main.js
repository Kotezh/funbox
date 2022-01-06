import "./Main.css";
import { Row, Col, Form, Input } from "antd";
import MarkerList from "../MarkerList/MarkerList";
import SearchForm from "../SearchForm/SearchForm";
import MapContainer from '../MapContainer/MapContainer'


function Main() {
  return (
    <main className='main'>
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} justify='center'>
        <Col span={8}>
          <SearchForm />
          <MarkerList />
          </Col>
        <Col span={16}><MapContainer /></Col>
      </Row>
    </main>
  );
}

export default Main;
