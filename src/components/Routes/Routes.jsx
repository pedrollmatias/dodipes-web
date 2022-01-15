import { Routes, Route } from "react-router-dom";

import Layout from "../Layout/Layout";

import Settings from "../../pages/Settings/Settings";
import HomePage from "../../pages/Home/HomePage";
import OrdersPage from "../../pages/Orders/OrdersPage";
import MenuPage from "../../pages/Menu/MenuPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="dashboard" element={<HomePage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="settings" element={<Settings />} />
      <Route path="menu" element={<MenuPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;
