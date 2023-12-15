// import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ForgotPassword from "./pages/ForgotPassword"
import Home from "./pages/Home"
import Project from "./pages/Project"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/product',
    element: <Project />
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App