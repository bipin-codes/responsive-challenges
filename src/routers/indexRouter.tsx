import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Teams from 'routes/Teams';
import App from 'App';
import ScareCrow from 'routes/ScareCrow';
import Interior from 'routes/Interior';
const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/scarecrow',
    element: <ScareCrow />,
  },
  {
    path: '/teams',
    element: <Teams />,
  },
  {
    path: '/interior',
    element: <Interior />,
  },
];

const indexRouter = createBrowserRouter(routes);

export default indexRouter;
