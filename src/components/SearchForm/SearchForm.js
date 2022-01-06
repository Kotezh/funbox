import { Form, Input } from "antd";
import "./SearchForm.css";

function SearchForm({ onSubmit, newMarker }) {
  function handleSubmit() {
    onSubmit(newMarker);
  }

  return (
    <Form >
      <Form.Item>
        <Input
          placeholder='Введите адрес'
          type='search'
          required
          size='30'
          minLength='2'
        />
      </Form.Item>
    </Form>
  );
}
export default SearchForm;
