import React from "react";
import { Input, Form } from "antd";
import "antd/dist/antd.css";

function InputBox({ name, label, defaultValue, rules, ...props }) {
  return (
    <>
      <p>{label}</p>
      <Form.Item name={name} rules={rules}>
        <Input defaultValue={defaultValue} {...props} />
      </Form.Item>
    </>
  );
}

export default InputBox;
