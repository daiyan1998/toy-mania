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
import SingleToy from "../pages/shared/SingleToy";
import About from "../pages/Home/About/About";

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
        path: "/allToys/:id",
        element: <SingleToy></SingleToy>,
        loader: ({ params }) =>
          fetch(
            `https://toy-market-server-brown.vercel.app/allToys/${params.id}`
          ),
      },
      {
        path: "/myToys/:id",
        element: (
          <PrivateRoute>
            <SingleToy></SingleToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-market-server-brown.vercel.app/allToys/${params.id}`
          ),
      },
      {
        path: "/addToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/singleToy",
        element: <SingleToy></SingleToy>,
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
