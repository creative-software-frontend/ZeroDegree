import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root/Root';
import Home from '../Pages/Home/Home';
import Policy from '../Pages/Policy/Policy';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/privacy-policy',
        Component: Policy,
      },
    ],
  },
]);
