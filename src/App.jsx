import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";

import AppRoutes from "./components/Routes/Routes";

import { AuthProvider, ApiErrorProvider, StoreProvider } from "./contexts";

const App = () => (
  <ErrorBoundary>
    <Router>
      <ApiErrorProvider>
        <AuthProvider>
          <StoreProvider>
            <AppRoutes />
          </StoreProvider>
        </AuthProvider>
      </ApiErrorProvider>
    </Router>
  </ErrorBoundary>
);

export default App;
