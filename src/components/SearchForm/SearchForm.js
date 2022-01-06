import { Form, Input } from "antd";
import './SearchForm.css';

function SearchForm() {
  return (
    <Form

    >
      <Form.Item>
        <Input placeholder='Введите адрес' />
      </Form.Item>
    </Form>
  );
}
export default SearchForm;