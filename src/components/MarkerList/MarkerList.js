import React, { useState } from "react";
import { List } from "antd";
import "./MarkerList.css";
import { CloseSquareOutlined } from "@ant-design/icons";
import ReactDragListView from "react-drag-listview";

const markersData = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];
function MarkerList() {
  const [items, setItems] = useState(markersData);
  // const [itemDeleted, setItemDeleted] = useState(null);

  const onDragEnd = (fromIndex, toIndex) => {
    if (toIndex < 0) return;
    const tempItems = [...items];
    const item = tempItems.splice(fromIndex, 1)[0];
    tempItems.splice(toIndex, 0, item);
    setItems(tempItems);
  };
  function handleDeleteMarker(item) {
    const newArray = items.filter(
      (currentCard) => currentCard.title !== item.title
    );
    setItems(newArray);
  }

  return (
    <ReactDragListView
      nodeSelector='.ant-list-item.draggble'
      onDragEnd={onDragEnd}
    >
      <List
        itemLayout='horizontal'
        dataSource={items}
        size='small'
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <CloseSquareOutlined
                style={{ fontSize: "24px", color: "#08c" }}
                onClick={() => handleDeleteMarker(item)}
              />,
            ]}
            className='draggble'
          >
            <List.Item.Meta
              title={
                <p
                  className='marker-list draggble-feat'
                  style={{
                    color: "#61dafb",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  {item.title}
                </p>
              }
            />
          </List.Item>
        )}
      />
    </ReactDragListView>
  );
}

export default MarkerList;
