import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

  import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Mainlayout from './Components/MainLayout/Mainlayout';
import Home from './Components/Home/Home';
import Domain from './Components/Domain/Domain';
import Statistics from './Components/Statistics/Statistics';
import Viewdetails from './Components/ViewDetails/Viewdetails';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch(`/donation.json`)
        },
        {
          path: "/domain",
          element: <Domain></Domain> 
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>
        },
        {
          path: "/cardsData/:id",
          element: <Viewdetails></Viewdetails>,
          loader: ()=> fetch('/donation.json')
        }
      ]
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
