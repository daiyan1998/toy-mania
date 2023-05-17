import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);

export default router;
