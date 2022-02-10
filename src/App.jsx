import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";

import AppRoutes from "./components/Routes/Routes";

import { AuthProvider } from "./contexts/auth-context";
import { ApiErrorProvider } from "./contexts/api-error-context";

const App = () => (
  <ErrorBoundary>
    <Router>
      <ApiErrorProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ApiErrorProvider>
    </Router>
  </ErrorBoundary>
);

export default App;
