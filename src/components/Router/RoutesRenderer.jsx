import RouteWithSubRoutes from './RouteWithSubRoutes';

const RoutesRenderer = ({ routes }) => routes.map((route) => <RouteWithSubRoutes key={route.path} {...route} />);

export default RoutesRenderer;
