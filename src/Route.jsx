import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage"
import MainPage from "./MainPage"

const router = createBrowserRouter([
    {
    path:'/',
    element: <MainPage/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'in',
        element:<div>Ребенок</div>
      },
    ],
    }
])

export default router;