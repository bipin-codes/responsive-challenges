import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import ScareCrow from "../routes/ScareCrow";
const routes: Array<RouteObject> = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/scarecrow",
    element: <ScareCrow />,
  },
];

const indexRouter = createBrowserRouter(routes);

export default indexRouter;
