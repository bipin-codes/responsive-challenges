import { createBrowserRouter, RouteObject } from "react-router-dom";
import Teams from "routes/Teams";
import App from "App";
import ScareCrow from "routes/ScareCrow";
const routes: Array<RouteObject> = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/scarecrow",
    element: <ScareCrow />,
  },
  {
    path: "/teams",
    element: <Teams />,
  },
];

const indexRouter = createBrowserRouter(routes);

export default indexRouter;
