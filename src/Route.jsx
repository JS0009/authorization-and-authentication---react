import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage"
import MainPage from "./MainPage"
import AuthForm from './components/AuthForm';
import Authentication from './components/Authentication';

const router = createBrowserRouter([
    {
    path:'/',
    element: <MainPage/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'in',
        element: <AuthForm />
      },
      {
        path:'in2',
        element: <Authentication />
      }
    ],
    }
])

export default router;