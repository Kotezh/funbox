import React, { useState } from "react";
import "./SearchForm.css";
import "antd/dist/antd.css";
import { Select, Form } from "antd";
import jsonp from "fetch-jsonp";
import qs from "qs";

const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = qs.stringify({
      code: "utf-8",
      q: value,
    });
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then((response) => response.json())
      .then((d) => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach((r) => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }
  timeout = setTimeout(fake, 300);
}

function SearchForm() {
  const [form] = Form.useForm();
  const [value, setValue] = useState(undefined);
  const [data, setData] = useState([]);

  const handleSearch = (value) => {
    if (value) {
      fetch(value, (data) => setData(data));
    } else {
      setData([]);
    }
  };

  const handleChange = (value) => {
    setValue(value);
    form.submit();
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const options = data.map((d) => <Option key={d.value}>{d.text}</Option>);

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        // label='Username'
        name='searchForm'
        rules={[{ required: true, message: "Заполните поле!" }]}
      >
        <Select
          showSearch
          value={value || ""}
          placeholder='Новая точка маршрута'
          style={{ width: "100%", marginBottom: "30px" }}
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          onSearch={handleSearch}
          onChange={handleChange}
          notFoundContent={null}
          className='input-style'
        >
          {options}
        </Select>
      </Form.Item>
    </Form>
  );
}

export default SearchForm;
