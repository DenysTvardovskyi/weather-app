import { createBrowserRouter } from 'react-router-dom';
import Dashboard from 'pages/dashboard';
import CityPage from 'pages/city-page';
import ErrorPage from 'pages/error-page';
import Layout from '../views/shared/layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'weather',
        element: <CityPage />,
      },
    ],
  },
]);
