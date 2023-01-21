import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage"
import MainPage from "./MainPage"
import Inputs from './Inputs';

const router = createBrowserRouter([
    {
    path:'/',
    element: <MainPage/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'in',
        element: <Inputs/>
      },
    ],
    }
])

export default router;