import React, { useContext } from 'react';
import { Switch } from 'antd';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <span style={{ marginRight: 8 }}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
      <Switch checked={isDarkMode} onChange={toggleTheme} />
    </div>
  );
};

export default ThemeToggle;
