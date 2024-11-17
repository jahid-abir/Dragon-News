import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news/:Id",
    element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
    loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.Id}`)
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;
