import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Register/Registration";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import AllToys from "../pages/AllToys/AllToys";
import AddToy from "../pages/AddToy/AddToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/addToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);

export default router;
