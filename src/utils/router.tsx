import Layout from '@components/containers/Layout';
import { ROUTES } from '@constants/routes';
import HomePage from '@pages/Home';
import ProductPage from '@pages/Product';
import ShopPage from '@pages/Shop';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.shop,
        element: <ShopPage />,
      },
      {
        path: ROUTES.products(':id'),
        element: <ProductPage />,
      },
    ],
  },
]);
