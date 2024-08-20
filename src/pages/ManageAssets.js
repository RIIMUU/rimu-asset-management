import React, { useState } from 'react';
import { Layout, Row, Col, Card, Typography, Button, Modal, Spin } from 'antd';
import AssetList from '../components/AssetList';
import AssetForm from '../components/AssetForm';
import AssetDetail from '../components/AssetDetail';
import '../styles/ManageAssets.css';
import dummyAssets from '../data/dummyAssets';

const { Content } = Layout;
const { Title } = Typography;

const ManageAssets = () => {
  const [assets, setAssets] = useState(dummyAssets);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);

  const handleCreateAsset = (newAsset) => {
    setAssets([...assets, { ...newAsset, key: Date.now() }]);
    setIsModalVisible(false);
  };

  const handleUpdateAsset = (updatedAsset) => {
    setAssets(assets.map(asset => asset.key === updatedAsset.key ? updatedAsset : asset));
    setIsModalVisible(false);
  };

  const handleShowModal = () => {
    setSelectedAsset(null);
    setIsEditing(false);
    setIsModalVisible(true);
  };

  const handleEditAsset = (asset) => {
    setSelectedAsset(asset);
    setIsEditing(true);
    setIsModalVisible(true);
  };

  const handleShowDetails = (asset) => {
    setSelectedAsset(asset);
    setIsDetailModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setIsDetailModalVisible(false);
  };

  const handleAddMaintenance = (newMaintenance) => {
    const updatedAsset = {
      ...selectedAsset,
      maintenanceHistory: [...(selectedAsset.maintenanceHistory || []), newMaintenance],
    };
    handleUpdateAsset(updatedAsset);
    setSelectedAsset(updatedAsset);
  };

  const handleAddDocumentation = (newDoc) => {
    const updatedAsset = {
      ...selectedAsset,
      documentation: [...(selectedAsset.documentation || []), newDoc],
    };
    handleUpdateAsset(updatedAsset);
    setSelectedAsset(updatedAsset);
  };

  return (
    <Content className="manage-assets-content">
      <Title level={2} className="page-title">Manage Assets1</Title>
      <Row gutter={[16,16]}>
        <Col xs={24} sm={24} md={12} lg={6}>
          <Button type="primary" onClick={handleShowModal} className="add-asset-top-button">
            Add Asset
          </Button>
        </Col>
        <Col span={24}>
          <Card title="Assets List" className="asset-list-card">
            <AssetList 
              assets={assets} 
              onEditAsset={handleEditAsset} 
              onDeleteAsset={(key) => setAssets(assets.filter(asset => asset.key !== key))} 
              onShowDetails={handleShowDetails}
            />
            {/* {loading ? (
              <Spin tip="Loading assets..." size="large">
                <Card className="loading-card" />
              </Spin>
            ) : (
              <AssetList 
                assets={assets}
                onEditAsset={handleEditAsset}
                onDeleteAsset={handleDeleteAsset}
                onShowDetails={handleShowDetails}
              />
            )} */}
          </Card>
        </Col>
      </Row>

      {/* Modal for Add/Edit Asset */}
      <Modal
        title={isEditing ? "Edit Asset" : "Add Asset"}
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={null}
        maskClosable={true}
        maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(5px)' }}  
        width="60%"  
        style={{ borderRadius: '0px' }}  // Membuat modal berbentuk kotak
      >
        <AssetForm 
          onCreateAsset={handleCreateAsset} 
          onUpdateAsset={handleUpdateAsset} 
          assetToEdit={isEditing ? selectedAsset : null} 
        />
      </Modal>

      {/* Modal for Asset Details */}
      <Modal
        title="Asset Details"
        visible={isDetailModalVisible}
        onCancel={handleCloseModal}
        footer={null}
        maskClosable={true}
        maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(5px)' }}  
        width="60%"  
        style={{ borderRadius: '0px' }}  // Membuat modal berbentuk kotak
      >
        {selectedAsset && (
          <AssetDetail 
            asset={selectedAsset}
            onAddMaintenance={handleAddMaintenance}
            onAddDocumentation={handleAddDocumentation}
           />)}
      </Modal>
    </Content>
  );
};

export default ManageAssets;
