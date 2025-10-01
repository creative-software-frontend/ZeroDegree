import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root/Root';
import Home from '../Pages/Home/Home';
import Policy from '../Pages/Policy/Policy';
import Terms from '../Pages/Terms/Terms';
import Meeting from '../Pages/meeting/Meeting';
import Sitemap from '../Pages/Sitemap/Sitemap';
import ReturnPolicy from '../Pages/Return_Policy/ReturnPolicy';

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
        path: '/meeting',
        Component: Meeting,
      },
      {
        path: '/privacy-policy',
        Component: Policy,
      },
       {
        path: '/terms',
        Component: Terms,
      },
       {
        path: '/sitemap',
        Component: Sitemap,
      },
       {
        path: '/return-policy',
        Component: ReturnPolicy,
      },
    ],
  },
]);
