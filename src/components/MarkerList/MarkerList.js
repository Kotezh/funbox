import React from "react";
import { List } from "antd";
import "./MarkerList.css";
import { CloseSquareOutlined } from "@ant-design/icons";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
function MarkerList({ onDeleteClick }) {
  return (
    <List
      itemLayout='horizontal'
      dataSource={markersData}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={
              <p
                className='marker-list'
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
          <CloseSquareOutlined
            style={{ fontSize: "16px", color: "#08c" }}
            // onClick={onDeleteClick}
          />
        </List.Item>
      )}
    />
  );
}

export default MarkerList;
// function MarkerList({ onDeleteClick }) {
//   // const [markers, updateMarkers] = React.useState(markersData);
//   function handleOnDragEnd(result) {}
//   return (
//     <DragDropContext onDragEnd={handleOnDragEnd}>
//       <Droppable droppableId='markers'>
//         {(provided) => (
//           <List
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//             itemLayout='horizontal'
//             dataSource={markersData}
//             renderItem={(item) => (
//               <Draggable key={item.id} draggableId={item.id}>
//                 {(provided) => (
//                   <List.Item
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                   >
//                     <List.Item.Meta
//                       title={
//                         <p
//                           className='marker-list'
//                           style={{
//                             color: "#61dafb",
//                             textAlign: "left",
//                             margin: 0,
//                           }}
//                         >
//                           {item.title}
//                         </p>
//                       }
//                     />
//                     <CloseSquareOutlined
//                       style={{ fontSize: "16px", color: "#08c" }}
//                       // onClick={onDeleteClick}
//                     />
//                   </List.Item>
//                 )}
//               </Draggable>
//             )}
//           />
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// }
