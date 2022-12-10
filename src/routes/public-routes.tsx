import Dashboard from '../views/pages/dashboard';
import CityPage from '../views/pages/city-page';
import ErrorPage from '../views/pages/error-page';
import * as React from 'react';
import Layout from '../views/shared/layout';

export const routerConfig = [
  {
    path: '/weather-app/',
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
];
