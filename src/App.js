import React, {useContext, useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
// import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';
import AppRoutes from './routes/routes';  // Import AppRoutes
import './styles/App.css';

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  const [collapsed, setCollapsed] = useState(false)
  // Implementasi tombol sidebar toggler  // gunakan toggleSidebar() ketika tombol diklik
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={isDarkMode ? 'app dark-mode' : 'app light-mode'}>
      <Router>
        <div className='layout-container'>  
          <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar}/>
          <div className={`site-layout ${collapsed ? 'collapsed' : ''}`}>
            <div className="content">
              <AppRoutes />  {/* Gunakan AppRoutes untuk menampilkan rute */}
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default function MainApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
