import { List } from 'antd';
import './MarkerList.css';
import {
  CloseSquareOutlined,
} from '@ant-design/icons';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
function MarkerList (){
  
return (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item >
        <List.Item.Meta
          title={<p className='marker-list' style={{ color: '#61dafb', textAlign: 'left', margin: 0 }}>{item.title}</p>}

        />
        <CloseSquareOutlined style={{ fontSize: '16px', color: '#08c' }} />
      </List.Item>
    )}
  />
)
    }
    export default MarkerList;