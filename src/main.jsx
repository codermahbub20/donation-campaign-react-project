import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

  import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Mainlayout from './Components/MainLayout/Mainlayout';
import Home from './Components/Home/Home';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        }
      ]
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
