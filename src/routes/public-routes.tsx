import { createBrowserRouter } from 'react-router-dom';
import Dashboard from 'pages/dashboard';
import CityPage from 'pages/city-page';
import ErrorPage from 'pages/error-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'weather',
    element: <CityPage />,
  },
]);
