import { createBrowserRouter, RouteObject } from "react-router-dom";
import Teams from "routes/Teams";
import App from "App";
import ScareCrow from "routes/ScareCrow";
import Interior from "routes/Interior";
import Recipe from "routes/Recipe/Recipe";
import Gallery from "routes/Gallery";
import Checkout from "routes/Checkout";
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
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
];

const indexRouter = createBrowserRouter(routes);

export default indexRouter;
