import Dashboard from '../pages/Dashboard';
import Management from '../pages/Management';
import Event from '../pages/Event';

const routes = [
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/management',
    component: Management
  },
  {
    path: '/events',
    component: Event
  }
];

export default routes;
