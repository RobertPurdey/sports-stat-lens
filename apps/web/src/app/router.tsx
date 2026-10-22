import { createBrowserRouter } from 'react-router';
import AppLayout from '@/app/AppLayout';
import HomePage from '@/pages/HomePage';
import NflPage from '@/nfl/pages/NflPage';

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