import { createBrowserRouter } from 'react-router-dom';
import Layout from '@components/containers/Layout';
import { ROUTES } from '@constants/routes';
import CartPage from '@pages/Cart';
import ContactPage from '@pages/Contact';
import HomePage from '@pages/Home';
import NotFoundPage from '@pages/NotFound';
import ProductPage from '@pages/Product';
import ShopPage from '@pages/Shop';

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
      {
        path: ROUTES.cart,
        element: <CartPage />,
      },
      {
        path: ROUTES.contact,
        element: <ContactPage />,
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
