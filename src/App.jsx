// import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// pages and components
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import ForgotPassword from "./pages/Auth/ForgotPassword"
import Home from "./pages/Home"
import Product from "./pages/Product"
import DetailProduct from "./pages/DetailProduct"
import CheckOut from "./pages/Checkout"
import HistoryOrder from "./pages/HistoryOrder"
import DetailOrder from "./pages/DetailOrder"
import Profile from "./pages/Profile"
import PrivateRoute from "./components/PrivateRoute"

// redux integration
import { Provider } from "react-redux"
import { store } from "./redux/store"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/product",
    element: <Product />
  },
  {
    path: `/detail-product/:id`,
    element: <DetailProduct />
  },
  {
    path: "/checkout",
    element: <PrivateRoute><CheckOut /></PrivateRoute>
  },
  {
    path: "/history-order",
    element: <PrivateRoute><HistoryOrder /></PrivateRoute>
  },
  {
    path: "/detail-order",
    element: <PrivateRoute><DetailOrder /></PrivateRoute>
  },
  {
    path: "/profile",
    element: <PrivateRoute><Profile /></PrivateRoute>
  }
])

const App = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App