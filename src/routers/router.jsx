
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
import PrivateRoute from "./PrivateRoute";
import ToyInfo from "../pages/ToyInfo/ToyInfo";


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
            element: <AllToys></AllToys>,
            loader: ()=>fetch(`http://localhost:5000/products/`)
        },
        {
            path: 'mytoys',
            element: <PrivateRoute>
              <MyToys></MyToys>
            </PrivateRoute>
        },
        {
          path: '/toyinfo/:id',
          element:<PrivateRoute>
            <ToyInfo></ToyInfo>
          </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
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