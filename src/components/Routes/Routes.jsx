import { useContext } from "react";
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
import NotFoundPage from "../../pages/NotFound/NotFoundPage";
import { AuthContext } from "../../contexts/auth-context";

const AppRoutes = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/auth"
        element={loggedIn ? <Navigate to="/" /> : <AuthPage />}
      />
      <Route element={!loggedIn ? <Navigate to="/auth" /> : <MainLayout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="store-creation" element={<StoreCreationPage />} />
        <Route
          path="store"
          element={!loggedIn ? <Navigate to="/auth" /> : <StoreLayout />}
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="tables-qrcodes" element={<TablesQrCodes />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="token-panel" element={<TokenPanelPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
