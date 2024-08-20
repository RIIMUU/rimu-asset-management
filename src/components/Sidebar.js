import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';
import logo from '../assets/logo.png';

const { Sider } = Layout;

const Sidebar = ({ collapsed, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} className="sidebar">
      <div className="logo-container">
      <img
          src={logo}
          alt="Logo"
          className={`logo ${collapsed ? 'collapsed-logo' : ''}`}  // Tambahkan kelas berdasarkan kondisi sidebar
        />
        {!collapsed && <span className="website-name">Rimu Asset Management</span>}
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => navigate('/home')}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<AppstoreOutlined />} onClick={() => navigate('/manage-assets')}>
          Manage Assets
        </Menu.Item>
        <Menu.Item key="3" icon={<LogoutOutlined />} onClick={() => navigate('/login')}>
          Logout
        </Menu.Item>
      </Menu>
      <Button
        type="primary"
        onClick={toggleSidebar}
        className="sidebar-toggle-button"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      />
    </Sider>
  );
};

export default Sidebar;
