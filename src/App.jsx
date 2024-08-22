
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Layout from './Components/Layout/Layout';
import { Children } from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact.jsx/Contact';


const router = createBrowserRouter([

  {path:"Contact-Website" , element: <Layout /> , children :[

    {index:true , element:<Home />},
    {path: "home" , element:<Home />},
    {path: "about" , element:<About />},
    {path: "portfolio" , element:<Portfolio />},
    {path: "contact" , element:<Contact />},

  ]},

])

function App() {
  

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
