import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Component/Home/Home';
import OrderReview from './Component/OrderReview/OrderReview';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('tshirts.json')
      },
      {
        path: "order",
        element: <OrderReview></OrderReview>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
