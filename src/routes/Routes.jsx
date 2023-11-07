import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddBlog from "../pages/addBlog/AddBlog";
import AllBlogs from "../pages/allBlogs/AllBlogs";
import Featured from "../pages/featured/Featured";
import Wishlist from "../pages/wishlist/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/allposts')
      },
      {
        path: "/addblog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/allblogs",
        element: <AllBlogs></AllBlogs>,
        loader: () => fetch('http://localhost:5000/allposts')
      },
      {
        path: "/featured",
        element: <Featured></Featured>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
