import Layout from '@components/Layout';
import HomePage from '@pages/Home';
import Shop from '@pages/Shop';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
    ],
  },
]);
