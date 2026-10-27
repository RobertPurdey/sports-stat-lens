import { createBrowserRouter } from 'react-router';
import AppLayout from '@/app/app-layout';
import HomePage from '@/pages/home';
import NflPage from '@/nfl/pages/nfl-page';

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      {
        path: '/',
        Component: HomePage
      },
      {
        path: '/nfl',
        Component: NflPage
      }
    ],
  },
]);