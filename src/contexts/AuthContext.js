import React, { createContext, useState } from 'react';

// Membuat konteks autentikasi
export const AuthContext = createContext();

// Penyedia konteks autentikasi
export const AuthContextProvider = ({ children }) => {
  // State untuk melacak apakah pengguna terautentikasi
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fungsi untuk login, akan mengatur isAuthenticated ke true
  const login = () => {
    setIsAuthenticated(true);
    // Anda bisa menambahkan logika lain di sini, seperti menyimpan token ke localStorage
  };

  // Fungsi untuk logout, akan mengatur isAuthenticated ke false
  const logout = () => {
    setIsAuthenticated(false);
    // Anda bisa menambahkan logika lain di sini, seperti menghapus token dari localStorage
  };

  // Menyediakan nilai-nilai konteks ke seluruh aplikasi
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
