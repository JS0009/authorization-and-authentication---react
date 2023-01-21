import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage"
import MainPage from "./MainPage"
import MyInput from './MyInput/MyInput';

const router = createBrowserRouter([
    {
    path:'/',
    element: <MainPage/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'in',
        element: <MyInput />
      },
    ],
    }
])

export default router;