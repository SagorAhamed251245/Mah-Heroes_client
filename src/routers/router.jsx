
import Main from "../Main/Main";
import AllToys from "../pages/AllToys/AllToys";
import Home from "../pages/Home/Home";
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MyToys from "../pages/MyToys/MyToys";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path: '/alltoys',
            element: <AllToys></AllToys>
        },
        {
            path: 'mytoys',
            element: <MyToys></MyToys>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'singup',
            element: <SingUp></SingUp>
        }
      ]
    },
  ]);
  export default router 