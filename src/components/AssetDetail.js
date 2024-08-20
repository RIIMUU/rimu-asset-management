import React, { useState } from 'react';
import { Descriptions, Tabs, Input, Button, Space, Form, List } from 'antd';

const { TabPane } = Tabs;

const AssetDetail = ({ asset, onAddMaintenance, onAddDocumentation }) => {
  const [maintenanceForm] = Form.useForm();
  const [documentationForm] = Form.useForm();

  const handleAddMaintenance = () => {
    maintenanceForm.validateFields().then(values => {
      onAddMaintenance(values);
      maintenanceForm.resetFields();
    });
  };

  const handleAddDocumentation = () => {
    documentationForm.validateFields().then(values => {
      onAddDocumentation(values);
      documentationForm.resetFields();
    });
  };

  if (!asset) return null;

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="General Information" key="1">
        <Descriptions title="Asset Details" bordered>
          <Descriptions.Item label="Name">{asset.name}</Descriptions.Item>
          <Descriptions.Item label="Type">{asset.type}</Descriptions.Item>
          <Descriptions.Item label="Status">{asset.status}</Descriptions.Item>
          <Descriptions.Item label="Location">{asset.location}</Descriptions.Item>
          <Descriptions.Item label="Assigned To">{asset.assignedTo}</Descriptions.Item>
          <Descriptions.Item label="License">{asset.license}</Descriptions.Item>
          <Descriptions.Item label="Purchase Date">{asset.purchaseDate}</Descriptions.Item>
          <Descriptions.Item label="Warranty Expiry">{asset.warrantyExpiry}</Descriptions.Item>
          <Descriptions.Item label="Vendor">{asset.vendor}</Descriptions.Item>
          <Descriptions.Item label="Cost">Rp {asset.cost.toLocaleString()}</Descriptions.Item>
          <Descriptions.Item label="Serial Number">{asset.serialNumber}</Descriptions.Item>
          <Descriptions.Item label="Notes">{asset.notes}</Descriptions.Item>
        </Descriptions>
      </TabPane>

      <TabPane tab="Maintenance History" key="2">
        <List
          header={<div>Maintenance History</div>}
          bordered
          dataSource={asset.maintenanceHistory || []}
          renderItem={(item) => (
            <List.Item>
              <Descriptions bordered>
                <Descriptions.Item label="Date">{item.date}</Descriptions.Item>
                <Descriptions.Item label="Description">{item.description}</Descriptions.Item>
              </Descriptions>
            </List.Item>
          )}
        />

        <Form form={maintenanceForm} layout="inline" style={{ marginTop: 16 }}>
          <Form.Item
            name="date"
            rules={[{ required: true, message: 'Please input the maintenance date!' }]}
          >
            <Input placeholder="Date" type="date" />
          </Form.Item>
          <Form.Item
            name="description"
            rules={[{ required: true, message: 'Please input the maintenance description!' }]}
          >
            <Input placeholder="Description" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleAddMaintenance}>
              Add Maintenance
            </Button>
          </Form.Item>
        </Form>
      </TabPane>

      <TabPane tab="Documentation" key="3">
        <List
          header={<div>Documentation</div>}
          bordered
          dataSource={asset.documentation || []}
          renderItem={(item) => (
            <List.Item>
              <Descriptions bordered>
                <Descriptions.Item label={item.title}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    View Document
                  </a>
                </Descriptions.Item>
              </Descriptions>
            </List.Item>
          )}
        />

        <Form form={documentationForm} layout="inline" style={{ marginTop: 16 }}>
          <Form.Item
            name="title"
            rules={[{ required: true, message: 'Please input the document title!' }]}
          >
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item
            name="link"
            rules={[{ required: true, message: 'Please input the document link!' }]}
          >
            <Input placeholder="Link" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleAddDocumentation}>
              Add Documentation
            </Button>
          </Form.Item>
        </Form>
      </TabPane>
    </Tabs>
  );
};

export default AssetDetail;
