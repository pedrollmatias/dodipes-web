import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";

import AppRoutes from "./components/Routes/Routes";

import { AuthProvider } from "./contexts/auth-context";
import { ApiErrorProvider } from "./contexts/api-error-context";
import { LoadingProvider } from "./contexts/loading-context";

const App = () => (
  <ErrorBoundary>
    <LoadingProvider>
      <Router>
        <ApiErrorProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </ApiErrorProvider>
      </Router>
    </LoadingProvider>
  </ErrorBoundary>
);

export default App;
