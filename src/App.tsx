import './App.css'

import React from 'react';

import MainNavBar from './components/MainNavBar';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import UpdateStationDataPage from './pages/management/UpdateStationDataPage.tsx';
import EditMeasurementsPage from './pages/management/EditMeasurementsPage.tsx';
import SignupPage from './pages/SignupPage.tsx';
import Breadcrumbs from './components/Breadcrumbs .tsx';

const baseUrl = '/RIP-WeStatsApp'

const routes = [
  {
    path: baseUrl + '/',
    element: <HomePage />
  },
  {
    path: baseUrl + '/stations',
    element: <StationsListPage />
  },
  {
    path: baseUrl + '/stations/:stationId',
    element: <StationInfoPage />
  },
  {
    path: baseUrl + '/measurements',
    element: <MeasurementsPage />
  },
  {
    path: baseUrl + '/login',
    element: <LoginPage />
  },
  {
    path: baseUrl + '/signup',
    element: <SignupPage />
  },
  {
    path: baseUrl + '/profile',
    element: <ProfilePage />
  },
  {
    path: baseUrl + '/profile/orders',
    element: <UserOrdersPage />
  },
  {
    path: baseUrl + '/profile/orders/current',
    element: <OrderInfoPage />
  },
  {
    path: baseUrl + '/profile/orders/:orderId',
    element: <OrderInfoPage />
  },
  {
    path: baseUrl + '/uploadmeasure',
    element: <NewMeasurementPage />
  },
  {
    path: baseUrl + '/admin/perms',
    element: <UserPermissionsPage />
  },
  {
    path: baseUrl + '/admin/orders',
    element: <OrdersDataPage />
  },
  {
    path: baseUrl + '/admin/addstation',
    element: <NewStationPage />
  },
  {
    path: baseUrl + '/admin/editstation/:stationId',
    element: <UpdateStationDataPage />
  },
  {
    path: baseUrl + '/admin/editmeasurements',
    element: <EditMeasurementsPage />
  },
  {
    path: '/a',
    element: <HomePage />
  },
  {
    path: 'b',
    element: <HomePage />
  },
  {
    path: '/c/',
    element: <HomePage />
  }
]
//const router = createBrowserRouter(routes)

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div>
        <MainNavBar />
        <Breadcrumbs />
        <hr />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;