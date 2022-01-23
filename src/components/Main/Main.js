import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { MarkerList } from "../MarkerList/MarkerList";
import { Search } from "../Search/Search";
import { MapContainer } from "../MapContainer/MapContainer";
import { clearAllMarkers } from "../../services/actions";
import "./Main.css";

function Main({ isLoaded }) {
  const dispatch = useDispatch();
  const { markers } = useSelector((store) => store.markers);
  const clearMarkers = useCallback(() => {
    dispatch(clearAllMarkers());
  }, [dispatch]);

  return (
    <main className='main'>
      {isLoaded ? (
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} justify='center'>
          <Col span={8}>
            <Search />
            <MarkerList />
            {markers?.length ? (
              <Button icon={<CloseOutlined />} onClick={clearMarkers}>
                Удалить все маркеры
              </Button>
            ) : null}
          </Col>
          <Col span={16} className='map'>
            <MapContainer />
          </Col>
        </Row>
      ) : (
        <h2 className='main__loading-text'>Loading...</h2>
      )}
    </main>
  );
}

export { Main };
