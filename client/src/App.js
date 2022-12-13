
import './App.scss';
import React from 'react';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Layout = () => {
  return (
    <div className='app'>
      <NavBar /> 
      <Home /> 
      <Footer /> 
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ]
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <h1>React Router</h1>
      </RouterProvider>
    </div>
  );
}

export default App;