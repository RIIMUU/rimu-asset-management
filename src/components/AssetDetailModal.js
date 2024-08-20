import { Descriptions, Modal, Tabs, Progress } from 'antd';

const { TabPane } = Tabs;

const AssetDetailModal = ({ visible, onClose, asset }) => (
  <Modal visible={visible} onCancel={onClose} footer={null}>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Informasi Umum" key="1">
        <Descriptions title="Asset Details" bordered>
          {/* Display general asset info */}
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
      <TabPane tab="Riwayat Pemeliharaan" key="2">
        {/* Display maintenance history */}
      </TabPane>
      <TabPane tab="Dokumentasi" key="3">
        {/* Display documentation */}
      </TabPane>
    </Tabs>
    <h3>Status Asset</h3>
    <Progress percent={asset.status === 'Good' ? 100 : asset.status === 'Needs Repair' ? 50 : 10} />
    <h3>Warranty Expiry</h3>
    <Progress
      type="circle"
      percent={(new Date().getTime() - new Date(asset.purchaseDate).getTime()) /
        (new Date(asset.warrantyExpiry).getTime() - new Date(asset.purchaseDate).getTime()) * 100}
    />
  </Modal>
);

export default AssetDetailModal;
