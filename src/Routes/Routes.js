import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import AllBuyers from "../Pages/AllBuyers";
import AllSellers from "../Pages/AllSellers";
import Blog from "../Pages/Blog";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
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
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/users/buyers',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: 'category/:id',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,


            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/buyers',
                element: <AllBuyers></AllBuyers>,
                loader: () => fetch(`${process.env.REACT_APP_REQUEST_URL}/user/buyer`)
            },
            {
                path: '/dashboard/sellers',
                element: <AllSellers></AllSellers>,
                loader: () => fetch(`${process.env.REACT_APP_REQUEST_URL}/user/seller`)
            },

        ]

    }


])

export default router