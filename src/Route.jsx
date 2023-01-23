import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage"
import MainPage from "./MainPage"
import AuthForm from './components/AuthForm';
import Authentication from './components/Authentication';
import BeginningPage from './components/BeginningPage';

const router = createBrowserRouter([
    {
    path: '/',
    element: <MainPage/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: '/',
        element: <BeginningPage/>
      },
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