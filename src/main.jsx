import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Routes } from 'react-router-dom'
import About from './Pages/About.jsx'
import Home from './Pages/Home.jsx'
import Destinations from './Pages/Destinations.jsx'
import Packages from './Pages/Packages.jsx'
import Gallery from './Pages/Gallery.jsx'
// import Blog from './Pages/Blog.jsx'
import Testimonial from './Pages/Testimonial.jsx'
import Blog from './Pages/Blog.jsx'
import Contact from './Pages/Contact.jsx'
const router=createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/destinations',
          element:<Destinations/>
        },
        {
          path:'/packages',
          element:<Packages/>
        },
        {
          path:'/gallery',
          element:<Gallery/>
        },
        {
          path:'/test',
          element:<Testimonial/>
        },
        {
          path:'/blog',
          element:<Blog/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
