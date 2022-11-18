import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ScareCrow from "../routes/ScareCrow";
const indexRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/scarecrow", element: <ScareCrow /> },
]);

export default indexRouter;
