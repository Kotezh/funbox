import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "antd";
import { CloseSquareOutlined } from "@ant-design/icons";
import ReactDragListView from "react-drag-listview";
import { dragAndDrop, deleteMarker } from "../../services/actions";
import "./MarkerList.css";

function MarkerList() {
  const dispatch = useDispatch();
  const { markers } = useSelector((store) => store.markers);

  const handleDeleteMarker = (id) => {
    dispatch(deleteMarker(id));
  };

  const handleDragEnd = (fromIndex, toIndex) => {
    if (toIndex < 0) return;
    dispatch(dragAndDrop(fromIndex, toIndex));
  };

  return (
    <ReactDragListView
      nodeSelector='.ant-list-item.draggble'
      onDragEnd={handleDragEnd}
    >
      <List
        itemLayout='horizontal'
        dataSource={markers}
        size='small'
        bordered
        className='marker-list'
        renderItem={(item) => (
          <List.Item
            key={item.id}
            className='draggble'
            actions={[
              <CloseSquareOutlined
                className='close-button'
                onClick={() => handleDeleteMarker(item.id)}
              />,
            ]}
          >
            <List.Item.Meta
              title={
                <p
                  className='marker-title draggble-feat'
                  style={{
                    color: "#61dafb",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  {item.address}
                </p>
              }
            />
          </List.Item>
        )}
      />
    </ReactDragListView>
  );
}

export { MarkerList };
