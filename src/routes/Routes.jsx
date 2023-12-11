// Routes.jsx file 

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
import PostDetail from "../pages/postDetail/PostDetail";
import UpdateBlog from "../pages/updateBlog/UpdateBlog";
import PrivateRoute from "./PrivateRoute";
import Comment from "../pages/postDetail/Comment";
import Profile from "../pages/profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://insta-sohor-server.vercel.app/allposts"),
      },
      {
        path: "/addblog",
        element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>,
      },
      {
        path: "/updateblog/:id",
        element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://insta-sohor-server.vercel.app/allposts/${params.id}`),
      },
      {
        path: "/allblogs",
        element: <AllBlogs></AllBlogs>,
        loader: () => fetch("https://insta-sohor-server.vercel.app/allposts"),
      },
      {
        path: "/featured",
        element: <Featured></Featured>,
        loader: () => fetch("https://insta-sohor-server.vercel.app/allposts"),
      },
      {
        path: "/wishlist",
        element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>,
        loader: () => fetch("https://insta-sohor-server.vercel.app/wishlist"),
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allposts/:id", // Add the new route for post detail
        element: <PrivateRoute><PostDetail></PostDetail></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://insta-sohor-server.vercel.app/allposts/${params.id}`),
          
      },  
      {
        path: "/comment",
        element: <PrivateRoute>   <Comment></Comment>     </PrivateRoute>,
        loader: () => fetch("https://insta-sohor-server.vercel.app/comment"),
      },     
    ],
  },
]);

export default router;
