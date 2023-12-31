
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
import AddToy from "../pages/AddToy/AddToy";
import UpdateMyToy from "../pages/MyToys/UpdateMyToy";
import ErrorPage from "../pages/Error/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>,
        loader: () => fetch(`https://mah-heros-server.vercel.app/products/limit`)
      },
      {
        path: '/addtoy',
        element: <PrivateRoute>
          <AddToy></AddToy>
        </PrivateRoute>
      },
      {
        path: 'mytoys',
        element: <PrivateRoute>
          <MyToys></MyToys>
        </PrivateRoute>
      },
      {
        path: '/updateToy/:id',
        element: <UpdateMyToy></UpdateMyToy>,
        loader: ({ params }) => fetch(`https://mah-heros-server.vercel.app/products/${params.id}`)
      },
      {
        path: '/toy/:id',
        element: <PrivateRoute>
          <ToyInfo></ToyInfo>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://mah-heros-server.vercel.app/products/${params.id}`)
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