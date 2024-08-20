import React, { useState, useRef, useMemo } from "react";
import { Table, Button, Tooltip, Input, Space, Dropdown, Menu, Checkbox, AutoComplete } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  SearchOutlined,
  FilterOutlined,
  DownloadOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import "../styles/AssetList.css";
import GestureModal from './GestureModal';

const AssetList = ({ assets, onEditAsset, onDeleteAsset, onShowDetails }) => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: assets.length,
  });
  const [globalSearchText, setGlobalSearchText] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const options = assets.map(asset => ({ value: asset.name }));

  const iconStyle = { fontSize: '16px', color: 'var(--text-color)' };

  const handleGlobalSearch = (value) => {
    setGlobalSearchText(value);
    const filteredAssets = assets.filter(asset => 
      Object.keys(asset).some(key => 
        asset[key] ? asset[key].toString().toLowerCase().includes(value.toLowerCase()) : false
      )
    );
    setPagination({ ...pagination, total: filteredAssets.length });
  };

  const handleSelectSuggestion = (value) => {
    setGlobalSearchText(value);
    const filteredAssets = assets.filter(asset => 
      Object.keys(asset).some(key => 
        asset[key] ? asset[key].toString().toLowerCase().includes(value.toLowerCase()) : false
      )
    );
    setPagination({ ...pagination, total: filteredAssets.length });
  };

  const clearGlobalSearch = () => {
    setGlobalSearchText("");
    setPagination({ ...pagination, total: assets.length });
  };

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
    setPagination(pagination);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
    setSearchText("");
    setSearchedColumn("");
    setGlobalSearchText("");
    setPagination({ ...pagination, total: assets.length });
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
        
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 200,
      sorter: (a, b) => a.name.localeCompare(b.name),
      ...getColumnSearchProps("name"),
      filteredValue: filteredInfo.name || null,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: 150,
      sorter: (a, b) => a.type.localeCompare(b.type),
      filters: [
        { text: "Laptop", value: "Laptop" },
        { text: "Desktop", value: "Desktop" },
        { text: "Monitor", value: "Monitor" },
        { text: "Printer", value: "Printer" },
        { text: "Router", value: "Router" },
        { text: "Tablet", value: "Tablet" },
        { text: "Smartphone", value: "Smartphone" },
      ],
      onFilter: (value, record) => record.type.indexOf(value) === 0,
      filteredValue: filteredInfo.type || null,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 150,
      sorter: (a, b) => a.status.localeCompare(b.status),
      filters: [
        { text: "Good", value: "Good" },
        { text: "Needs Repair", value: "Needs Repair" },
        { text: "Damaged", value: "Damaged" },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      filteredValue: filteredInfo.status || null,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      width: 150,
      sorter: (a, b) => a.location.localeCompare(b.location),
      filters: [
        { text: "Head Office", value: "Head Office" },
        { text: "Branch Office 1", value: "Branch Office 1" },
        { text: "Branch Office 2", value: "Branch Office 2" },
        { text: "Branch Office 3", value: "Branch Office 3" },
        { text: "Data Center", value: "Data Center" },
      ],
      onFilter: (value, record) => record.location.indexOf(value) === 0,
      filteredValue: filteredInfo.location || null,
    },
    // Tambahkan kolom filtering berdasarkan rentang harga (Cost)
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
      width: 150,
      sorter: (a, b) => a.cost - b.cost,
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys = [],
        confirm,
        clearFilters,
        close
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Min Cost"
            value={selectedKeys[0] || ''}
            onChange={(e) => setSelectedKeys([e.target.value, selectedKeys[1]])}
            style={{ marginBottom: 8, display: "block" }}
            type="number"
          />
          <Input
            placeholder="Max Cost"
            value={selectedKeys[1] || ''}
            onChange={(e) => setSelectedKeys([selectedKeys[0], e.target.value])}
            style={{ marginBottom: 8, display: "block" }}
            type="number"
          />
          <Space>
            <Button
              type="primary"
              onClick={() => { confirm(); close(); }}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => { clearFilters(); close(); }} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </Space>
        </div>
      ),
      onFilter: (value, record) => {
        const min = parseFloat(value[0]);
        const max = parseFloat(value[1]);
        if (isNaN(min) && isNaN(max)) return true;
        if (!isNaN(min) && !isNaN(max)) return record.cost >= min && record.cost <= max;
        if (!isNaN(min)) return record.cost >= min;
        if (!isNaN(max)) return record.cost <= max;
        return false;
      },
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      render: text => `Rp ${text.toLocaleString()}`,
    },
    {
      title: "Actions",
      key: "actions",
      width: 150,
      render: (text, record) => (
        <>
          <Tooltip title="Details">
            <Button
              type="link"
              icon={<EyeOutlined style={iconStyle} />}
              onClick={() => onShowDetails(record)}
            />
          </Tooltip>
          <Tooltip title="Edit">
            <Button
              type="link"
              icon={<EditOutlined style={iconStyle} />}
              onClick={() => onEditAsset(record)}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              type="link"
              icon={<DeleteOutlined style={iconStyle} />}
              danger
              onClick={() => onDeleteAsset(record.key)}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  const [selectedColumns, setSelectedColumns] = useState(columns.map(col => col.key));

  const handleMenuClick = (key) => {
    setSelectedColumns(prev => prev.includes(key) ? prev.filter(col => col !== key) : [...prev, key]);
  };

  // const handleCheckboxChange = (key) => {
  //   setSelectedColumns(prev => 
  //     prev.includes(key) ? prev.filter(col => col !== key) : [...prev, key]
  //   );
  // };
  const handleCheckboxChange = (checkedValues) => {
    setSelectedColumns(checkedValues);
  };
  
  const menu = (
    <Checkbox.Group value={selectedColumns} onChange={handleCheckboxChange}>
      {columns.map(col => (
        <Checkbox key={col.key} value={col.key}>
          {col.title}
        </Checkbox>
      ))}
    </Checkbox.Group>
    // <Menu onClick={(e)=>e.preventDefault}>
    //   {columns.map(col => (
      //     <Menu.Item key={col.key}>
      //       <Checkbox
      //         checked={selectedColumns.includes(col.key)}
      //         onChange={() => handleMenuClick(col.key)}
      //       >
      //         {col.title}
      //       </Checkbox>
      //     </Menu.Item>
      //   ))}
      // </Menu>
      // <Menu
      //   onClick={(e) => e.preventDefault()}  // Prevent default behavior to keep the dropdown open
      //   items={columns.map(col => ({
        //     key: col.key,
        //     label: (
          //       <Checkbox
          //         checked={selectedColumns.includes(col.key)}
          //         onChange={() => handleMenuClick(col.key)}
          //       >
          //         {col.title}
          //       </Checkbox>
          //     ),
          //   }))}
          // />
        );
        const filteredColumns = columns.filter(col => selectedColumns.includes(col.key));
        
  // // Menghitung total biaya untuk semua aset
  // const totalCost = useMemo(() => {
  //   return assets.reduce((sum, asset) => sum + asset.cost, 0);
  // }, [assets]);

  // // Menghitung total biaya untuk aset pada halaman saat ini
  // const currentPageTotalCost = useMemo(() => {
  //   const startIndex = (pagination.current - 1) * pagination.pageSize;
  //   const endIndex = startIndex + pagination.pageSize;
  //   return assets.slice(startIndex, endIndex).reduce((sum, asset) => sum + asset.cost, 0);
  // }, [assets, pagination]);

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft" arrow>
          <Button>Customize Columns</Button>
        </Dropdown>
        {/* <Dropdown overlay={menu} trigger={['click']}>
          <Button type="primary" style={{ marginBottom: 16 }}>
            Customize Columns
          </Button>
        </Dropdown> */}
        {/* <Table
          columns={filteredColumns}
          dataSource={assets}
          pagination={pagination}
          // ... other props
        /> */}
        {/* <Input
          placeholder="Search in all columns"
          value={globalSearchText}
          onChange={handleGlobalSearch}
          style={{ width: 300 }}
          suffix={
            globalSearchText ? (
              <CloseOutlined onClick={clearGlobalSearch} />
            ) : (
              <SearchOutlined />
            )
          }
        /> */}
        <AutoComplete
          options={options}
          value={globalSearchText}
          suffixIcon={
            globalSearchText ? (
              <CloseOutlined onClick={clearGlobalSearch}/>
              ) : (
              <SearchOutlined />
            )
          }
          // onSearch={handleGlobalSearch}
          onChange={handleGlobalSearch}
          onSelect={handleSelectSuggestion}
          style={{ width: 300 }}
        >
          <Input.Search placeholder="Search in all columns" />
        </AutoComplete>
        <Button onClick={clearFilters} icon={<FilterOutlined />}>
          Clear Filters
        </Button>
        <Button onClick={clearAll} icon={<FilterOutlined />}>
          Clear All
        </Button>
        {/* <Button type="primary" onClick={() => setModalVisible(true)}>
          Open Modal
        </Button>
        <GestureModal visible={isModalVisible} onClose={() => setModalVisible(false)}>
          <p>Content inside the modal</p>
        </GestureModal>         */}
      </Space>
      <p style={{ textAlign: 'right', fontSize: '16px' }}>
        Showing {pagination.pageSize * (pagination.current - 1) + 1} to{' '}
        {Math.min(pagination.pageSize * pagination.current, pagination.total)} of{' '}
        {pagination.total || assets.length} items
      </p>
      <Table
        // columns={columns}
        columns={filteredColumns}
        // dataSource={filteredAssets}
        dataSource={assets.filter((asset) =>
          Object.keys(asset).some((key) =>
            asset[key]
              ? asset[key].toString().toLowerCase().includes(globalSearchText.toLowerCase())
              : false
          )
        )}
        // dataSource={assets}
        //... other props
        rowClassName={(record, index) => index % 2 === 0? 'even-row' : 'odd-row'}  // Menetapkan warna baris
        locale={{ emptyText: 'No assets found' }}  // Menampilkan pesan ketika data kosong
        // bordered={true}  // Menampilkan border pada tabel
        // size="small"  // Menetapkan ukuran font pada tabel
        // expandable={{
        //   expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
        // }}
        // expandedRowKeys={expandedRowKeys}  // Menampilkan expanded row
        // onExpandedRowsChange={(expanded, record) => setExpandedRowKeys(expanded? record.key : [])}  // Mengatur expanded row
        // expandIcon={(record, expanded) => expanded? <
        className="asset-list-table"
        pagination={{ 
          ...pagination,
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '50'],
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`, 
        }}
        rowKey="key"
        scroll={{ x: 1800, y: 500 }}  // Menambahkan scroll horizontal dan vertikal
        sticky  // Membuat judul tabel statis
        onChange={handleChange}
      />
      {/* <div style={{ marginTop: 16, textAlign: 'right', fontSize: '16px' }}>
       <p>Total Cost for Current Page: Rp {currentPageTotalCost.toLocaleString()}</p>
       <p>Total Cost for All Data: Rp {totalCost.toLocaleString()}</p>
      </div> */}
    </>
  );
};

export default AssetList;
