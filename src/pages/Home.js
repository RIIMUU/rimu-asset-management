import React from 'react';
import { Layout, Typography } from 'antd';
import '../styles/Home.css';

const { Content } = Layout;
const { Title } = Typography;

const Home = () => {
  return (
    <Content className="home-content">
      <Title>Welcome to the Asset Management System</Title>
      <p>Use the navigation to manage assets.</p>
    </Content>
  );
};

export default Home;
