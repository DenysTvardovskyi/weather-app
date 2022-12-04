import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router/public-routes';
import store from './redux/store';
import './index.css';
import Layout from './views/shared/layout';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <RouterProvider
          router={router}
          fallbackElement={<CircularProgress />}
        />
      </Layout>
    </Provider>
  </React.StrictMode>,
);
