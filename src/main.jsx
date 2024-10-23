import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Recipes from './assets/Components/Recipes/Recipes.jsx';
import Blog from './assets/Components/Blog/Blog.jsx';
import Contact from './assets/Components/Contact/Contact.jsx';
import App from './App.jsx';
import Home from './assets/Components/Home/Home.jsx';
import About_Us from './assets/Components/About_Us/About_Us.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/recipes',
        element: <Recipes></Recipes>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/about-us',
        element: <About_Us />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
