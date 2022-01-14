import { Redirect } from 'react-router-dom';
import RoutesRenderer from './RoutesRenderer';

const ChildRouteRenderer = ({ routes }) => {
  const [firstChildRoute] = routes;
  const { path: firstChildRoutePath } = firstChildRoute;

  return (
    <>
      <RoutesRenderer routes={routes} />
      {/* <Redirect to={firstChildRoutePath} /> */}
    </>
  );
};

export default ChildRouteRenderer;
