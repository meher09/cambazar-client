import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import AddProduct from "../Pages/AddProduct";
import AllBuyers from "../Pages/AllBuyers";
import AllSellers from "../Pages/AllSellers";
import Blog from "../Pages/Blog";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyProduct from "../Pages/MyProduct";
import Register from "../Pages/Register";
import ReportedItems from "../Pages/ReportedItems";
import SingleCategory from "../Pages/SingleCategory";
import SingleProduct from "../Pages/SingleProduct";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/users/buyers',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: 'category/:category',
                element: <PrivateRoute><SingleCategory></SingleCategory></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.category}`)
            },
            {
                path: 'product/:id',
                element: <PrivateRoute><SingleProduct></SingleProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/dashboard/buyers',
                element: <PrivateRoute><AllBuyers></AllBuyers></PrivateRoute>,
                loader: () => fetch(`${process.env.REACT_APP_REQUEST_URL}/user/role/buyer`)
            },
            {
                path: '/dashboard/sellers',
                element: <PrivateRoute><AllSellers></AllSellers></PrivateRoute>,
                loader: () => fetch(`${process.env.REACT_APP_REQUEST_URL}/user/role/seller`)
            },
            {
                path: '/dashboard/reported',
                element: <PrivateRoute><ReportedItems></ReportedItems></PrivateRoute>,
                loader: () => fetch(`${process.env.REACT_APP_REQUEST_URL}/reported`)
            },
            {
                path: '/dashboard/add-product',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
                loader: () => fetch(`${process.env.REACT_APP_REQUEST_URL}/reported`)
            },
            {
                path: '/dashboard/my-products',
                element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>,
            },

        ]

    }


])

export default router