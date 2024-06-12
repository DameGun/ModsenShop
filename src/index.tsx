import ReactDOM from 'react-dom/client';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@utils/router';
import { Provider } from 'react-redux';
import { store } from '@store';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
