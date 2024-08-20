import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Lazy load the pages
const Home = lazy(() => import('../pages/Home'));
const ManageAssets = lazy(() => import('../pages/ManageAssets'));
const Login = lazy(() => import('../pages/Login'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manage-assets" element={<ManageAssets />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
