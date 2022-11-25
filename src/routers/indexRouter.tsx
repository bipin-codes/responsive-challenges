import { createBrowserRouter, RouteObject } from "react-router-dom";
import Teams from "routes/Teams";
import App from "App";
import ScareCrow from "routes/ScareCrow";
import Interior from "routes/Interior";
import Recipe from "routes/Recipe/Recipe";
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
  {
    path: "/interior",
    element: <Interior />,
  },
  {
    path: "/recipe",
    element: <Recipe />,
  },
];

const indexRouter = createBrowserRouter(routes);

export default indexRouter;
