import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RoutesRenderer from './RoutesRenderer';
import Layout from '../Layout/Layout';

const AppRouter = ({ routes }) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <RoutesRenderer routes={routes} />
        <Route component={() => <h1>Not found</h1>} />;
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default AppRouter;
