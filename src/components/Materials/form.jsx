import { useState } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Tag } from "antd";
const customizeRequiredMark = (label, { required }) => (
  <>
    {required ? (
      <Tag color="error">Required</Tag>
    ) : (
      <Tag color="warning">optional</Tag>
    )}
    {label}
  </>
);
const AddMaterials = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  return (
    <div style={{ border: "2px" }}>
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          requiredMarkValue: requiredMark,
        }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={
          requiredMark === "customize" ? customizeRequiredMark : requiredMark
        }
      >
        <Form.Item label="Name" required tooltip="This is a required field">
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          label="Age"
          tooltip={{
            title: "Tooltip with customize icon",
            icon: <InfoCircleOutlined />,
          }}
        >
          <Input placeholder="Enter your age" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddMaterials;
