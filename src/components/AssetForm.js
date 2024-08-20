import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, Row, Col, notification, message, Modal, AutoComplete } from 'antd';
import '../styles/AssetForm.css';

const { Option } = Select;

const AssetForm = ({ onCreateAsset, onUpdateAsset, assetToEdit }) => {

  const locationOptions = [
    { value: 'Head Office' },
    { value: 'Branch Office 1' },
    { value: 'Branch Office 2' },
  ];

  const [assetType, setAssetType] = useState(assetToEdit ? assetToEdit.type : '');

  const [form] = Form.useForm();

  useEffect(() => {
    if (assetToEdit) {
      form.setFieldsValue(assetToEdit);
    } else {
      form.resetFields();
    }
  }, [assetToEdit, form]);

  const showModal = (type, message) => {
    Modal[type]({
      title: type === 'success' ? 'Success' : 'Error',
      content: message,
      centered: true, // Memastikan modal muncul di tengah layar
      okText: 'OK',
      onOk() {},
    });
  };

  const handleFinish = (values) => {
    if (assetToEdit) {
      onUpdateAsset({ ...assetToEdit, ...values });
      // notification.success({
      //   message: 'Asset Updated',
      //   description: `Asset "${values.name}" has been updated successfully.`,
      //   placement: 'center',
      // });
      // message.success({
      //   content: `Asset "${values.name}" has been updated successfully.`,
      //   style: {
      //     content: `Asset "${values.name}" has been created successfully.`,
      //     duration: 5, // Durasi message lebih lama (5 detik)
      //     style: {
      //       marginTop: '20vh',
      //       fontSize: '18px', // Ukuran font diperbesar
      //       padding: '10px 20px', // Padding untuk memperbesar box message
      //     },
      //   },})
      showModal('success', `Asset "${values.name}" has been updated successfully.`);
    } else {
      onCreateAsset(values);
      // notification.success({
      //   message: 'Asset Created',
      //   description: `Asset "${values.name}" has been created successfully.`,
      //   placement: 'center',
      // });
      // message.success({
      //   content: `Asset "${values.name}" has been created successfully.`,
      //   style: {
      //     content: `Asset "${values.name}" has been created successfully.`,
      //     duration: 5, // Durasi message lebih lama (5 detik)
      //     style: {
      //       marginTop: '20vh',
      //       fontSize: '18px', // Ukuran font diperbesar
      //       padding: '10px 20px', // Padding untuk memperbesar box message
      //     },
      //   },});
      showModal('success', `Asset "${values.name}" has been created successfully.`);
    }
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={handleFinish} className="asset-form">
      <Row gutter={[16,16]}>
        <Col xs={24} sm={12} md={8}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input the asset name!' }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8}>
        <Form.Item label="Type" name="type" rules={[{ required: true, message: 'Please input the asset type!' }]}>
          <Select onChange={setAssetType}>
            <Option value="Laptop">Laptop</Option>
            <Option value="Desktop">Desktop</Option>
            <Option value="Monitor">Monitor</Option>
            <Option value="Printer">Printer</Option>
            <Option value="Router">Router</Option>
            <Option value="Tablet">Tablet</Option>
            <Option value="Smartphone">Smartphone</Option>
          </Select>
        </Form.Item>
        </Col>
        {/* Field Dinamis Berdasarkan Jenis Aset */}
        {assetType === 'Laptop' && (
          <>
            <Col xs={24} sm={12} md={8}>
              <Form.Item label="RAM" name="ram">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item label="Storage" name="storage">
                <Input />
              </Form.Item>
            </Col>
          </>
        )}

        {assetType === 'Desktop' && (
          <>
            <Col xs={24} sm={12} md={8}>
              <Form.Item label="Processor" name="processor">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item label="GPU" name="gpu">
                <Input />
              </Form.Item>
            </Col>
          </>
        )}
        <Col xs={24} sm={12} md={8}>
          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: 'Please select the asset status!' }]}
          >
            <Select>
              <Option value="Good">Good</Option>
              <Option value="Damaged">Damaged</Option>
              <Option value="Needs Repair">Needs Repair</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16,16]}>
        <Col xs={24} sm={12} md={8}>
          <Form.Item 
            label="Location"
            name="location"
            rules={[{ required: true, message: 'Please input the asset location!' }]}
          >
            <AutoComplete
              options={locationOptions}
              placeholder="Select or enter a location"
              filterOption={(inputValue, option) =>
                option.value.toLowerCase().includes(inputValue.toLowerCase())
              }
            />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Form.Item
            label="Assigned To"
            name="assignedTo"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Form.Item
            label="License"
            name="license"
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16,16]}>
        <Col xs={24} sm={12} md={8}>
          <Form.Item
            label="Purchase Date"
            name="purchaseDate"
            rules={[{ required: true, message: 'Please input the purchase date!' }]}
          >
            <Input type="date" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Form.Item
            label="Warranty Expiry"
            name="warrantyExpiry"
          >
            <Input type="date" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Form.Item
            label="Vendor"
            name="vendor"
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16,16]}>
        <Col xs={24} sm={12} md={8}>
          <Form.Item
            label="Cost"
            name="cost"
            rules={[{ required: true, message: 'Please input the cost!' }]}
          >
            <Input prefix="Rp" type="number" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Form.Item
            label="Serial Number"
            name="serialNumber"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Form.Item
            label="Notes"
            name="notes"
          >
            <Input.TextArea rows={2} />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item className="form-buttons">
        <Button type="primary" htmlType="submit" className="add-asset-button">
          Save
        </Button>
        <Button type="default" onClick={() => form.resetFields()} className="reset-button">
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AssetForm;
