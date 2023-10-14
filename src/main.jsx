import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import Update from './components/Update.JSX';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path :"addCoffee",
    elememt:<AddCoffee></AddCoffee>,
  },
  {
path:"updateCoffee",
element:<Update></Update>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
