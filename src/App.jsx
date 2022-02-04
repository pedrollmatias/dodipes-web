import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./components/Routes/Routes";

import { AuthProvider } from "./contexts/auth";

const App = () => (
  <AuthProvider>
    <Router>
      <AppRoutes />
    </Router>
  </AuthProvider>
);

export default App;
