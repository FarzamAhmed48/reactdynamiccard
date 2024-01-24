import React from 'react'
import ProductData from './ProductData'
import Card_Template from './Card';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Card_Navigate from './Card_Navigate';

const router = createBrowserRouter([
  
  {
    path: "/card",
    element:<Card_Template/>,
  },
  {
    path: "/cardNav/:id",
    element:<Card_Navigate/>,
  }
]);
const App = () => {

  
  return (

    <>
    
       <RouterProvider router={router} />
    </>
    

  )
}

export default App

