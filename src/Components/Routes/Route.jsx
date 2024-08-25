import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root/Root';
import Home from '../Pages/Home/Home';
import Admin from '../Layout/Admin/Admin';
import AdminHome from '../Pages/AdminPages/AdminHome';
import AddProduct from '../Layout/Admin/AddProduct';

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ],

    },
    {
        path: "/admin",
        element: <Admin></Admin>,
        children: [
            {
                path: "/admin",
                element: <AdminHome></AdminHome>
            },
            {
                path: "admin/addProduct",
                element: <AddProduct></AddProduct>
            }
        ]
    }
])

export default Route;