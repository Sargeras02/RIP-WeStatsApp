import './App.css'

import React from 'react';

import MainNavBar from './components/MainNavBar';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import StationsListPage from './pages/StationsListPage.tsx';
import StationInfoPage from './pages/StationInfoPage.tsx';
import Footer from './components/MainFooter.tsx';
import LoginPage from './pages/LoginPage.tsx';
import ProfilePage from './pages/ProfilePage.tsx';
import NewMeasurementPage from './pages/NewMeasurementPage.tsx';
import UserPermissionsPage from './pages/management/UserPermissionsPage.tsx';
import NewStationPage from './pages/management/NewStationPage.tsx';
import OrderInfoPage from './pages/user/OrderInfoPage.tsx';
import UserOrdersPage from './pages/user/UserOrdersPage.tsx';
import OrdersDataPage from './pages/management/OrdersDataPage.tsx';
import MeasurementsPage from './pages/MeasurementsPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/stations',
    element: <StationsListPage />
  },
  {
    path: '/stations/:stationId',
    element: <StationInfoPage />
  },
  {
    path: '/measurements',
    element: <MeasurementsPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/profile/orders',
    element: <UserOrdersPage />
  },
  {
    path: '/profile/orders/current',
    element: <OrderInfoPage />
  },
  {
    path: '/profile/orders/:orderId',
    element: <OrderInfoPage />
  },
  {
    path: '/uploadmeasure',
    element: <NewMeasurementPage />
  },
  {
    path: '/admin/perms',
    element: <UserPermissionsPage />
  },
  {
    path: '/admin/orders',
    element: <OrdersDataPage />
  },
  {
    path: '/admin/addstation',
    element: <NewStationPage />
  }
])

const App: React.FC = () => {
  return (
    <div>
      <MainNavBar />
      <hr />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;