import ChildRouteRenderer from './ChildRouteRenderer';
import Home from '../Home/Home';
import AnnouceDonation from '../AnnouceDonation/AnnouceDonation';
import Search from '../Search/Search';
import Announcement from '../Annoucement/Announcement';
import UserAccount from '../UserAccount/UserAccount';
import UserAnnouncements from '../UserAnnoucements/UserAnnouncements';

const routes = [
  {
    path: '/',
    exact: true,
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => <Home />,
  },
  {
    path: '/announce-donation',
    component: () => <AnnouceDonation />,
  },
  {
    path: '/search',
    component: () => <Search />,
  },
  {
    path: '/announcement',
    component: () => <Announcement />,
  },
  {
    path: '/user',
    component: (props) => <ChildRouteRenderer {...props} />,
    routes: [
      {
        path: '/user/account',
        exact: true,
        component: () => <UserAccount />,
      },
      {
        path: '/user/announcements',
        exact: true,
        component: () => <UserAnnouncements />,
      },
    ],
  },
];

export default routes;
