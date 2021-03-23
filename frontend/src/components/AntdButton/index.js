import React from "react";
import { Form, Button } from "antd";

function index({ text, ...props }) {
  return (
    <Form.Item>
      <Button type="primary" htmlType="submit" {...props}>
        {text || "Submit"}
      </Button>
    </Form.Item>
  );
}

export default index;
