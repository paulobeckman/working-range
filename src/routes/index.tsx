import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Global from 'src/layouts/Global';

const router = createBrowserRouter([
  {
    element: <Global />,
    children: [
      {
        path: '/',
        lazy: () => import('src/pages/Department'),
      },
      {
        path: '*',
        element: <div>Not Found</div>,
      },
    ],
  },
]);

export default <RouterProvider router={router} />;
