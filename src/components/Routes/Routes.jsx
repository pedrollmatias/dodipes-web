import { Routes, Route, Navigate } from "react-router-dom";

import StoreLayout from "../Layout/StoreLayout/StoreLayout";
import MainLayout from "../Layout/MainLayout/MainLayout";

import HomePage from "../../pages/Home/HomePage";
import StoreCreationPage from "../../pages/StoreCreation/StoreCreationPage";
import DashboardPage from "../../pages/Dashboard/DashboardPage";
import OrdersPage from "../../pages/Orders/OrdersPage";
import SettingsPage from "../../pages/Settings/SettingsPage";
import MenuPage from "../../pages/Menu/MenuPage";
import TablesQrCodes from "../../pages/TablesQrCodes/TablesQrCodesPage";
import UsersPage from "../../pages/Users/UsersPage";
import TokenPanelPage from "../../pages/TokenPanel/TokenPanelPage";
import AuthPage from "../../pages/Auth/AuthPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/auth" element={<AuthPage />} />
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Navigate to="auth" />} />
      <Route path="home" element={<HomePage />} />
      <Route path="store-creation" element={<StoreCreationPage />} />
    </Route>
    <Route path="store" element={<StoreLayout />}>
      <Route index element={<Navigate to="dashboard" />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="menu" element={<MenuPage />} />
      <Route path="tables-qrcodes" element={<TablesQrCodes />} />
      <Route path="users" element={<UsersPage />} />
      <Route path="token-panel" element={<TokenPanelPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;
