import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import ErrorPage from './ErrorPage';
import Resume from './Resume';
import Root from './Root';
import Tutor from './Details/Tutor';
import Council from './Details/Council';
import Sports from './Details/Sports';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "resume",
        element: <Resume></Resume>
      },
      {
        path: "tutor",
        element: <Tutor></Tutor>
      },
      {
        path: "council",
        element: <Council></Council>
      },
      {
        path: "sports",
        element: <Sports></Sports>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
