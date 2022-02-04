import { Route, Navigate } from "react-router-dom";

export const PrivateRoute = ({ loggedIn, ...props }) =>
  loggedIn ? <Route {...props} /> : <Route element={<Navigate to="auth" />} />;
