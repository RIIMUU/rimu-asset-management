// import React, { useContext } from 'react';
// import { Layout, Menu } from 'antd';
// import { Link } from 'react-router-dom';
// import { ThemeContext } from '../contexts/ThemeContext';
// import { Switch } from 'antd';
// import '../styles/Navbar.css';

// const { Header } = Layout;

// const Navbar = () => {
//   const { isDarkMode, toggleTheme } = useContext(ThemeContext);

//   return (
//     <Header className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
//       <div className="logo">Asset Management</div>
//       <Menu theme={isDarkMode ? 'dark' : 'light'} mode="horizontal" defaultSelectedKeys={['home']}>
//         <Menu.Item key="home">
//           <Link to="/home">Home</Link>
//         </Menu.Item>
//         <Menu.Item key="manage">
//           <Link to="/manage-assets">Manage Assets</Link>
//         </Menu.Item>
//         <Menu.Item key="logout">
//           <Link to="/logout">Logout</Link>
//         </Menu.Item>
//         <Menu.Item key="theme-toggle" className="theme-toggle-item">
//           <Switch checked={isDarkMode} onChange={toggleTheme} />{' '}
//           {isDarkMode ? 'Dark Mode' : 'Light Mode'}
//         </Menu.Item>
//       </Menu>
//     </Header>
//   );
// };

// export default Navbar;
