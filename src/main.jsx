// Desc: This is the main file for the react-portfolio app
// import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

// import pages that router will use
import App from './App';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
// import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
// import ResumePage from './pages/ResumePage';

// routes and corresponding components
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      // {
      //   path: '/portfolio',
      //   element:  <PortfolioPage />,
      // },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      // {
      //   path: '/resume',
      //   element: <ResumePage />,
      // },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
