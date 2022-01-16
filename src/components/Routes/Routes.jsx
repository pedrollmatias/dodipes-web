import { Routes, Route } from "react-router-dom";

import Layout from "../Layout/Layout";

import SettingsPage from "../../pages/Settings/SettingsPage";
import HomePage from "../../pages/Home/HomePage";
import OrdersPage from "../../pages/Orders/OrdersPage";
import MenuPage from "../../pages/Menu/MenuPage";
import TablesQrCodes from "../../pages/TablesQrCodes/TablesQrCodesPage";
import UsersPage from "../../pages/Users/UsersPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="dashboard" element={<HomePage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="menu" element={<MenuPage />} />
      <Route path="tables-qrcodes" element={<TablesQrCodes />} />
      <Route path="users" element={<UsersPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;
